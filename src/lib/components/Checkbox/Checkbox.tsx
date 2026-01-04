import { forwardRef, ReactNode, ForwardRefExoticComponent, RefAttributes, ChangeEventHandler } from 'react';
import { clsx } from 'clsx';
import * as PropTypes from 'prop-types';
import './Checkbox.css';

/**
 * Checkbox component properties.
 */
export interface CheckboxProps {
    /**
     * Label to display next to the checkbox.
     */
    label?: ReactNode;
    /**
     * If true, the checkbox will be styled with an error state.
     */
    error?: boolean;
    /**
     * The size of the checkbox.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * The visual color variant.
     * @default 'primary'
     */
    variant?: 'primary' | 'success' | 'warning' | 'danger';
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    name?: string;
    value?: string | number;
    disabled?: boolean;
    required?: boolean;
    id?: string;
    className?: string;
}

export const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLInputElement>> = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, error, disabled, size = 'md', variant = 'primary', ...props }, ref) => {
        return (
            <label
                className={clsx(
                    'ui-checkbox-label',
                    `ui-checkbox-${size}`,
                    `ui-checkbox-${variant}`,
                    disabled && 'ui-checkbox-disabled',
                    className
                )}
            >
                <input
                    type="checkbox"
                    className="ui-checkbox-input"
                    disabled={disabled}
                    ref={ref}
                    {...props}
                />
                <span className="ui-checkbox-custom">
                    <svg
                        className="ui-checkbox-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
                {label && <span className="ui-checkbox-text">{label}</span>}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
    label: PropTypes.node,
    error: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    variant: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']),
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string
};
