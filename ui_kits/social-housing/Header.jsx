// Header.jsx — Irish Gov Life Events Design System
// App header component: standard (form screens) and hero (home screen)

Object.assign(window, { AppHeader, HeroHeader });

function AppHeader({ userName = 'David', onBack, title }) {
  return (
    <div style={{
      background: '#008660', width: '100%', borderRadius: '10px 10px 0 0', flexShrink: 0
    }}>
      <div style={{ height: 24, background: '#008660' }} />
      <div style={{
        height: 67.5, background: '#008660',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {onBack && (
            <button onClick={onBack} style={{
              background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
              width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#fff'
            }}>
              <span className="material-icons" style={{ fontSize: 22 }}>chevron_left</span>
            </button>
          )}
          <HarpMark />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: '#fff', fontSize: 15 }}>{userName}</span>
          <div style={{
            width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}>
            <span className="material-icons" style={{ color: '#fff', fontSize: 20 }}>account_circle</span>
          </div>
        </div>
      </div>
      <div style={{ height: 8, background: '#008660' }} />
    </div>
  );
}

function HeroHeader({ userName = 'David' }) {
  return (
    <div style={{
      background: '#004D44', width: '100%', borderRadius: '10px 10px 0 0',
      position: 'relative', overflow: 'hidden', flexShrink: 0
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('../assets/hero-overlay.png')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.8, mixBlendMode: 'overlay'
      }} />
      <div style={{ position: 'relative' }}>
        <div style={{ height: 24 }} />
        <div style={{
          height: 67.5, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
            }}>
              <span className="material-icons" style={{ color: '#fff', fontSize: 20 }}>notifications</span>
            </div>
            <HarpMark />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#fff', fontSize: 15 }}>{userName}</span>
            <div style={{
              width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
            }}>
              <span className="material-icons" style={{ color: '#fff', fontSize: 20 }}>account_circle</span>
            </div>
          </div>
        </div>
        <div style={{ padding: '0 16px 24px' }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>Good Morning David</div>
          <div style={{ fontSize: 16, fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, marginTop: 8 }}>
            Welcome back to your one stop shop<br />for public services in Ireland
          </div>
        </div>
      </div>
    </div>
  );
}

function HarpMark() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <svg width="24" height="38" viewBox="0 0 28 44" fill="none">
        <rect x="0" y="0" width="1.5" height="44" fill="white" />
        <path d="M7 3 C7 3 22 9 22 22 C22 35 7 41 7 41" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M9 7 C9 7 19 12 19 22 C19 32 9 37 9 37" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7" />
        <line x1="5" y1="9"  x2="22" y2="9"  stroke="white" strokeWidth="1.1" opacity="0.5" />
        <line x1="4" y1="15" x2="22" y2="15" stroke="white" strokeWidth="1.1" opacity="0.5" />
        <line x1="4" y1="22" x2="22" y2="22" stroke="white" strokeWidth="1.1" opacity="0.5" />
        <line x1="4" y1="29" x2="21" y2="29" stroke="white" strokeWidth="1.1" opacity="0.5" />
        <line x1="5" y1="35" x2="20" y2="35" stroke="white" strokeWidth="1.1" opacity="0.5" />
      </svg>
    </div>
  );
}
