import { useEffect, useRef, createContext, useContext, useState, ReactNode, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { clsx } from 'clsx';
import * as PropTypes from 'prop-types';
import './Modal.css';

// Context
interface ModalContextType {
    onClose: () => void;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('Modal compound components must be used within a Modal');
    }
    return context;
};

// Subcomponents
export const ModalHeader = ({ children, className }: { children: ReactNode; className?: string }) => {
    const { onClose } = useModalContext();
    return (
        <div className={clsx("ui-modal-header", className)}>
            <h3 className="ui-modal-title">{children}</h3>
            <button
                className="ui-modal-close"
                onClick={onClose}
                aria-label="Close modal"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    );
};

export const ModalBody = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <div className={clsx("ui-modal-body", className)}>{children}</div>;
};

export const ModalFooter = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <div className={clsx("ui-modal-footer", className)}>{children}</div>;
};

// Main Component
/**
 * Modal component properties.
 */
export interface ModalProps {
    /**
     * Controls the visibility of the modal.
     */
    isOpen: boolean;
    /**
     * Callback fired when the modal requests to be closed (e.g., backdrop click, ESC key).
     */
    onClose: () => void;
    /**
     * Content to be displayed in the modal header.
     */
    title?: ReactNode;
    /**
     * The body content of the modal.
     */
    children: ReactNode;
    /**
     * Content to be displayed in the modal footer.
     */
    footer?: ReactNode;
    /**
     * The width size of the modal.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * If true, clicking on the backdrop closes the modal.
     * @default true
     */
    closeOnBackdropClick?: boolean;
}

/**
 * Modal dialog component.
 * Can be used as a controlled component with `isOpen` and `onClose`.
 */
const ModalRoot = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'md',
    className,
    closeOnBackdropClick = true,
}: ModalProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(isOpen);

    useEffect(() => {
        if (isOpen) setIsVisible(true);
    }, [isOpen]);

    const handleAnimationEnd = () => {
        if (!isOpen) setIsVisible(false);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isVisible) return null;

    const handleBackdropClick = (e: MouseEvent) => {
        if (closeOnBackdropClick && e.target === overlayRef.current) {
            onClose();
        }
    };

    return createPortal(
        <ModalContext.Provider value={{ onClose }}>
            <div
                className={clsx('ui-modal-overlay', !isOpen && 'ui-modal-closing')}
                ref={overlayRef}
                onClick={handleBackdropClick}
                onAnimationEnd={handleAnimationEnd}
            >
                <div
                    className={clsx(
                        'ui-modal',
                        `ui-modal-${size}`,
                        !isOpen && 'ui-modal-closing',
                        className
                    )}
                    role="dialog"
                    aria-modal="true"
                >
                    {title ? (
                        <>
                            <ModalHeader>{title}</ModalHeader>
                            <ModalBody>{children}</ModalBody>
                            {footer && <ModalFooter>{footer}</ModalFooter>}
                        </>
                    ) : (
                        children
                    )}
                </div>
            </div>
        </ModalContext.Provider>,
        document.body
    );
};

export const Modal = Object.assign(ModalRoot, {
    Header: ModalHeader,
    Body: ModalBody,
    Footer: ModalFooter
});

ModalRoot.displayName = 'Modal';
ModalHeader.displayName = 'ModalHeader';
ModalBody.displayName = 'ModalBody';
ModalFooter.displayName = 'ModalFooter';

ModalRoot.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.node,
    children: PropTypes.node,
    footer: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    className: PropTypes.string,
    closeOnBackdropClick: PropTypes.bool
};

ModalHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

ModalBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

ModalFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
