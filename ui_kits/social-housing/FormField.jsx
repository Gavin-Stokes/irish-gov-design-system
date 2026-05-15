// FormField.jsx — Irish Gov Life Events Design System
// Form input components: text, select, radio, checkbox, date

Object.assign(window, { FormField, SelectField, RadioGroup, CheckboxGroup, FormSection });

function FormField({ label, hint, error, success, type = 'text', value, onChange, placeholder, optional = false, style = {} }) {
  const borderColor = error ? '#d4351c' : success ? '#008660' : '#888888';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      <label style={{ fontSize: 16, fontWeight: 700, color: '#0B0C0C', display: 'flex', gap: 8, alignItems: 'center' }}>
        {label}
        {optional && <span style={{ fontWeight: 400, color: '#505A5F', fontSize: 14 }}>(optional)</span>}
      </label>
      {hint && <div style={{ fontSize: 14, color: '#505A5F' }}>{hint}</div>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          fontFamily: "'Lato', sans-serif", fontSize: 16, border: `1px solid ${borderColor}`,
          borderRadius: 0, padding: '10px 12px', color: '#0B0C0C', background: '#fff',
          width: '100%', outline: 'none'
        }}
        onFocus={e => e.target.style.outline = '3px solid #FFBF47'}
        onBlur={e => e.target.style.outline = 'none'}
      />
      {error && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, color: '#d4351c' }}>
          <span className="material-icons" style={{ fontSize: 16 }}>error</span> {error}
        </div>
      )}
      {success && <div style={{ fontSize: 14, color: '#008660' }}>✓ {success}</div>}
    </div>
  );
}

function SelectField({ label, hint, options = [], value, onChange, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      <label style={{ fontSize: 16, fontWeight: 700, color: '#0B0C0C' }}>{label}</label>
      {hint && <div style={{ fontSize: 14, color: '#505A5F' }}>{hint}</div>}
      <select value={value} onChange={onChange} style={{
        fontFamily: "'Lato', sans-serif", fontSize: 16,
        border: '1px solid #888888', borderRadius: 0,
        padding: '10px 12px', color: '#0B0C0C', background: '#fff', width: '100%'
      }}>
        <option value="">Select an option</option>
        {options.map(o => <option key={o.value || o} value={o.value || o}>{o.label || o}</option>)}
      </select>
    </div>
  );
}

function RadioGroup({ label, name, options = [], value, onChange, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: '#0B0C0C', marginBottom: 4 }}>{label}</div>
      {options.map(opt => (
        <label key={opt.value || opt} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, cursor: 'pointer' }}>
          <input
            type="radio" name={name} value={opt.value || opt}
            checked={value === (opt.value || opt)} onChange={onChange}
            style={{ width: 20, height: 20, accentColor: '#004D44' }}
          />
          {opt.label || opt}
        </label>
      ))}
    </div>
  );
}

function CheckboxGroup({ label, options = [], values = [], onChange, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label && <div style={{ fontSize: 16, fontWeight: 700, color: '#0B0C0C', marginBottom: 4 }}>{label}</div>}
      {options.map(opt => (
        <label key={opt.value || opt} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, cursor: 'pointer' }}>
          <input
            type="checkbox" value={opt.value || opt}
            checked={values.includes(opt.value || opt)}
            onChange={() => onChange(opt.value || opt)}
            style={{ width: 20, height: 20, accentColor: '#004D44', marginTop: 2 }}
          />
          <span>{opt.label || opt}</span>
        </label>
      ))}
    </div>
  );
}

function FormSection({ title, subtitle, children, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, ...style }}>
      {title && (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0B0C0C', marginBottom: 6 }}>{title}</h2>
          {subtitle && <p style={{ fontSize: 16, color: '#505A5F', lineHeight: 1.5 }}>{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
