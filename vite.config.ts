import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import fs from 'fs';
import path from 'path';
import jiti from 'jiti';
import { execSync } from 'child_process';


// Theme generation handled by scripts/generate-theme.js

// --- Custom Vite Plugin ---
const themeGeneratorPlugin = () => {
    const runGeneration = () => {
        try {
            // Run the script in a separate process to ensure no caching issues
            execSync('node scripts/generate-theme.js', { stdio: 'inherit' });
        } catch (e) {
            console.error('[Theme] Generation failed');
        }
    };

    return {
        name: 'theme-generator',
        configResolved(config: any) {
            runGeneration();
        },
        handleHotUpdate({ file, server }: any) {
            if (file.endsWith('theme.config.ts') || file.endsWith('default-theme.ts')) {
                console.log('[Theme] Config changed, executing generation script...');
                runGeneration();

                server.ws.send({
                    type: 'full-reload',
                    path: '*'
                });
            }
        }
    };
};

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));

// ...

export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ['src/lib'],
            exclude: ['**/*.demo.tsx', '**/*.test.tsx'],
            rollupTypes: false,
            outDir: 'dist/esm'
        }),
        themeGeneratorPlugin()
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                ...Object.keys(pkg.dependencies || {}),
                ...Object.keys(pkg.peerDependencies || {})
            ],
            output: [
                {
                    format: 'es',
                    dir: 'dist/esm',
                    preserveModules: true,
                    preserveModulesRoot: 'src/lib',
                    entryFileNames: '[name].js',
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM'
                    }
                },
                {
                    format: 'cjs',
                    exports: 'named',
                    dir: 'dist/cjs',
                    preserveModules: true,
                    preserveModulesRoot: 'src/lib',
                    entryFileNames: '[name].cjs',
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM'
                    }
                }
            ]
        }
    }
});
