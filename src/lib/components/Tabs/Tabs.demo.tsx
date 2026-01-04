import { Tabs } from './Tabs';
import { Text } from '../Typography/Text';
import { Heading } from '../Typography/Heading';

export default function TabsDemo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <Heading level={3}>Line Style (Default)</Heading>
                <Tabs defaultValue="account">
                    <Tabs.List>
                        <Tabs.Trigger value="account">Account</Tabs.Trigger>
                        <Tabs.Trigger value="password">Password</Tabs.Trigger>
                        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="account">
                        <div style={{ padding: '1rem 0' }}>
                            <Text>Account settings content...</Text>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content value="password">
                        <div style={{ padding: '1rem 0' }}>
                            <Text>Password change form...</Text>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content value="settings">
                        <div style={{ padding: '1rem 0' }}>
                            <Text>General preferences...</Text>
                        </div>
                    </Tabs.Content>
                </Tabs>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <Heading level={3}>Pills Style</Heading>
                <Tabs defaultValue="daily">
                    <Tabs.List variant="pills">
                        <Tabs.Trigger value="daily">Daily</Tabs.Trigger>
                        <Tabs.Trigger value="weekly">Weekly</Tabs.Trigger>
                        <Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
                        <Tabs.Trigger value="yearly" disabled>Yearly (Disabled)</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="daily">
                        <div style={{ padding: '1rem 0' }}>
                            <Text>Daily view content...</Text>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content value="weekly">
                        <div style={{ padding: '1rem 0' }}>
                            <Text>Weekly view content...</Text>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content value="monthly">
                        <div style={{ padding: '1rem 0' }}>
                            <Text>Monthly view content...</Text>
                        </div>
                    </Tabs.Content>
                </Tabs>
            </div>

        </div>
    );
}
