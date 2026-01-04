import { Card } from './Card';
import { Button } from '../Button/Button';

export default function CardDemo() {
    return (
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', width: '100%', alignItems: 'flex-start' }}>
            <Card title="Basic Card" style={{ width: '300px' }}>
                <p style={{ margin: 0 }}>
                    This is a simple card with a header and body content. It uses the default styles.
                </p>
            </Card>

            <Card
                title="Interactive Card"
                style={{ width: '300px' }}
                footer={
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <Button size="sm" variant="outline">Cancel</Button>
                        <Button size="sm">Save</Button>
                    </div>
                }
            >
                <p style={{ marginTop: 0 }}>
                    This card has a footer with actions.
                </p>
                <p style={{ marginBottom: 0, color: '#666', fontSize: '0.9rem' }}>
                    It demonstrates how to compose components together.
                </p>
            </Card>

            <Card style={{ width: '300px' }}>
                <h4 style={{ marginTop: 0 }}>Card without Header</h4>
                <p>
                    You can also use the card without a title prop for a simpler container look.
                </p>
            </Card>
        </div>
    );
}
