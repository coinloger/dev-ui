import { ThemeConfig } from './types';

const defaultTheme: ThemeConfig = {
    prefix: "ui",
    colors: {
        "primary": "#2563eb",
        "primary-hover": "color-mix(in srgb, var(--ui-primary), black 10%)",
        "primary-active": "color-mix(in srgb, var(--ui-primary), black 20%)",
        "primary-light": "#eff6ff",
        "text-main": "#111827",
        "text-muted": "#6b7280",
        "border": "#e5e7eb",
        "border-hover": "#d1d5db",
        "bg-main": "#ffffff",
        "bg-subtle": "#f9fafb",
        "danger": "#ef4444",
        "success": "#10b981",
        "warning": "#f59e0b"
    },
    typography: {
        "font-family": "'Inter', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
        "font-size-sm": "12px",
        "font-size-md": "13px",
        "font-size-lg": "16px",
        "font-size-xl": "21px"
    },
    spacing: {
        "xs": "4px",
        "xsl": "6px",
        "sm": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "21px",
        "xxl": "24px"
    },
    radius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "xl": "16px",
        "full": "50%"
    },
    shadows: {
        "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)",
        "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
    },
    components: {
        "btn": {
            "bg": "transparent",
            "text": "var(--ui-text-main)",
            "border": "transparent",
            "radius": "var(--ui-radius-md)",
            "padding": "0.5rem 1rem",
            "font-size": "0.95rem",
            "radius-sm": "var(--ui-radius-md)",
            "radius-md": "var(--ui-radius-md)",
            "radius-lg": "var(--ui-radius-md)",
            "radius-xl": "var(--ui-radius-md)",
            "padding-sm": "0.1rem 0.5rem",
            "padding-md": "0.25rem 0.5rem",
            "padding-lg": "0.25rem 1rem",
            "padding-xl": "0.5rem 1rem",
            "font-size-sm": "var(--ui-font-size-sm)",
            "font-size-md": "var(--ui-font-size-md)",
            "font-size-lg": "var(--ui-font-size-lg)",
            "font-size-xl": "var(--ui-font-size-xl)"
        },
        "input": {
            "radius": "var(--ui-radius-md)",
            "bg": "var(--ui-bg-main)",
            "border": "1px solid var(--ui-border)",
            "color": "var(--ui-text-main)",
            "placeholder": "var(--ui-text-muted)",
            "focus-border": "var(--ui-primary)",
            "focus-ring": "0 0 0 3px var(--ui-primary-light)",
            "error-border": "var(--ui-danger)",
            "error-ring": "0 0 0 3px rgba(239, 68, 68, 0.15)",

            // Sizes
            "size-sm-padding": "0.35rem 0.5rem",
            "size-sm-font-size": "var(--ui-font-size-sm)",

            "size-md-padding": "0.5rem 0.75rem",
            "size-md-font-size": "var(--ui-font-size-md)",

            "size-lg-padding": "0.7rem 1rem",
            "size-lg-font-size": "var(--ui-font-size-lg)",

            "size-xl-padding": "1rem 1.25rem",
            "size-xl-font-size": "var(--ui-font-size-xl)"
        },
        "select": {
            "radius": "var(--ui-radius-md)",
            "bg": "var(--ui-bg-main)",
            "border": "1px solid var(--ui-border)",
            "color": "var(--ui-text-main)",
            "placeholder": "var(--ui-text-muted)",
            "focus-border": "var(--ui-primary)",
            "focus-ring": "0 0 0 3px var(--ui-primary-light)",
            "error-border": "var(--ui-danger)",
            "error-ring": "0 0 0 3px rgba(239, 68, 68, 0.15)",

            // Menu
            "menu-bg": "var(--ui-bg-main)",
            "menu-border": "1px solid var(--ui-border)",
            "menu-shadow": "var(--ui-shadow-lg)",
            "option-hover-bg": "var(--ui-bg-subtle)",
            "option-selected-bg": "var(--ui-primary-light)",
            "option-selected-color": "var(--ui-primary)",

            // Reuse Input sizes
            "size-sm-padding": "var(--ui-input-size-sm-padding)",
            "size-sm-font-size": "var(--ui-input-size-sm-font-size)",
            "size-md-padding": "var(--ui-input-size-md-padding)",
            "size-md-font-size": "var(--ui-input-size-md-font-size)",
            "size-lg-padding": "var(--ui-input-size-lg-padding)",
            "size-lg-font-size": "var(--ui-input-size-lg-font-size)",
            "size-xl-padding": "var(--ui-input-size-xl-padding)",
            "size-xl-font-size": "var(--ui-input-size-xl-font-size)"
        },
        "card": {
            "radius": "var(--ui-radius-md)",
            "bg": "var(--ui-bg-main)",
            "border": "1px solid var(--ui-border)",
            "shadow": "none",
            "padding": "var(--ui-spacing-md)",
            "header-bg": "transparent",
            "header-padding": "var(--ui-spacing-md) var(--ui-spacing-md)",
            "header-border": "1px solid var(--ui-border)",
            "header-font-size": "var(--ui-font-size-lg)",
            "font-size": "var(--ui-font-size-md)",
            "footer-bg": "var(--ui-bg-subtle)",
            "footer-padding": "var(--ui-spacing-md) var(--ui-spacing-md)",
            "footer-border": "1px solid var(--ui-border)"
        },
        "modal": {
            "radius": "var(--ui-radius-lg)",
            "bg": "var(--ui-bg-main)",
            "shadow": "var(--ui-shadow-xl)",
            "backdrop-bg": "rgba(0, 0, 0, 0.4)",
            "backdrop-blur": "none",
            "border": "1px solid var(--ui-border)",
            "z-index": "50",

            "header-padding": "1.25rem 1.5rem",
            "body-padding": "1.5rem",
            "footer-padding": "1.25rem 1.5rem",

            "size-sm-width": "400px",
            "size-md-width": "550px",
            "size-lg-width": "750px",
            "size-xl-width": "1140px"
        },
        "checkbox": {
            "size": "1.125rem",
            "radius": "var(--ui-radius-sm)",
            "bg": "var(--ui-bg-main)",
            "border": "1px solid var(--ui-border)",
            "checked-bg": "var(--ui-primary)",
            "checked-border": "var(--ui-primary)",
            "checked-color": "#ffffff",
            "disabled-opacity": "0.6",

            "size-sm-size": "1rem",
            "size-sm-font-size": "var(--ui-font-size-sm)",
            "size-md-size": "1.125rem",
            "size-md-font-size": "var(--ui-font-size-md)",
            "size-lg-size": "1.35rem",
            "size-lg-font-size": "var(--ui-font-size-lg)",
            "size-xl-size": "1.65rem",
            "size-xl-font-size": "var(--ui-font-size-xl)"
        },
        "radio": {
            "size": "1.125rem",
            "bg": "var(--ui-bg-main)",
            "border": "1px solid var(--ui-border)",
            "checked-bg": "var(--ui-primary)",
            "checked-border": "var(--ui-primary)",
            "checked-color": "#ffffff",
            "disabled-opacity": "0.6",

            "size-sm-size": "1rem",
            "size-sm-font-size": "var(--ui-font-size-sm)",
            "size-md-size": "1.125rem",
            "size-md-font-size": "var(--ui-font-size-md)",
            "size-lg-size": "1.35rem",
            "size-lg-font-size": "var(--ui-font-size-lg)",
            "size-xl-size": "1.65rem",
            "size-xl-font-size": "var(--ui-font-size-xl)"
        },
        "switch": {
            "width": "2.75rem",
            "height": "1.5rem",
            "bg": "var(--ui-bg-subtle)",
            "checked-bg": "var(--ui-primary)",
            "thumb-size": "1.125rem",
            "thumb-bg": "#ffffff",
            "thumb-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.15)",
            "focus-ring": "0 0 0 3px var(--ui-primary-light)",
            "disabled-opacity": "0.6",

            "size-sm-width": "2rem",
            "size-sm-height": "1.125rem",
            "size-sm-thumb-size": "0.80rem", // slightly smaller than height

            "size-md-width": "2.75rem",
            "size-md-height": "1.5rem",
            "size-md-thumb-size": "1.125rem",

            "size-lg-width": "3.5rem",
            "size-lg-height": "1.875rem",
            "size-lg-thumb-size": "1.45rem",

            "size-xl-width": "4.25rem",
            "size-xl-height": "2.25rem",
            "size-xl-thumb-size": "1.75rem"
        },
        "badge": {
            "radius": "var(--ui-radius-sm)",
            "font-weight": "500",

            // Sizes
            "size-sm-padding": "0.125rem 0.5rem",
            "size-sm-font-size": "0.75rem",
            "size-md-padding": "0.25rem 0.75rem",
            "size-md-font-size": "0.875rem",
            "size-lg-padding": "0.375rem 0.875rem",
            "size-lg-font-size": "1rem",

            // Variants
            "primary-bg": "var(--ui-primary)",
            "primary-text": "#ffffff",
            "success-bg": "var(--ui-success)",
            "success-text": "#ffffff",
            "warning-bg": "var(--ui-warning)",
            "warning-text": "#ffffff",
            "danger-bg": "var(--ui-danger)",
            "danger-text": "#ffffff",
            "neutral-bg": "var(--ui-bg-subtle)",
            "neutral-text": "var(--ui-text-main)"
        },
        "heading": {
            "h1-size": "2.5rem",
            "h1-line-height": "1.2",
            "h1-weight": "700",

            "h2-size": "2rem",
            "h2-line-height": "1.3",
            "h2-weight": "600",

            "h3-size": "1.75rem",
            "h3-line-height": "1.3",
            "h3-weight": "600",

            "h4-size": "1.5rem",
            "h4-line-height": "1.4",
            "h4-weight": "600",

            "h5-size": "1.25rem",
            "h5-line-height": "1.4",
            "h5-weight": "600",

            "h6-size": "1rem",
            "h6-line-height": "1.4",
            "h6-weight": "600"
        },
        "text": {
            "body-size": "var(--ui-font-size-md)",
            "body-line-height": "var(--ui-line-height-md)",

            "small-size": "var(--ui-font-size-sm)",
            "small-line-height": "var(--ui-line-height-sm)",

            "caption-size": "var(--ui-font-size-xs)",
            "caption-line-height": "var(--ui-line-height-xs)",

            "lead-weight": "400"
        },
        "tabs": {
            "border-color": "var(--ui-border)",
            "active-color": "var(--ui-primary)",
            "inactive-color": "var(--ui-text-muted)",
            "hover-bg": "var(--ui-bg-subtle)",
            "trigger-padding": "0.75rem 1rem",
            "trigger-weight": "500",
            "trigger-font-size": "0.95rem",
            "content-padding": "1rem 0"
        },
        "flex": {
            "gap-sm": "var(--ui-spacing-sm)",
            "gap-md": "var(--ui-spacing-md)",
            "gap-lg": "var(--ui-spacing-lg)",
            "gap-xl": "var(--ui-spacing-xl)"
        },
        "container": {
            "padding-x": "var(--ui-spacing-md)",
            "max-width-sm": "540px",
            "max-width-md": "768px",
            "max-width-lg": "1024px",
            "max-width-xl": "1280px",
            "max-width-xxl": "1536px"
        }
    }
};

export default defaultTheme;
