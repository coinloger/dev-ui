import { Checkbox } from './Checkbox';

export default function CheckboxDemo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>Sizes</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <Checkbox size="sm" label="Small" />
                    <Checkbox size="md" label="Medium" defaultChecked />
                    <Checkbox size="lg" label="Large" />
                    <Checkbox size="xl" label="Extra Large" defaultChecked />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>Variants</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Checkbox variant="primary" label="Primary (Default)" defaultChecked />
                    <Checkbox variant="success" label="Success" defaultChecked />
                    <Checkbox variant="warning" label="Warning" defaultChecked />
                    <Checkbox variant="danger" label="Danger" defaultChecked />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>States</h3>
                <Checkbox label="Disabled" disabled />
                <Checkbox label="Disabled Checked" disabled defaultChecked />
            </div>
        </div>
    );
}
