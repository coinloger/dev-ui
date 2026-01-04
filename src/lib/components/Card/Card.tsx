import { forwardRef, ReactNode, ForwardRefExoticComponent, RefAttributes, CSSProperties } from 'react';
import { clsx } from 'clsx';

import './Card.css';

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
                {title && <div className="ui-card__header">{title}</div>}
                <div className="ui-card__body">{children}</div>
                {footer && <div className="ui-card__footer">{footer}</div>}
            </div>
        );
    }
);

Card.displayName = 'Card';

