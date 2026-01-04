import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export default function ModalDemo() {
    const [openSmall, setOpenSmall] = useState(false);
    const [openMedium, setOpenMedium] = useState(false);
    const [openLarge, setOpenLarge] = useState(false);
    const [openFooter, setOpenFooter] = useState(false);
    const [openCompound, setOpenCompound] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            {/* Simple Modals */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button onClick={() => setOpenSmall(true)}>Open Small Modal</Button>
                <Button onClick={() => setOpenMedium(true)}>Open Medium Modal</Button>
                <Button onClick={() => setOpenLarge(true)}>Open Large Modal</Button>
                <Button onClick={() => setOpenFooter(true)} variant="primary">With Footer (Props)</Button>
                <Button onClick={() => setOpenCompound(true)} variant="outline-success">Compound Components</Button>
            </div>

            {/* Sizes Demo */}
            <Modal isOpen={openSmall} onClose={() => setOpenSmall(false)} title="Small Modal" size="sm">
                <p>This is a small modal (400px).</p>
                <p style={{ marginTop: '1rem', color: '#666' }}>
                    Perfect for alerts or small forms.
                </p>
            </Modal>

            <Modal isOpen={openMedium} onClose={() => setOpenMedium(false)} title="Medium Modal" size="md">
                <p>This is a medium modal (550px). It is the default size.</p>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Input label="Name" fullWidth placeholder="Enter your name" />
                    <Input label="Email" fullWidth placeholder="Enter your email" />
                </div>
            </Modal>

            <Modal isOpen={openLarge} onClose={() => setOpenLarge(false)} title="Large Modal" size="lg">
                <p>This is a large modal (800px).</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div style={{ height: '200px', background: '#f5f5f5', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Scrolling Content Area Placeholder
                </div>
            </Modal>

            {/* With Footer Actions */}
            <Modal
                isOpen={openFooter}
                onClose={() => setOpenFooter(false)}
                title="Confirm Action"
                size="md"
                footer={
                    <>
                        <Button variant="ghost" onClick={() => setOpenFooter(false)}>Cancel</Button>
                        <Button variant="danger" onClick={() => setOpenFooter(false)}>Delete Item</Button>
                    </>
                }
            >
                <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            </Modal>

            {/* Compound Component Demo */}
            <Modal isOpen={openCompound} onClose={() => setOpenCompound(false)} size="lg">
                <Modal.Header>Custom Compound Header</Modal.Header>
                <Modal.Body>
                    <p>This modal uses <code>Modal.Header</code>, <code>Modal.Body</code>, and <code>Modal.Footer</code> components directly.</p>
                    <p style={{ marginTop: '0.5rem' }}>This gives you full control over the layout and content of each section.</p>
                    <div style={{ marginTop: '1rem', padding: '1rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '4px' }}>
                        You can insert any custom content here!
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span style={{ fontSize: '0.8rem', color: '#666', display: 'flex', alignItems: 'center' }}>
                            Last updated: Just now
                        </span>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Button variant="ghost" onClick={() => setOpenCompound(false)}>Secondary</Button>
                            <Button variant="success" onClick={() => setOpenCompound(false)}>Primary Action</Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
