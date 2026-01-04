import { useState } from 'react';
import { Select } from './Select';

const OPTIONS = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
];

export default function SelectDemo() {
    const [value, setValue] = useState<string | number>('');
    const [geoValue, setGeoValue] = useState<string | number>('ukraine');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '400px' }}>
            {/* Basic Usage */}
            <Select
                label="Choose Framework"
                placeholder="Select a framework..."
                options={OPTIONS}
                value={value}
                onChange={setValue}
                fullWidth
            />

            {/* Pre-selected & Sizes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Select
                    size="sm"
                    options={[{ value: 'ukraine', label: '🇺🇦 Ukraine' }, { value: 'usa', label: '🇺🇸 USA' }]}
                    value={geoValue}
                    onChange={setGeoValue}
                    fullWidth
                />
                 <Select
                    size="md"
                    placeholder="Medium (Default)"
                    options={OPTIONS}
                    fullWidth
                />
                 <Select
                    size="lg"
                    placeholder="Large Select"
                    options={OPTIONS}
                    fullWidth
                />
                 <Select
                    size="xl"
                    placeholder="Extra Large Select"
                    options={OPTIONS}
                    fullWidth
                />
            </div>

            {/* States */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Select
                    label="Error State"
                    error
                    helperText="This field is required"
                    options={OPTIONS}
                    placeholder="Error example"
                    fullWidth
                />
                <Select
                    label="Disabled State"
                    disabled
                    options={OPTIONS}
                    placeholder="Cannot select"
                    fullWidth
                />
            </div>
        </div>
    );
}
