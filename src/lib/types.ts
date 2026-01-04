export interface ThemeConfig {
    prefix?: string;
    colors?: {
        primary?: string;
        secondary?: string;
        background?: string;
        text?: string;
        [key: string]: string | undefined;
    };
    typography?: {
        'font-family'?: string;
        'font-size-sm'?: string;
        'font-size-md'?: string;
        'font-size-lg'?: string;
        'font-size-xl'?: string;
        [key: string]: string | undefined;
    };
    spacing?: {
        [key: string]: string;
    };
    radius?: {
        [key: string]: string;
    };
    shadows?: {
        [key: string]: string;
    };
    components?: {
        btn?: {
            [key: string]: string | object | undefined;
        };
        input?: {
            radius?: string;
            bg?: string;
            border?: string;
            color?: string;
            placeholder?: string;
            "focus-border"?: string;
            "focus-ring"?: string;
            "error-border"?: string;
            "error-ring"?: string;
            [key: string]: string | object | undefined;
        };
        select?: {
            radius?: string;
            bg?: string;
            border?: string;
            color?: string;
            placeholder?: string;
            "focus-border"?: string;
            "focus-ring"?: string;
            "error-border"?: string;
            "error-ring"?: string;

            // Dropdown Menu
            "menu-bg"?: string;
            "menu-border"?: string;
            "menu-shadow"?: string;
            "option-hover-bg"?: string;
            "option-selected-bg"?: string;
            "option-selected-color"?: string;

            [key: string]: string | object | undefined;
        };
        card?: {
            radius?: string;
            shadow?: string;
            bg?: string;
            border?: string;
            padding?: string;
            "header-bg"?: string;
            "header-padding"?: string;
            "header-border"?: string;
            "footer-bg"?: string;
            "footer-padding"?: string;
            "footer-border"?: string;
            [key: string]: string | object | undefined;
        };
        modal?: {
            "radius"?: string;
            "bg"?: string;
            "shadow"?: string;
            "backdrop-bg"?: string;
            "backdrop-blur"?: string;
            "border"?: string;
            "z-index"?: string;
            "header-padding"?: string;
            "body-padding"?: string;
            "footer-padding"?: string;
            "size-sm-width"?: string;
            "size-md-width"?: string;
            "size-lg-width"?: string;
            "size-xl-width"?: string;
            [key: string]: string | object | undefined;
        };
        checkbox?: {
            size?: string;
            radius?: string;
            bg?: string;
            border?: string;
            "checked-bg"?: string;
            "checked-border"?: string;
            "checked-color"?: string;
            "disabled-opacity"?: string;

            // Sizes
            "size-sm-size"?: string;
            "size-sm-font-size"?: string;
            "size-md-size"?: string;
            "size-md-font-size"?: string;
            "size-lg-size"?: string;
            "size-lg-font-size"?: string;
            "size-xl-size"?: string;
            "size-xl-font-size"?: string;

            [key: string]: string | object | undefined;
        };
        radio?: {
            size?: string;
            bg?: string;
            border?: string;
            "checked-bg"?: string;
            "checked-border"?: string;
            "checked-color"?: string;
            "disabled-opacity"?: string;

            // Sizes
            "size-sm-size"?: string;
            "size-sm-font-size"?: string;
            "size-md-size"?: string;
            "size-md-font-size"?: string;
            "size-lg-size"?: string;
            "size-lg-font-size"?: string;
            "size-xl-size"?: string;
            "size-xl-font-size"?: string;

            [key: string]: string | object | undefined;
        };
        switch?: {
            width?: string;
            height?: string;
            bg?: string;
            "checked-bg"?: string;
            "thumb-size"?: string;
            "thumb-bg"?: string;
            "thumb-shadow"?: string;
            "focus-ring"?: string;
            "disabled-opacity"?: string;

            // Sizes
            "size-sm-width"?: string;
            "size-sm-height"?: string;
            "size-sm-thumb-size"?: string;

            "size-md-width"?: string;
            "size-md-height"?: string;
            "size-md-thumb-size"?: string;

            "size-lg-width"?: string;
            "size-lg-height"?: string;
            "size-lg-thumb-size"?: string;

            "size-xl-width"?: string;
            "size-xl-height"?: string;
            "size-xl-thumb-size"?: string;

            [key: string]: string | object | undefined;
        };
        badge?: {
            radius?: string;
            "font-weight"?: string;

            // Sizes
            "size-sm-padding"?: string;
            "size-sm-font-size"?: string;
            "size-md-padding"?: string;
            "size-md-font-size"?: string;
            "size-lg-padding"?: string;
            "size-lg-font-size"?: string;

            // Variants (bg, text, border)
            "primary-bg"?: string;
            "primary-text"?: string;
            "success-bg"?: string;
            "success-text"?: string;
            "warning-bg"?: string;
            "warning-text"?: string;
            "danger-bg"?: string;
            "danger-text"?: string;
            "neutral-bg"?: string;
            "neutral-text"?: string;

            [key: string]: string | object | undefined;
        };
        heading?: {
            "h1-size"?: string;
            "h1-line-height"?: string;
            "h1-weight"?: string;
            "h2-size"?: string;
            "h2-line-height"?: string;
            "h2-weight"?: string;
            "h3-size"?: string;
            "h3-line-height"?: string;
            "h3-weight"?: string;
            "h4-size"?: string;
            "h4-line-height"?: string;
            "h4-weight"?: string;
            "h5-size"?: string;
            "h5-line-height"?: string;
            "h5-weight"?: string;
            "h6-size"?: string;
            "h6-line-height"?: string;
            "h6-weight"?: string;
            [key: string]: string | object | undefined;
        };
        text?: {
            "body-size"?: string;
            "body-line-height"?: string;
            "small-size"?: string;
            "small-line-height"?: string;
            "caption-size"?: string;
            "caption-line-height"?: string;
            "lead-size"?: string;
            "lead-line-height"?: string;
            [key: string]: string | object | undefined;
        };
        tabs?: {
            "border-color"?: string;
            "active-color"?: string;
            "inactive-color"?: string;
            "hover-bg"?: string;
            "trigger-padding"?: string;
            "trigger-weight"?: string;
            "trigger-font-size"?: string;
            "content-padding"?: string;
            [key: string]: string | object | undefined;
        };
        [key: string]: {
            [key: string]: string | object | undefined;
        } | undefined;
    };
}
