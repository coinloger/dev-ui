import { forwardRef, type ReactNode, type ForwardRefExoticComponent, type RefAttributes, type ChangeEventHandler } from 'react';
import { clsx } from 'clsx';

import './Radio.less';

/**
 * Radio component properties.
 */
export interface RadioProps {
    /**
     * Label to display next to the radio button.
     */
    label?: ReactNode;
    /**
     * If true, the radio will be styled with an error state.
     */
    error?: boolean;
    /**
     * The size of the radio button.
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

export const Radio: ForwardRefExoticComponent<RadioProps & RefAttributes<HTMLInputElement>> = forwardRef<HTMLInputElement, RadioProps>(
    ({ className, label, error, disabled, size = 'md', variant = 'primary', ...props }, ref) => {
        return (
            <label
                className={clsx(
                    'ui-radio-label',
                    `ui-radio-${size}`,
                    `ui-radio-${variant}`,
                    disabled && 'ui-radio-disabled',
                    className
                )}
            >
                <input
                    type="radio"
                    className="ui-radio-input"
                    disabled={disabled}
                    ref={ref}
                    {...props}
                />
                <span className="ui-radio-custom">
                    <span className="ui-radio-dot" />
                </span>
                {label && <span className="ui-radio-text">{label}</span>}
            </label>
        );
    }
);

Radio.displayName = 'Radio';

