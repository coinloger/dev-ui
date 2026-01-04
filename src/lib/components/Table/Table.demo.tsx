import { Table } from './Table';

export default function TableDemo() {
    const data = [
        { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', role: 'User', status: 'Inactive' },
        { id: 3, name: 'Bob Johnson', role: 'Editor', status: 'Active' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
            <div>
                <h4 style={{ marginBottom: '1rem' }}>Basic Table</h4>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <div>
                <h4 style={{ marginBottom: '1rem' }}>Striped & Hover</h4>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <div>
                <h4 style={{ marginBottom: '1rem' }}>Small Size</h4>
                <Table size="sm" bordered={false}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
