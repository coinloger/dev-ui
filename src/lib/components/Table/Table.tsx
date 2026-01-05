import { forwardRef, type ForwardRefExoticComponent, type RefAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

import './Table.less';

/**
 * Table component properties.
 */
interface TableProps {
    /**
     * If true, adds borders to table cells.
     * @default true
     */
    bordered?: boolean;
    /**
     * If true, adds alternating background colors to rows.
     */
    striped?: boolean;
    /**
     * If true, adds a hover effect to rows.
     */
    hover?: boolean;
    /**
     * The size of the table padding.
     * @default 'md'
     */
    size?: 'sm' | 'md';
    children?: ReactNode;
    className?: string;
}

export const Table: ForwardRefExoticComponent<TableProps & RefAttributes<HTMLTableElement>> = forwardRef<HTMLTableElement, TableProps>(
    ({ className, bordered = true, striped, hover, size = 'md', children, ...props }, ref) => {
        const classes = clsx(
            'ui-table',
            bordered && 'ui-table-bordered',
            striped && 'ui-table-striped',
            hover && 'ui-table-hover',
            size === 'sm' && 'ui-table-sm',
            className
        );

        return (
            <div className="ui-table-responsive">
                <table ref={ref} className={classes} {...props}>
                    {children}
                </table>
            </div>
        );
    }
);

Table.displayName = 'Table';

