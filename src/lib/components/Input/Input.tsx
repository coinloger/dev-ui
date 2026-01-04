import { forwardRef, InputHTMLAttributes, useId, ForwardRefExoticComponent, RefAttributes, ChangeEventHandler, FocusEventHandler } from 'react';
import { clsx } from 'clsx';

import './Input.css';

/**
 * Input component properties.
 */
interface InputProps {
    /**
     * Label text displayed above the input.
     */
    label?: string;
    /**
     * If true, the input will be styled with an error state.
     * @default false
     */
    error?: boolean;
    /**
     * Helper text displayed below the input.
     */
    helperText?: string;
    /**
     * If true, the input will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The size of the input.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    value?: string | number;
    defaultValue?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    name?: string;
    id?: string;
    placeholder?: string;
    type?: InputHTMLAttributes<HTMLInputElement>['type'];
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete'];
    autoFocus?: boolean;
    min?: InputHTMLAttributes<HTMLInputElement>['min'];
    max?: InputHTMLAttributes<HTMLInputElement>['max'];
    step?: InputHTMLAttributes<HTMLInputElement>['step'];
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode'];
    className?: string;
}

/**
 * Text input component with label, error state, and helper text support.
 */
export const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>> = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, helperText, fullWidth, size = 'md', id, ...props }, ref) => {
        const inputId = id || useId();

        return (
            <div className={clsx('ui-input-wrapper', fullWidth && 'ui-input-wrapper-full')}>
                {label && (
                    <label htmlFor={inputId} className="ui-label">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={clsx(
                        'ui-input',
                        `ui-input-${size}`,
                        error && 'ui-input-error',
                        className
                    )}
                    {...props}
                />
                {helperText && (
                    <span className={clsx('ui-helper-text', error && 'ui-helper-text-error')}>
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

