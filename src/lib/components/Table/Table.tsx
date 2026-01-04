import { forwardRef, ForwardRefExoticComponent, RefAttributes, ReactNode } from 'react';
import * as PropTypes from 'prop-types';
import './Table.css';

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
        const classes = [
            'ui-table',
            bordered && 'ui-table-bordered',
            striped && 'ui-table-striped',
            hover && 'ui-table-hover',
            size === 'sm' && 'ui-table-sm',
            className
        ].filter(Boolean).join(' ');

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
Table.propTypes = {
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    hover: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md']),
    children: PropTypes.node,
    className: PropTypes.string
};
