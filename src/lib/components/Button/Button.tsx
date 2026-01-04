import { forwardRef, ForwardRefExoticComponent, RefAttributes, ReactNode, MouseEventHandler, CSSProperties } from 'react';
import { clsx } from 'clsx';
import * as PropTypes from 'prop-types';
import './Button.css';

/**
 * Button component properties.
 */
export interface ButtonProps {
    /**
     * The visual style variant of the button.
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'warning' | 'ghost' | 'outline-danger' | 'outline-success' | 'outline-warning';

    /**
     * The size of the button.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Button content.
     */
    children?: ReactNode;
    /**
     * Optional click handler.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Additional CSS class.
     */
    className?: string;
    /**
     * Button type.
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Disabled state.
     */
    disabled?: boolean;
    /**
     * Autofocus on mount.
     */
    autoFocus?: boolean;
    /**
     * Inline styles for the button.
     */
    style?: CSSProperties;
}

/**
 * Primary action component.
 * Supports various visual styles, sizes, and standard HTML button attributes.
 */
export const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const classes = clsx(
            'ui-btn',
            `ui-btn-${variant}`,
            `ui-btn-${size}`,
            className
        );

        return (
            <button ref={ref} className={classes} {...props} />
        );
    }
);

Button.displayName = 'Button';
Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger', 'success', 'warning', 'ghost', 'outline-danger', 'outline-success', 'outline-warning']),
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    style: PropTypes.object
};
