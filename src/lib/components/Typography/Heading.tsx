import { forwardRef, ElementType, CSSProperties, ForwardRefExoticComponent, RefAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

import './Typography.css';

/**
 * Heading typography component properties.
 */
export interface HeadingProps {
    /**
     * The heading level (h1-h6).
     * @default 1
     */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * If true, truncates text with an ellipsis if it overflows one line.
     */
    truncate?: boolean;
    /**
     * Clamps the text to a specific number of lines.
     */
    lines?: number;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    id?: string;
}

export const Heading: ForwardRefExoticComponent<HeadingProps & RefAttributes<HTMLHeadingElement>> = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, children, level = 1, truncate, lines, style, ...props }, ref) => {
        const Tag = `h${level}` as ElementType;

        const componentStyle = lines
            ? { ...style, '--ui-line-clamp': lines } as CSSProperties
            : style;

        return (
            <Tag
                ref={ref}
                className={clsx(
                    'ui-heading',
                    `ui-heading-h${level}`,
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

Heading.displayName = 'Heading';

