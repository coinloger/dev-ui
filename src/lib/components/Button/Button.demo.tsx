import { Button } from './Button';

export default function ButtonDemo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Sizes */}
            <section>
                <h4 style={{ marginBottom: '1rem', color: '#666' }}>Sizes (xs to xl)</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                </div>
            </section>

            {/* Variants */}
            <section>
                <h4 style={{ marginBottom: '1rem', color: '#666' }}>Variants</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                    <Button variant="outline-danger">Danger Outline</Button>
                    <Button variant="outline-success">Success Outline</Button>
                    <Button variant="outline-warning">Warning Outline</Button>
                </div>
            </section>

            {/* States */}
            <section>
                <h4 style={{ marginBottom: '1rem', color: '#666' }}>States</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                    {/* Focus state can be tested by changing focus with Tab key */}
                    <Button autoFocus>Focused</Button>
                </div>
            </section>
        </div>
    );
}
