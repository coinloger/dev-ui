
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createJiti } from 'jiti';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize jiti with cache disabled
const jiti = createJiti(__filename, { cache: false, requireCache: false });

// --- Theme Generation Logic ---
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

function deepMerge(target, source) {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target))
                    Object.assign(output, { [key]: source[key] });
                else
                    output[key] = deepMerge(target[key], source[key]);
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}

async function generateThemeCSS() {
    try {
        const defaultPath = path.resolve(__dirname, '../src/lib/default-theme.ts');
        const userPath = path.resolve(__dirname, '../theme.config.ts');
        const outputPath = path.resolve(__dirname, '../src/lib/styles/variables.css');

        // Check files
        if (!fs.existsSync(defaultPath)) {
            console.error('Default theme not found:', defaultPath);
            return;
        }

        // Load configs ensuring fresh reads
        // We use the file path as the cache key, so technically clearing require cache is needed if jiti persists it
        // But spawning this script anew guarantees freshness.
        const defaultConfig = jiti(defaultPath).default;

        let userConfig = {};
        if (fs.existsSync(userPath)) {
            const userLoaded = jiti(userPath);
            userConfig = userLoaded.default || userLoaded;
        }

        const config = deepMerge(defaultConfig, userConfig);
        const prefix = config.prefix || 'ui';

        let css = ':root {\n';

        // Helper
        const processGroup = (group, groupPrefix = '') => {
            Object.entries(group).forEach(([key, value]) => {
                const varName = `--${prefix}-${groupPrefix}${key}`;
                css += `  ${varName}: ${value};\n`;
            });
        };

        if (config.colors) processGroup(config.colors);
        if (config.typography) processGroup(config.typography);
        if (config.spacing) processGroup(config.spacing, 'spacing-');
        if (config.radius) processGroup(config.radius, 'radius-');
        if (config.shadows) processGroup(config.shadows, 'shadow-');

        css += '\n  /* Component Tokens */\n';
        if (config.components) {
            Object.entries(config.components).forEach(([componentName, tokens]) => {
                processGroup(tokens, `${componentName}-`);
            });
        }
        css += '}\n';

        fs.writeFileSync(outputPath, css);
        console.log('[Theme] Generated variables.css successfully');

        // --- Generate Utilities ---
        if (config.spacing) {
            const utilsPath = path.resolve(__dirname, '../src/lib/styles/utilities.css');
            let utilsCss = '/* Spacing Utilities */\n';

            const directions = {
                'm': 'margin',
                'mt': 'margin-top',
                'mb': 'margin-bottom',
                'ml': 'margin-left',
                'mr': 'margin-right',
                'mx': ['margin-left', 'margin-right'],
                'my': ['margin-top', 'margin-bottom'],
                'p': 'padding',
                'pt': 'padding-top',
                'pb': 'padding-bottom',
                'pl': 'padding-left',
                'pr': 'padding-right',
                'px': ['padding-left', 'padding-right'],
                'py': ['padding-top', 'padding-bottom']
            };

            Object.entries(config.spacing).forEach(([sizeKey, sizeValue]) => {
                const varName = `var(--${prefix}-spacing-${sizeKey})`;

                Object.entries(directions).forEach(([dirKey, props]) => {
                    const className = `.${prefix}-${dirKey}-${sizeKey}`; // e.g., .ui-mt-sm

                    utilsCss += `${className} { `;
                    if (Array.isArray(props)) {
                        props.forEach(p => utilsCss += `${p}: ${varName}; `);
                    } else {
                        utilsCss += `${props}: ${varName}; `;
                    }
                    utilsCss += '}\n';
                });
            });

            fs.writeFileSync(utilsPath, utilsCss);
            console.log('[Theme] Generated utilities.css successfully');
        }
    } catch (e) {
        console.error('[Theme] Error generating CSS:', e);
        process.exit(1);
    }
}

generateThemeCSS();
