import { Flex } from './Flex';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Text } from '../Typography/Text';
import { Heading } from '../Typography/Heading';

const Box = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
    <div
        style={{
            padding: '1rem',
            background: 'var(--ui-bg-subtle, #f5f5f5)',
            border: '1px solid var(--ui-border-default, #e0e0e0)',
            borderRadius: 'var(--ui-radius-md, 4px)',
            ...style,
        }}
    >
        {children}
    </div>
);

export default function FlexDemo() {
    return (
        <Flex direction="column" gap="xl">
            <section>
                <Heading level={2} lines={1} style={{ marginBottom: '1rem' }}>Basic Row</Heading>
                <Flex gap="md">
                    <Box>Item 1</Box>
                    <Box>Item 2</Box>
                    <Box>Item 3</Box>
                </Flex>
            </section>

            <section>
                <Heading level={2} lines={1} style={{ marginBottom: '1rem' }}>Basic Column</Heading>
                <Flex direction="column" gap="md">
                    <Box>Item 1</Box>
                    <Box>Item 2</Box>
                    <Box>Item 3</Box>
                </Flex>
            </section>

            <section>
                <Heading level={2} lines={1} style={{ marginBottom: '1rem' }}>Justify Content (Between)</Heading>
                <Flex justify="between">
                    <Button>Left</Button>
                    <Button>Right</Button>
                </Flex>
            </section>

            <section>
                <Heading level={2} lines={1} style={{ marginBottom: '1rem' }}>Align Items (Center)</Heading>
                <Flex align="center" gap="md" style={{ height: '100px', background: '#f0f0f0', padding: '10px' }}>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                    <Text>Text centered vertically</Text>
                </Flex>
            </section>

            <section>
                <Heading level={2} lines={1} style={{ marginBottom: '1rem' }}>Wrapping</Heading>
                <Flex wrap="wrap" gap="sm" style={{ maxWidth: '300px', border: '1px dashed #ccc', padding: '5px' }}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Box key={i}>Item {i + 1}</Box>
                    ))}
                </Flex>
            </section>

            <section>
                <Heading level={2} lines={1} style={{ marginBottom: '1rem' }}>Custom Gap (e.g. 50px)</Heading>
                <Flex gap="50px">
                    <Box>Custom</Box>
                    <Box>Gap</Box>
                    <Box>50px</Box>
                </Flex>
            </section>

            <section>
                <Heading level={2} lines={1} style={{ marginBottom: '1rem' }}>Sidebar Layout (using Flex.Item)</Heading>
                <Flex gap="md" style={{ height: '200px', border: '1px solid #ccc' }}>
                    {/* Fixed Sidebar */}
                    <Flex.Item width="200px" shrink={0} style={{ background: '#ddd', padding: '1rem' }}>
                        <Text weight="bold">Sidebar</Text>
                        <Text>Fixed 200px</Text>
                    </Flex.Item>

                    {/* Fluid Content */}
                    <Flex.Item grow={1} style={{ background: '#f5f5f5', padding: '1rem' }}>
                        <Heading level={3}>Main Content</Heading>
                        <Text>This area takes up the remaining space (grow=1).</Text>
                    </Flex.Item>
                </Flex>
            </section>

            <section>
                <Heading level={2} lines={1} style={{ marginBottom: '1rem' }}>Nested Layout</Heading>
                <Card>
                    <Flex direction="column" gap="md">
                        <Flex justify="between" align="center">
                            <Heading level={3} style={{ margin: 0 }}>Card Title</Heading>
                            <Button size="sm" variant="outline">Action</Button>
                        </Flex>
                        <Text>
                            This is a card with a header layout built using nested Flex components.
                            The header has 'space-between' justification and center alignment.
                        </Text>
                        <Flex justify="end" gap="sm">
                            <Button variant="ghost">Cancel</Button>
                            <Button>Save</Button>
                        </Flex>
                    </Flex>
                </Card>
            </section>
        </Flex>
    );
}
