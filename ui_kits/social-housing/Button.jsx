// Button.jsx — Irish Gov Life Events Design System
// Reusable button components

Object.assign(window, { PrimaryButton, SecondaryButton, TertiaryButton, BackLink, Chip });

function PrimaryButton({ children, onClick, fullWidth = false, dark = false, disabled = false, style = {} }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      background: disabled ? '#CCCCCC' : (dark ? '#004D44' : '#00875F'),
      color: disabled ? '#888' : '#fff',
      border: 'none', borderRadius: 4,
      fontFamily: "'Lato', sans-serif", fontSize: 16, fontWeight: 400,
      padding: '12px 24px', height: fullWidth ? 58 : 48,
      width: fullWidth ? '100%' : 'auto',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 0.15s',
      ...style
    }}>
      {children}
      {!disabled && <span className="material-icons" style={{ fontSize: 20 }}>arrow_forward</span>}
    </button>
  );
}

function SecondaryButton({ children, onClick, onDark = false, style = {} }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      background: 'transparent',
      color: onDark ? '#EAF4F5' : '#004D44',
      border: `2px solid ${onDark ? '#EAF4F5' : '#004D44'}`,
      borderRadius: 4,
      fontFamily: "'Lato', sans-serif", fontSize: 16, fontWeight: 400,
      padding: '10px 24px', height: 48,
      cursor: 'pointer', transition: 'background 0.15s',
      ...style
    }}>
      {children}
    </button>
  );
}

function TertiaryButton({ children, onClick, onDark = false, style = {} }) {
  return (
    <button onClick={onClick} style={{
      background: 'transparent', border: 'none',
      color: onDark ? '#EAF4F5' : '#004D44',
      fontFamily: "'Lato', sans-serif", fontSize: 16, fontWeight: 700,
      textDecoration: 'underline', cursor: 'pointer', padding: 0,
      ...style
    }}>
      {children}
    </button>
  );
}

function BackLink({ children = 'Home', onClick }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 4,
      background: 'none', border: 'none',
      color: '#004D44', fontSize: 16,
      fontFamily: "'Lato', sans-serif",
      textDecoration: 'underline', cursor: 'pointer',
      padding: '8px 4px'
    }}>
      <span className="material-icons" style={{ fontSize: 22 }}>chevron_left</span>
      {children}
    </button>
  );
}

function Chip({ children, variant = 'filled', onClick }) {
  const styles = {
    filled:  { background: '#004D44', color: '#fff', border: 'none' },
    outline: { background: 'transparent', color: '#004D44', border: '1.5px solid #004D44' },
    white:   { background: '#fff', color: '#0B0C0C', border: 'none' },
  };
  return (
    <span onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center',
      borderRadius: 24, padding: '4px 14px', fontSize: 14,
      fontFamily: "'Lato', sans-serif", cursor: onClick ? 'pointer' : 'default',
      ...styles[variant]
    }}>
      {children}
    </span>
  );
}
