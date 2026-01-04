import { forwardRef, ReactNode, ForwardRefExoticComponent, RefAttributes, ChangeEventHandler } from 'react';
import { clsx } from 'clsx';
import * as PropTypes from 'prop-types';
import './Switch.css';

/**
 * Switch toggle component properties.
 */
export interface SwitchProps {
    /**
     * Label to display next to the switch.
     */
    label?: ReactNode;
    /**
     * If true, the switch will be styled with an error state.
     */
    error?: boolean;
    /**
     * The size of the switch.
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

export const Switch: ForwardRefExoticComponent<SwitchProps & RefAttributes<HTMLInputElement>> = forwardRef<HTMLInputElement, SwitchProps>(
    ({ className, label, error, disabled, size = 'md', variant = 'primary', ...props }, ref) => {
        return (
            <label
                className={clsx(
                    'ui-switch-label',
                    `ui-switch-${size}`,
                    `ui-switch-${variant}`,
                    disabled && 'ui-switch-disabled',
                    className
                )}
            >
                <input
                    type="checkbox"
                    className="ui-switch-input"
                    disabled={disabled}
                    ref={ref}
                    role="switch"
                    {...props}
                />
                <span className="ui-switch-track">
                    <span className="ui-switch-thumb" />
                </span>
                {label && <span className="ui-switch-text">{label}</span>}
            </label>
        );
    }
);

Switch.displayName = 'Switch';
Switch.propTypes = {
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
