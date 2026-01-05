import { useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';

import './Select.less';

export interface SelectOption {
    value: string | number;
    label: string;
}

/**
 * Select component properties.
 */
export interface SelectProps {
    /**
     * Array of options to display.
     */
    options: SelectOption[];
    /**
     * The value of the selected option.
     */
    value?: string | number;
    /**
     * Callback fired when an option is selected.
     */
    onChange?: (value: string | number) => void;
    /**
     * Placeholder text displayed when no option is selected.
     * @default "Select an option"
     */
    placeholder?: string;
    /**
     * Label text displayed above the select.
     */
    label?: string;
    /**
     * If true, the select will be styled with an error state.
     */
    error?: boolean;
    /**
     * Helper text displayed below the select.
     */
    helperText?: string;
    /**
     * If true, the select is disabled.
     */
    disabled?: boolean;
    /**
     * If true, the select will take up the full width of its container.
     */
    fullWidth?: boolean;
    /**
     * The size of the select trigger.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

/**
 * Select/Dropdown component for selecting a value from a list of options.
 */
export const Select = ({
    options,
    value,
    onChange,
    placeholder = "Select an option",
    label,
    error,
    helperText,
    disabled,
    fullWidth,
    size = 'md',
    className,
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState<'bottom' | 'top'>('bottom');
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    const updatePosition = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;

            // If less than 250px below and more space above, open upwards
            if (spaceBelow < 250 && spaceAbove > spaceBelow) {
                setMenuPosition('top');
            } else {
                setMenuPosition('bottom');
            }
        }
    };

    const handleToggle = () => {
        if (disabled) return;

        if (!isOpen) {
            updatePosition();
        }
        setIsOpen(!isOpen);
    };

    const handleSelect = (optionValue: string | number) => {
        if (onChange) onChange(optionValue);
        setIsOpen(false);
    };

    // Update position on resize/scroll while open
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('resize', updatePosition);
            window.addEventListener('scroll', updatePosition, { capture: true }); // Capture scroll to handle container scrolling
        }

        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition, { capture: true });
        };
    }, [isOpen]);

    // Click outside to close (omitted for brevity, keep existing)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            className={clsx('ui-select-wrapper', fullWidth && 'ui-w-full', className)}
            ref={containerRef}
            style={{ width: fullWidth ? '100%' : 'auto' }}
        >
            {label && (
                <label className="ui-label" style={{ marginBottom: '0.375rem', display: 'block' }}>
                    {label}
                </label>
            )}

            <div className="ui-select-input-container">
                <button
                    type="button"
                    className={clsx(
                        'ui-select-trigger',
                        `ui-select-${size}`,
                        error && 'ui-select-error',
                        disabled && 'ui-select-disabled',
                        isOpen && 'ui-select-open'
                    )}
                    onClick={handleToggle}
                    disabled={disabled}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                >
                    <span className={clsx(!selectedOption && 'ui-select-placeholder')}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>

                    <svg
                        className="ui-select-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isOpen && (
                    <ul
                        className={clsx(
                            "ui-select-menu",
                            menuPosition === 'top' && "ui-select-menu-top"
                        )}
                        role="listbox"
                    >
                        {options.map((option) => (
                            <li
                                key={option.value}
                                className={clsx(
                                    'ui-select-option',
                                    option.value === value && 'ui-select-selected'
                                )}
                                onClick={() => handleSelect(option.value)}
                                role="option"
                                aria-selected={option.value === value}
                            >
                                {option.label}
                            </li>
                        ))}
                        {options.length === 0 && (
                            <li className="ui-select-option" style={{ color: 'var(--ui-text-muted)', cursor: 'default' }}>
                                No options
                            </li>
                        )}
                    </ul>
                )}
            </div>

            {helperText && (
                <span className={clsx('ui-helper-text', error && 'ui-helper-text-error')} style={{ marginTop: '0.375rem', display: 'block' }}>
                    {helperText}
                </span>
            )}
        </div>
    );
};

Select.displayName = 'Select';

