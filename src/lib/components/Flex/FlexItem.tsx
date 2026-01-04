import { forwardRef, ElementType, CSSProperties, ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';
import { clsx } from 'clsx';
import * as PropTypes from 'prop-types';

export interface FlexItemProps {
    /**
     * Flex grow factor.
     * @default 0
     */
    grow?: boolean | number;
    /**
     * Flex shrink factor.
     * @default 1
     */
    shrink?: boolean | number;
    /**
     * Flex basis value.
     * @default 'auto'
     */
    basis?: string | number;
    /**
     * Flex shorthand.
     */
    flex?: string | number;
    /**
     * Explicit width.
     */
    width?: string | number;
    /**
     * Order of the item.
     */
    order?: number;
    /**
     * The component used for the root node.
     * @default 'div'
     */
    as?: ElementType;
    /**
     * The content of the component.
     */
    children?: ReactNode;
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * Inline styles.
     */
    style?: CSSProperties;
    /**
     * Optional ID.
     */
    id?: string;
}

export const FlexItem: ForwardRefExoticComponent<FlexItemProps & RefAttributes<HTMLElement>> = forwardRef<HTMLElement, FlexItemProps>(
    ({
        className,
        children,
        grow,
        shrink,
        basis,
        flex,
        width,
        order,
        as: Tag = 'div',
        style,
        ...props
    }, ref) => {
        const customStyle: CSSProperties = {
            ...style,
            ...(grow !== undefined && { flexGrow: grow === true ? 1 : grow === false ? 0 : grow }),
            ...(shrink !== undefined && { flexShrink: shrink === true ? 1 : shrink === false ? 0 : shrink }),
            ...(basis !== undefined && { flexBasis: basis }),
            ...(flex !== undefined && { flex }),
            ...(width !== undefined && { width }),
            ...(order !== undefined && { order })
        };

        return (
            <Tag ref={ref} className={clsx('ui-flex-item', className)} style={customStyle} {...props}>
                {children}
            </Tag>
        );
    }
);

FlexItem.displayName = 'Flex.Item';

FlexItem.propTypes = {
    grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    shrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    basis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    order: PropTypes.number,
    as: PropTypes.elementType,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string
};
