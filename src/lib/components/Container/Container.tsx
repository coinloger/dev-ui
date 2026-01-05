import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode, type ForwardRefExoticComponent, type RefAttributes } from 'react';
import { clsx } from 'clsx';

import './Container.less';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
    /**
     * If true, container will be fluid (100% width) at all breakpoints.
     * @default false
     */
    fluid?: boolean;
    /**
     * The component used for the root node.
     * @default 'div'
     */
    as?: ElementType;
    /**
     * The content of the component.
     */
    children?: ReactNode;
}

/**
 * A container component to center your content horizontally.
 * It's the most basic layout element.
 */
export const Container: ForwardRefExoticComponent<ContainerProps & RefAttributes<HTMLElement>> = forwardRef<HTMLElement, ContainerProps>(
    ({
        className,
        children,
        fluid = false,
        as: Tag = 'div',
        ...props
    }, ref) => {
        const classes = clsx(
            'ui-container',
            fluid && 'ui-container-fluid',
            className
        );

        return (
            <Tag ref={ref} className={classes} {...props}>
                {children}
            </Tag>
        );
    }
);

Container.displayName = 'Container';


