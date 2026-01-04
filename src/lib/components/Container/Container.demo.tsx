import { Container } from './Container';
import { Flex } from '../Flex/Flex';
import { Heading } from '../Typography/Heading';
import { Text } from '../Typography/Text';

export default function ContainerDemo() {
    return (
        <Flex direction="column" gap="xl">
            <section>
                <Heading level={2} lines={1} style={{ marginBottom: '1rem' }}>Default Container</Heading>
                <Text>Centered with max-width at breakpoints.</Text>
                <div style={{ background: '#ddd', padding: '1rem 0' }}>
                    <Container style={{ background: '#fff', padding: '1rem', border: '1px solid #ccc' }}>
                        <Heading level={4}>Content Limit</Heading>
                        <Text>
                            This content is inside a container. Resize the window to see max-width changes.
                        </Text>
                    </Container>
                </div>
            </section>

            <section>
                <Heading level={2} lines={1} style={{ marginBottom: '1rem' }}>Fluid Container</Heading>
                <Text>100% width at all breakpoints.</Text>
                <div style={{ background: '#ddd', padding: '1rem 0' }}>
                    <Container fluid style={{ background: '#fff', padding: '1rem', border: '1px solid #ccc' }}>
                        <Heading level={4}>Fluid Width</Heading>
                        <Text>
                            This content spans the full width of the parent (minus padding).
                        </Text>
                    </Container>
                </div>
            </section>
        </Flex>
    );
}
