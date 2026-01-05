import { forwardRef, type ReactNode, type ForwardRefExoticComponent, type RefAttributes, type CSSProperties } from 'react';
import { clsx } from 'clsx';

import './Card.less';

/**
 * Card component properties.
 */
interface CardProps {
    /**
     * Content to be displayed in the card header.
     */
    title?: ReactNode;
    /**
     * Content to be displayed in the card footer.
     */
    footer?: ReactNode;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

/**
 * Container component for content grouping.
 * Includes slots for header (title) and footer.
 */
export const Card: ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, CardProps>(
    ({ className, title, footer, children, ...props }, ref) => {
        return (
            <div ref={ref} className={clsx('ui-card', className)} {...props}>
                {title && <div className="ui-card-header">{title}</div>}
                <div className="ui-card-body">{children}</div>
                {footer && <div className="ui-card-footer">{footer}</div>}
            </div>
        );
    }
);

Card.displayName = 'Card';

