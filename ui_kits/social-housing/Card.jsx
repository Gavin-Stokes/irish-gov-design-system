// Card.jsx — Irish Gov Life Events Design System
// Reusable card components

Object.assign(window, { ServiceCard, ApplicationCard, InfoSectionCard, StepCard, HelpPanel });

function ServiceCard({ title, description, icon, style = {} }) {
  return (
    <div style={{
      borderRadius: 10, background: '#EAF4F5',
      boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
      padding: 20, display: 'flex', flexDirection: 'column', gap: 10,
      position: 'relative', overflow: 'hidden',
      ...style
    }}>
      {icon && (
        <div style={{ position: 'absolute', right: 12, top: 12, opacity: 0.8 }}>
          <img src={icon} alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />
        </div>
      )}
      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#004D44', lineHeight: 1.3, paddingRight: icon ? 72 : 0 }}>
        {title}
      </h3>
      <p style={{ fontSize: 16, color: '#0B0C0C', lineHeight: 1.5, letterSpacing: '0.005em' }}>
        {description}
      </p>
    </div>
  );
}

function ApplicationCard({ title, subtitle, dateLabel, onAction, actionLabel = 'Apply now', style = {} }) {
  return (
    <div style={{
      borderRadius: 8, background: '#F0F0F0',
      padding: 20, display: 'flex', flexDirection: 'column', gap: 14,
      ...style
    }}>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#004D44', lineHeight: 1.3 }}>{title}</h3>
      {dateLabel && (
        <span style={{
          display: 'inline-block', background: '#fff', borderRadius: 24,
          padding: '2px 14px', fontSize: 13, color: '#0B0C0C', alignSelf: 'flex-start'
        }}>
          {dateLabel}
        </span>
      )}
      {subtitle && <p style={{ fontSize: 15, color: '#505A5F', lineHeight: 1.5 }}>{subtitle}</p>}
      {onAction && (
        <button onClick={onAction} style={{
          background: '#00875F', color: '#fff', border: 'none', borderRadius: 4,
          fontFamily: "'Lato', sans-serif", fontSize: 15, padding: '12px 16px',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
        }}>
          {actionLabel} <span className="material-icons" style={{ fontSize: 18 }}>arrow_forward</span>
        </button>
      )}
    </div>
  );
}

function InfoSectionCard({ tag, title, description, style = {} }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid #E0E0E0', borderRadius: 8,
      padding: 16, display: 'flex', flexDirection: 'column', gap: 6,
      ...style
    }}>
      {tag && <div style={{ fontSize: 11, fontWeight: 700, color: '#008660', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{tag}</div>}
      <h4 style={{ fontSize: 16, fontWeight: 700, color: '#0B0C0C' }}>{title}</h4>
      {description && <p style={{ fontSize: 13, color: '#505A5F', lineHeight: 1.5 }}>{description}</p>}
    </div>
  );
}

function StepCard({ number, title, description, complete = false, active = false, style = {} }) {
  const circleColor = complete ? '#004D44' : active ? '#008660' : '#888';
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 14,
      padding: '14px 16px', background: '#fff', borderRadius: 8,
      opacity: (!complete && !active) ? 0.6 : 1,
      ...style
    }}>
      <div style={{
        width: 30, height: 30, borderRadius: '50%', background: circleColor,
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 700, flexShrink: 0
      }}>
        {complete ? <span className="material-icons" style={{ fontSize: 16 }}>check</span> : number}
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 700, color: active ? '#004D44' : '#0B0C0C' }}>{title}</div>
        {description && <div style={{ fontSize: 13, color: '#505A5F', marginTop: 2 }}>{description}</div>}
      </div>
    </div>
  );
}

function HelpPanel({ style = {} }) {
  return (
    <div style={{
      background: '#004D44', padding: '40px 16px 48px',
      display: 'flex', flexDirection: 'column', gap: 0,
      ...style
    }}>
      <h2 style={{ fontSize: 26, fontWeight: 700, color: '#EAF4F5', marginBottom: 20 }}>Need Help?</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
        <p style={{ fontSize: 16, color: '#EAF4F5', lineHeight: 1.5 }}>
          Can we help right now?<br />Chat with our digital assistant.
        </p>
        <div style={{
          width: 56, height: 56, borderRadius: '50%', border: '3px solid #EAF4F5',
          background: 'rgba(255,255,255,0.1)', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
        }}>
          <span className="material-icons" style={{ color: '#EAF4F5', fontSize: 26 }}>support_agent</span>
          <div style={{
            width: 13, height: 13, background: '#19B729', borderRadius: '50%',
            border: '3px solid #004D44', position: 'absolute', top: 1, right: 1
          }} />
        </div>
      </div>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.3)', marginBottom: 20 }} />

      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 16, color: '#EAF4F5', lineHeight: 1.5, marginBottom: 10 }}>
          <strong>Give us a call</strong><br />
          Our Centralised Service Line can quickly direct you to any government service.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="material-icons" style={{ color: '#EAF4F5', fontSize: 20 }}>phone</span>
          <span style={{ color: '#EAF4F5', fontSize: 16 }}>1800 XXX XXX</span>
        </div>
      </div>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.3)', marginBottom: 20 }} />

      <div>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#EAF4F5', lineHeight: 1.5, marginBottom: 12 }}>
          Chat with someone in person<br />
          <span style={{ fontWeight: 400 }}>With Quick Meet you can schedule a meeting in your local Services Hub or arrange a video link. It's superfast!</span>
        </p>
        <button style={{
          display: 'block', width: '100%', background: '#EAF4F5', color: '#004D44',
          border: 'none', borderRadius: 4, fontFamily: "'Lato', sans-serif", fontSize: 16,
          fontWeight: 700, padding: 16, textAlign: 'center', cursor: 'pointer', marginBottom: 16
        }}>
          Let's schedule a call
        </button>
        <a style={{ fontSize: 16, fontWeight: 700, color: '#EAF4F5', textDecoration: 'underline', cursor: 'pointer' }}>
          Discover more in FAQs
        </a>
      </div>
    </div>
  );
}
