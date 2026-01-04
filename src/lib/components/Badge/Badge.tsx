import { forwardRef, ForwardRefExoticComponent, RefAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import * as PropTypes from 'prop-types';
import './Badge.css';

/**
 * Badge/Tag component properties.
 */
export interface BadgeProps {
    /**
     * The visual style variant.
     * @default 'primary'
     */
    variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
    /**
     * The size of the badge.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * The shape of the badge.
     * @default 'rounded'
     */
    shape?: 'rounded' | 'pill';
    children?: ReactNode;
    className?: string;
}

export const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLSpanElement>> = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, children, variant = 'primary', size = 'md', shape = 'rounded', ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={clsx(
                    'ui-badge',
                    `ui-badge-${variant}`,
                    `ui-badge-${size}`,
                    `ui-badge-${shape}`,
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';
Badge.propTypes = {
    variant: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'neutral']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    shape: PropTypes.oneOf(['rounded', 'pill']),
    children: PropTypes.node,
    className: PropTypes.string
};
