import { Heading } from './Heading';
import { Text } from './Text';

export default function TypographyDemo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Heading level={2}>Headings</Heading>
                <div style={{ border: '1px solid var(--ui-border)', padding: '2rem', borderRadius: '8px' }}>
                    <Heading level={1}>Heading 1</Heading>
                    <Heading level={2}>Heading 2</Heading>
                    <Heading level={3}>Heading 3</Heading>
                    <Heading level={4}>Heading 4</Heading>
                    <Heading level={5}>Heading 5</Heading>
                    <Heading level={6}>Heading 6</Heading>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Heading level={2}>Text Variants</Heading>
                <div style={{ border: '1px solid var(--ui-border)', padding: '2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Text variant="lead">Lead Text: Use this for introductory paragraphs that need to stand out.</Text>
                    <Text>Body Text (Default): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <Text variant="small">Small Text: For secondary information.</Text>
                    <Text variant="caption">Caption Text: Typically used for image captions or disclaimers.</Text>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Heading level={2}>Weights & Options</Heading>
                <div style={{ border: '1px solid var(--ui-border)', padding: '2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Text weight="bold">Bold Text</Text>
                    <Text weight="semibold">Semibold Text</Text>
                    <Text weight="medium">Medium Text</Text>
                    <Text muted>Muted Text variant</Text>
                    <Text as="span">Rendered as a SPAN element</Text>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Heading level={2}>Truncation & Clamping</Heading>
                <div style={{ border: '1px solid var(--ui-border)', padding: '2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
                    <Text truncate>
                        Single line truncation: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <Text lines={2}>
                        Multi-line clamp (2 lines): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <Text lines={3} muted>
                        Multi-line clamp (3 lines) with muted color: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                    </Text>
                </div>
            </div>
        </div>
    );
}
