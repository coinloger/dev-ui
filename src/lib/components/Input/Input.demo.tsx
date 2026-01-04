import { Input } from './Input';

export default function InputDemo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '1.5rem', maxWidth: '400px' }}>
            <Input label="Default Input" placeholder="Type something..." />

            <Input
                label="With Helper Text"
                placeholder="Enter email"
                helperText="We'll never share your email."
            />

            <Input
                label="Error State"
                placeholder="Invalid input"
                error
                helperText="This field is required"
                defaultValue="Wrong value"
            />

            <Input
                label="Full Width"
                fullWidth
                placeholder="Takes up 100% of container"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Input size="sm" placeholder="Small Input" />
                <Input size="md" placeholder="Medium Input" />
                <Input size="lg" placeholder="Large Input" />
                <Input size="xl" placeholder="Extra Large Input" />
            </div>
        </div>
    );
}
