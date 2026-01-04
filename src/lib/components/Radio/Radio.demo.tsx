import { Radio } from './Radio';

export default function RadioDemo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>Sizes</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <Radio name="size" size="sm" label="Small" />
                    <Radio name="size" size="md" label="Medium" />
                    <Radio name="size" size="lg" label="Large" />
                    <Radio name="size" size="xl" label="Extra Large" />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>Variants</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Radio name="v" variant="primary" label="Primary" defaultChecked />
                    <Radio name="v" variant="success" label="Success" defaultChecked />
                    <Radio name="v" variant="warning" label="Warning" defaultChecked />
                    <Radio name="v" variant="danger" label="Danger" defaultChecked />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>States</h3>
                <Radio label="Disabled" disabled />
                <Radio label="Disabled Checked" disabled defaultChecked />
            </div>
        </div>
    );
}
