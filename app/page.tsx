export default function Home() {
  const tier = process.env.SST_STAGE_TIER ?? 'local';
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        background: '#FAF9F5',
        color: '#1B1F1D',
      }}
    >
      <div style={{ fontSize: 42 }}>⚡</div>
      <h1 style={{ margin: 0 }}>__APP_NAME__ is alive</h1>
      <p style={{ color: '#68706B' }}>
        Scaffolded by Nexus onto the SST paved road. stage tier: <code>{tier}</code>
      </p>
      <p style={{ color: '#9AA29C', fontSize: 13 }}>Replace this page and start building.</p>
    </main>
  );
}
