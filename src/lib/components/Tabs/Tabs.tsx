import { createContext, useContext, useState, useId, type ReactNode, type MouseEvent, type MouseEventHandler } from 'react';
import { clsx } from 'clsx';

import './Tabs.less';

interface TabsContextValue {
    value: string;
    onChange: (value: string) => void;
    baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

// --- Root ---
/**
 * Tabs Root properties.
 */
export interface TabsProps {
    /**
     * The default value of the tab to select initially (uncontrolled mode).
     */
    defaultValue?: string;
    /**
     * The controlled value of the selected tab.
     */
    value?: string;
    /**
     * Callback fired when the value changes.
     */
    onValueChange?: (value: string) => void;
    children: ReactNode;
    className?: string;
}

const TabsRoot = ({ defaultValue, value, onValueChange, children, className }: TabsProps) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const baseId = useId();

    const handleChange = (newValue: string) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onValueChange?.(newValue);
    };

    return (
        <TabsContext.Provider value={{ value: currentValue!, onChange: handleChange, baseId }}>
            <div className={clsx('ui-tabs', className)}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};

// --- List ---
export interface TabsListProps {
    children: ReactNode;
    variant?: 'line' | 'pills';
    className?: string;
}

const TabsList = ({ className, children, variant = 'line', ...props }: TabsListProps) => {
    return (
        <div
            role="tablist"
            className={clsx('ui-tabs-list', `ui-tabs-list-${variant}`, className)}
            {...props}
        >
            {children}
        </div>
    );
};

// --- Trigger ---
export interface TabsTriggerProps {
    value: string;
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

const TabsTrigger = ({ value, className, children, onClick, ...props }: TabsTriggerProps) => {
    const context = useContext(TabsContext);
    if (!context) throw new Error('TabsTrigger must be used within Tabs');

    const isActive = context.value === value;
    const triggerId = `${context.baseId}-trigger-${value}`;
    const contentId = `${context.baseId}-content-${value}`;

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        context.onChange(value);
        onClick?.(e);
    };

    // Keyboard support for Arrows could be added here for full a11y, 
    // but simplified to click and focus for now.

    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={contentId}
            id={triggerId}
            tabIndex={isActive ? 0 : -1}
            data-state={isActive ? 'active' : 'inactive'}
            className={clsx('ui-tabs-trigger', className)}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
};

// --- Content ---
export interface TabsContentProps {
    value: string;
    children: ReactNode;
    className?: string;
}

const TabsContent = ({ value, className, children, ...props }: TabsContentProps) => {
    const context = useContext(TabsContext);
    if (!context) throw new Error('TabsContent must be used within Tabs');

    const isActive = context.value === value;
    const triggerId = `${context.baseId}-trigger-${value}`;
    const contentId = `${context.baseId}-content-${value}`;

    if (!isActive) return null;

    return (
        <div
            role="tabpanel"
            id={contentId}
            aria-labelledby={triggerId}
            tabIndex={0}
            className={clsx('ui-tabs-content', className)}
            {...props}
        >
            {children}
        </div>
    );
};

// Combine and Export
export const Tabs = Object.assign(TabsRoot, {
    List: TabsList,
    Trigger: TabsTrigger,
    Content: TabsContent
});

TabsRoot.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';


