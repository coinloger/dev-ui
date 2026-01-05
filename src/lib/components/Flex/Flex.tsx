import { forwardRef, type ElementType, type CSSProperties, type ReactNode, type ForwardRefExoticComponent, type RefAttributes } from 'react';
import { clsx } from 'clsx';

import { FlexItem } from './FlexItem';


export interface FlexProps {
    // ... (keep props matching existing content as we are not showing all lines here, but we are replacing lines 83-91 mostly)
    /**
     * The direction of the flex container.
     * @default 'row'
     */
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /**
     * Alignment of items along the main axis.
     * @default 'start'
     */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    /**
     * Alignment of items along the cross axis.
     * @default 'stretch'
     */
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    /**
     * Whether items should wrap to the next line.
     * @default 'nowrap'
     */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /**
     * Gap between items.
     * Can be a predefined size ('sm', 'md', 'lg', 'xl') or a valid CSS value (number or string).
     * @default 'md'
     */
    gap?: 'sm' | 'md' | 'lg' | 'xl' | number | string;
    /**
     * If true, renders as an inline-flex container.
     * @default false
     */
    inline?: boolean;
    /**
     * The component used for the root node.
     * @default 'div'
     */
    as?: ElementType;
    /**
     * The content of the component.
     */
    children?: ReactNode;
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * Inline styles.
     */
    style?: CSSProperties;
    /**
     * Optional ID.
     */
    id?: string;
}

/**
 * A flexible layout component (Flexbox).
 * building block for creating structured layouts.
 */
export const Flex = forwardRef<HTMLElement, FlexProps>(
    ({
        className,
        children,
        direction = 'row',
        justify = 'start',
        align = 'stretch',
        wrap = 'nowrap',
        gap = 'md',
        inline = false,
        as: Tag = 'div',
        style,
        ...props
    }, ref) => {
        const isCustomGap = typeof gap === 'number' || (typeof gap === 'string' && !['sm', 'md', 'lg', 'xl'].includes(gap));

        const classes = clsx(
            inline ? 'ui-inline-flex' : 'ui-flex',
            direction === 'column' ? 'ui-flex-col' :
                direction === 'column-reverse' ? 'ui-flex-col-reverse' :
                    direction === 'row-reverse' ? 'ui-flex-row-reverse' :
                        'ui-flex-row',

            `ui-justify-${justify}`,

            `ui-items-${align}`,

            wrap === 'nowrap' ? 'ui-flex-nowrap' :
                wrap === 'wrap' ? 'ui-flex-wrap' :
                    'ui-flex-wrap-reverse',

            !isCustomGap && gap && `ui-gap-${gap}`,
            className
        );

        const customStyle: CSSProperties = {
            ...style,
            ...(isCustomGap ? { gap } : {})
        };

        return (
            <Tag ref={ref} className={classes} style={customStyle} {...props}>
                {children}
            </Tag>
        );
    }
) as ForwardRefExoticComponent<FlexProps & RefAttributes<HTMLElement>> & {
    Item: typeof FlexItem;
};

Flex.displayName = 'Flex';
Flex.Item = FlexItem;


