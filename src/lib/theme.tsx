import React, { useMemo } from 'react';

import { ThemeConfig } from './types';

// Helper to confirm object keys for iteration
function isObject(item: any) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

// 2. Helper to flatten ThemeConfig to CSS custom properties
function themeToCSSVariables(theme: ThemeConfig): React.CSSProperties {
    const cssVars: any = {};

    const flatten = (obj: any, currentPrefix: string) => {
        Object.keys(obj).forEach(key => {
            const value = obj[key];
            const newKey = `${currentPrefix}-${key}`;

            if (isObject(value)) {
                flatten(value, newKey);
            } else {
                cssVars[`-${newKey}`] = value;
            }
        });
    };

    // We need to map our structured object to the flat string variables we use in CSS.
    // Our CSS uses format like --ui-btn-padding, --ui-primary, etc.
    // Our object is like { colors: { primary: ... }, components: { Button: { padding: ... } } }

    // Mapping Colors: colors.primary -> --ui-primary
    if (theme.colors) {
        Object.keys(theme.colors).forEach(color => {
            cssVars[`--ui-${color}`] = theme.colors![color];
        });
    }

    // Mapping Components: components.button.padding -> --ui-btn-padding

    if (theme.components) {
        Object.keys(theme.components).forEach(compName => {
            const compConfig = theme.components![compName];
            if (compConfig) {
                flatten(compConfig, `-ui-${compName.toLowerCase()}`);
            }
        });
    }

    // Globals (spacing, radius, shadows, typography)
    if (theme.spacing) flatten(theme.spacing, '-ui-spacing');
    if (theme.radius) flatten(theme.radius, '-ui-radius');
    if (theme.shadows) flatten(theme.shadows, '-ui-shadow');
    if (theme.typography) flatten(theme.typography, '-ui-typography');

    return cssVars as React.CSSProperties;
}

// 3. ThemeProvider Component
export const ThemeProvider = ({ theme, children }: { theme: ThemeConfig; children: React.ReactNode }) => {
    const cssVars = useMemo(() => themeToCSSVariables(theme), [theme]);

    React.useLayoutEffect(() => {
        const root = document.documentElement;

        Object.entries(cssVars).forEach(([key, value]) => {
            if (key.startsWith('--')) {
                root.style.setProperty(key, String(value));
            }
        });

        // Optional: Cleanup
        return () => {
            Object.keys(cssVars).forEach(key => {
                if (key.startsWith('--')) {
                    root.style.removeProperty(key);
                }
            });
        };
    }, [cssVars]);

    return <>{children}</>;
};

ThemeProvider.displayName = 'ThemeProvider';

