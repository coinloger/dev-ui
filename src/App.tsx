import { useState, useMemo } from 'react';
import './App.css';

// 1. Auto-discover all demo files
const demoModules = import.meta.glob('./lib/**/*.demo.tsx', { eager: true });

function App() {
    const [activePath, setActivePath] = useState<string | null>(
        Object.keys(demoModules)[0] || null
    );

    // Parse path into nice names
    const demos = useMemo(() => {
        return Object.entries(demoModules).map(([path, mod]: [string, any]) => {
            // ./lib/components/Button/Button.demo.tsx -> Button
            const name = path.split('/').slice(-2)[0] || 'Unknown';
            return {
                name,
                path,
                Component: mod.default,
            };
        });
    }, []);

    const ActiveComponent = demos.find((d) => d.path === activePath)?.Component;

    return (
        <div className="app-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <header className="sidebar-header">
                    <h1>Dev UI Kit</h1>
                    <p>Component Playground</p>
                </header>
                <nav className="sidebar-nav">
                    {demos.map((demo) => (
                        <button
                            key={demo.path}
                            className={`nav-item ${activePath === demo.path ? 'active' : ''}`}
                            onClick={() => setActivePath(demo.path)}
                        >
                            {demo.name}
                        </button>
                    ))}
                    {demos.length === 0 && (
                        <div style={{ padding: '1rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
                            No .demo.tsx files found.
                        </div>
                    )}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {ActiveComponent ? (
                    <>
                        <div className="component-header">
                            <h2 className="component-title">
                                {demos.find((d) => d.path === activePath)?.name}
                            </h2>
                            <span className="component-path">{activePath}</span>
                        </div>
                        <div className="component-stage">
                            <ActiveComponent />
                        </div>
                    </>
                ) : (
                    <div className="empty-state">
                        <p>Select a component from the sidebar to view it.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
