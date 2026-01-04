import { forwardRef, ElementType, CSSProperties, ForwardRefExoticComponent, RefAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

import './Typography.css';

/**
 * Text typography component properties.
 */
export interface TextProps {
    /**
     * The value scale variant.
     * @default 'body'
     */
    variant?: 'body' | 'small' | 'caption' | 'lead';
    /**
     * The font weight.
     */
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    /**
     * If true, applies styling to represent secondary or muted text.
     */
    muted?: boolean;
    /**
     * If true, truncates text with an ellipsis if it overflows one line.
     */
    truncate?: boolean;
    /**
     * Clamps the text to a specific number of lines.
     */
    lines?: number;
    /**
     * The HTML component to render (e.g., 'p', 'span', 'div').
     * @default 'p'
     */
    as?: ElementType;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    id?: string;
}

export const Text: ForwardRefExoticComponent<TextProps & RefAttributes<HTMLElement>> = forwardRef<HTMLElement, TextProps>(
    ({ className, children, variant = 'body', weight, muted, truncate, lines, as: Tag = 'p', style, ...props }, ref) => {
        const componentStyle = lines
            ? { ...style, '--ui-line-clamp': lines } as CSSProperties
            : style;

        return (
            <Tag
                ref={ref}
                className={clsx(
                    'ui-text',
                    `ui-text-${variant}`,
                    weight && `ui-text-weight-${weight}`,
                    muted && 'ui-text-muted',
                    truncate && 'ui-text-truncate',
                    lines && 'ui-text-clamp',
                    className
                )}
                style={componentStyle}
                {...props}
            >
                {children}
            </Tag>
        );
    }
);

Text.displayName = 'Text';

