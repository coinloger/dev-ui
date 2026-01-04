import { useState } from 'react';
import { Switch } from './Switch';

export default function SwitchDemo() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>Sizes</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Switch size="sm" label="Small" />
                    <Switch size="md" label="Medium" />
                    <Switch size="lg" label="Large" />
                    <Switch size="xl" label="Extra Large" />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>Variants</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Switch variant="primary" label="Primary" defaultChecked />
                    <Switch variant="success" label="Success" defaultChecked />
                    <Switch variant="warning" label="Warning" defaultChecked />
                    <Switch variant="danger" label="Danger" defaultChecked />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>States</h3>
                <Switch
                    label="Interactive"
                    checked={enabled}
                    onChange={(e) => setEnabled(e.target.checked)}
                />
                <Switch label="Disabled Off" disabled />
                <Switch label="Disabled On" disabled defaultChecked />
            </div>
        </div>
    );
}
