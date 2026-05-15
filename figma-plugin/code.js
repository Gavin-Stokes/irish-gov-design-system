// ============================================================
// Irish Government Design System — Figma Plugin
// Generates colour styles, text styles, effect styles,
// and component frames for the Social Housing Application.
// ============================================================

figma.showUI(__html__, { width: 380, height: 570, title: 'Irish Gov Design System' });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate') {
    try {
      await generate(msg.options);
      figma.ui.postMessage({ type: 'done' });
      figma.notify('🇮🇪 Design system generated!', { timeout: 3000 });
    } catch (err) {
      figma.ui.postMessage({ type: 'error', message: String(err) });
    }
  }
  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};

// ── Utilities ────────────────────────────────────────────────

function progress(msg) {
  figma.ui.postMessage({ type: 'progress', message: msg });
}

/** Convert 6-digit hex string to Figma RGB (0–1 range). */
function hex(h) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  return m
    ? { r: parseInt(m[1], 16) / 255, g: parseInt(m[2], 16) / 255, b: parseInt(m[3], 16) / 255 }
    : { r: 0, g: 0, b: 0 };
}

function solid(hexColor, opacity) {
  return [{ type: 'SOLID', color: hex(hexColor), opacity: opacity !== undefined ? opacity : 1 }];
}

function rgba(hexColor, alpha) {
  return [{ type: 'SOLID', color: hex(hexColor), opacity: alpha }];
}

async function loadFonts() {
  const fonts = [
    { family: 'Lato', style: 'Light' },
    { family: 'Lato', style: 'Regular' },
    { family: 'Lato', style: 'Bold' },
    { family: 'Lato', style: 'Black' },
  ];
  for (const font of fonts) {
    try {
      await figma.loadFontAsync(font);
    } catch {
      // Lato not installed — fall back to Inter
      try {
        await figma.loadFontAsync({ family: 'Inter', style: font.style === 'Black' ? 'Bold' : font.style });
      } catch {
        await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
      }
    }
  }
}

/** Resolve Lato font, falling back to Inter or Roboto. */
async function font(style) {
  for (const family of ['Lato', 'Inter', 'Roboto']) {
    try {
      const s = (family !== 'Lato' && style === 'Black') ? 'Bold' : style;
      await figma.loadFontAsync({ family, style: s });
      return { family, style: s };
    } catch { /* try next */ }
  }
  return { family: 'Inter', style: 'Regular' };
}

/** Create or find an existing page by name. */
function getOrCreatePage(name) {
  let page = figma.root.children.find(p => p.name === name);
  if (!page) {
    page = figma.createPage();
    page.name = name;
  }
  return page;
}

/** Add a rectangle node to a parent. */
function addRect(parent, { x = 0, y = 0, w, h, fills, cornerRadius, name, opacity }) {
  const rect = figma.createRectangle();
  rect.x = x;
  rect.y = y;
  rect.resize(w, h);
  if (fills)        rect.fills = fills;
  if (cornerRadius) rect.cornerRadius = cornerRadius;
  if (name)         rect.name = name;
  if (opacity !== undefined) rect.opacity = opacity;
  parent.appendChild(rect);
  return rect;
}

/** Add a text node to a parent. */
async function addText(parent, {
  x = 0, y = 0, w, h,
  content = '',
  fontFamily = 'Lato', fontStyle = 'Regular',
  fontSize = 16,
  fills,
  lineHeight,
  letterSpacing,
  textAlignHorizontal,
  name,
  opacity,
}) {
  const t = figma.createText();
  t.x = x;
  t.y = y;
  if (name) t.name = name;
  if (opacity !== undefined) t.opacity = opacity;

  try {
    t.fontName = { family: fontFamily, style: fontStyle };
  } catch {
    try { t.fontName = { family: 'Inter', style: fontStyle === 'Black' ? 'Bold' : fontStyle }; }
    catch { t.fontName = { family: 'Inter', style: 'Regular' }; }
  }

  t.fontSize = fontSize;
  t.characters = content;

  if (fills)               t.fills = fills;
  if (lineHeight)          t.lineHeight = lineHeight;
  if (letterSpacing)       t.letterSpacing = letterSpacing;
  if (textAlignHorizontal) t.textAlignHorizontal = textAlignHorizontal;

  if (w) { t.textAutoResize = 'HEIGHT'; t.resize(w, h || 100); }

  parent.appendChild(t);
  return t;
}

// ── COLOUR TOKENS ────────────────────────────────────────────

const COLOURS = {
  // Primary greens
  'Primary/Deep Forest':    '#004D44',
  'Primary/Rich Green':     '#008660',
  'Primary/Action Green':   '#00875F',
  'Primary/Mid Teal':       '#028072',
  'Primary/Accent Green':   '#4DA373',
  'Primary/Light Accent':   '#95D1B0',
  'Primary/Seafoam':        '#6DD7C0',
  'Primary/Pale Teal':      '#9AE1DA',
  'Primary/Light Teal':     '#BFE7E4',
  'Primary/Pale Mint':      '#D5EEDB',
  'Primary/Subtle Fill':    '#D5EBDF',
  'Primary/Card Teal':      '#EAF4F5',
  'Primary/Warm Green':     '#D8E7B9',
  // Warm neutrals
  'Neutral/Warm Off-white': '#F6F4EF',
  // Neutrals
  'Neutral/Near Black':     '#0B0C0C',
  'Neutral/Dark Slate':     '#263238',
  'Neutral/Dark Text':      '#262626',
  'Neutral/Slate Grey':     '#455A64',
  'Neutral/De-emphasised':  '#585858',
  'Neutral/Body Grey':      '#505A5F',
  'Neutral/Mid Grey':       '#888888',
  'Neutral/Standard Grey':  '#808080',
  'Neutral/Divider Grey':   '#CCCCCC',
  'Neutral/Light Divider':  '#E0E0E0',
  'Neutral/Subtle Divider': '#EBEBEB',
  'Neutral/Inner Card':     '#F0F0F0',
  'Neutral/Page BG Alt':    '#F5F5F5',
  'Neutral/Near White':     '#FAFAFA',
  'Neutral/Form BG':        '#F2F2F2',
  'Neutral/White':          '#FFFFFF',
  // Accents
  'Accent/Salmon':          '#EB996E',
  'Accent/Peach':           '#FFBE9D',
  'Accent/Yellow Harp':     '#E3DE83',
  'Accent/Focus Gold':      '#FFBF47',
  // Status
  'Status/Success Green':   '#19B729',
  'Status/Error Red':       '#D4351C',
  // Semantic
  'Semantic/BG Page':       '#F2F2F2',
  'Semantic/BG Hero':       '#004D44',
  'Semantic/BG Header':     '#008660',
  'Semantic/BG Card':       '#EAF4F5',
  'Semantic/BG Card Inner': '#F0F0F0',
  'Semantic/BG Help':       '#004D44',
  'Semantic/Text Primary':  '#0B0C0C',
  'Semantic/Text Heading':  '#004D44',
  'Semantic/Text Secondary':'#505A5F',
  'Semantic/Text On Dark':  '#FFFFFF',
  'Semantic/Button Primary': '#00875F',
  'Semantic/Border Default': '#888888',
};

// ── TYPE TOKENS ──────────────────────────────────────────────

const TEXT_STYLES = [
  { name: 'Hero/32 Bold',         size: 32, style: 'Bold',    lh: { unit: 'PERCENT', value: 110 }, ls: { unit: 'PIXELS', value: 0 } },
  { name: 'H1/28 Bold',           size: 28, style: 'Bold',    lh: { unit: 'PERCENT', value: 125 }, ls: { unit: 'PIXELS', value: 0 } },
  { name: 'H2/24 Bold',           size: 24, style: 'Bold',    lh: { unit: 'PERCENT', value: 125 }, ls: { unit: 'PIXELS', value: 0 } },
  { name: 'H3/20 Bold',           size: 20, style: 'Bold',    lh: { unit: 'PERCENT', value: 130 }, ls: { unit: 'PIXELS', value: 0 } },
  { name: 'Body Large/18 Regular',size: 18, style: 'Regular', lh: { unit: 'PERCENT', value: 160 }, ls: { unit: 'PIXELS', value: 0 } },
  { name: 'Body/16 Regular',      size: 16, style: 'Regular', lh: { unit: 'PERCENT', value: 150 }, ls: { unit: 'PIXELS', value: 0.08 } },
  { name: 'Body Small/14 Regular',size: 14, style: 'Regular', lh: { unit: 'PERCENT', value: 150 }, ls: { unit: 'PIXELS', value: 0 } },
  { name: 'Caption/12 Regular',   size: 12, style: 'Regular', lh: { unit: 'PERCENT', value: 150 }, ls: { unit: 'PIXELS', value: 0 } },
  { name: 'Overline/10 Regular',  size: 10, style: 'Regular', lh: { unit: 'PERCENT', value: 150 }, ls: { unit: 'PIXELS', value: 3.2 } },
];

// ── STYLE CREATORS ───────────────────────────────────────────

async function createColorStyles() {
  for (const [name, hexVal] of Object.entries(COLOURS)) {
    // Find existing style with same name, or create new
    const existing = figma.getLocalPaintStyles().find(s => s.name === name);
    const style = existing || figma.createPaintStyle();
    style.name = name;
    style.paints = solid(hexVal);
  }
}

async function createTextStyles() {
  for (const ts of TEXT_STYLES) {
    const f = await font(ts.style);
    const existing = figma.getLocalTextStyles().find(s => s.name === ts.name);
    const style = existing || figma.createTextStyle();
    style.name = ts.name;
    style.fontName = f;
    style.fontSize = ts.size;
    style.lineHeight = ts.lh;
    style.letterSpacing = ts.ls;
  }
}

function createEffectStyles() {
  const effects = [
    {
      name: 'Card shadow',
      effect: { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.25 }, offset: { x: 0, y: 4 }, radius: 4, spread: 0, visible: true, blendMode: 'NORMAL' },
    },
    {
      name: 'Ambient shadow',
      effect: { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.05 }, offset: { x: 0, y: 2 }, radius: 8, spread: 0, visible: true, blendMode: 'NORMAL' },
    },
    {
      name: 'Chat panel shadow',
      effect: { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.25 }, offset: { x: 0, y: 4 }, radius: 14, spread: 0, visible: true, blendMode: 'NORMAL' },
    },
  ];
  for (const { name, effect } of effects) {
    const existing = figma.getLocalEffectStyles().find(s => s.name === name);
    const style = existing || figma.createEffectStyle();
    style.name = name;
    style.effects = [effect];
  }
}

// ── PAGE: COVER ──────────────────────────────────────────────

async function createCoverPage() {
  const page = getOrCreatePage('🇮🇪 Cover');
  figma.currentPage = page;

  const W = 1440, H = 900;
  const frame = figma.createFrame();
  frame.name = 'Cover';
  frame.resize(W, H);
  frame.fills = solid('#004D44');

  // Texture overlay feel — a lighter green rectangle
  const overlay = figma.createRectangle();
  overlay.resize(W, H);
  overlay.fills = solid('#028072', 0.15);
  overlay.name = 'Overlay';
  frame.appendChild(overlay);

  // Decorative circles
  const circle1 = figma.createEllipse();
  circle1.resize(600, 600);
  circle1.x = W - 400;
  circle1.y = -200;
  circle1.fills = solid('#008660', 0.2);
  circle1.name = 'Decoration';
  frame.appendChild(circle1);

  const circle2 = figma.createEllipse();
  circle2.resize(300, 300);
  circle2.x = -100;
  circle2.y = H - 200;
  circle2.fills = solid('#00875F', 0.15);
  circle2.name = 'Decoration';
  frame.appendChild(circle2);

  // Overline
  await addText(frame, { x: 80, y: 300, content: 'DPENDR — LIFE EVENTS', fontStyle: 'Regular', fontSize: 12,
    fills: solid('#9AE1DA'), letterSpacing: { unit: 'PIXELS', value: 3 } });

  // Title
  await addText(frame, { x: 80, y: 336, w: 680, content: 'Irish Government\nDesign System', fontStyle: 'Bold', fontSize: 64,
    fills: solid('#FFFFFF'), lineHeight: { unit: 'PERCENT', value: 115 }, name: 'Title' });

  // Subtitle
  await addText(frame, { x: 80, y: 500, w: 560, content: 'Social Housing Application — Mobile Design System\nWCAG 2.1 AA · Mobile-first (390px) · Lato typeface', fontStyle: 'Regular', fontSize: 18,
    fills: solid('#BFE7E4'), lineHeight: { unit: 'PERCENT', value: 160 } });

  // Version pill
  const pill = figma.createFrame();
  pill.name = 'Version';
  pill.x = 80;
  pill.y = 600;
  pill.resize(72, 28);
  pill.cornerRadius = 14;
  pill.fills = solid('#008660', 0.4);
  frame.appendChild(pill);
  await addText(pill, { x: 14, y: 6, content: 'v 1.0', fontStyle: 'Bold', fontSize: 12, fills: solid('#FFFFFF') });

  // Credit
  await addText(frame, { x: 80, y: H - 60, content: '© 2022 Deloitte Global · DPENDR · Irish Government Life Events', fontStyle: 'Regular',
    fontSize: 12, fills: solid('#9AE1DA', 0.6) });

  // Colour bar along bottom
  const barColors = ['#004D44','#008660','#00875F','#028072','#4DA373','#BFE7E4','#EAF4F5','#D5EEDB','#0B0C0C','#505A5F'];
  const barW = W / barColors.length;
  barColors.forEach((c, i) => {
    addRect(frame, { x: i * barW, y: H - 8, w: barW, h: 8, fills: solid(c) });
  });

  frame.x = 0;
  frame.y = 0;
  figma.viewport.scrollAndZoomIntoView([frame]);
}

// ── PAGE: COLOUR PALETTE ─────────────────────────────────────

async function createColorPage() {
  const page = getOrCreatePage('🎨 Colours');
  figma.currentPage = page;

  const groups = [
    { label: 'Primary Greens', keys: Object.keys(COLOURS).filter(k => k.startsWith('Primary/')) },
    { label: 'Neutrals',       keys: Object.keys(COLOURS).filter(k => k.startsWith('Neutral/')) },
    { label: 'Accents',        keys: Object.keys(COLOURS).filter(k => k.startsWith('Accent/')) },
    { label: 'Status',         keys: Object.keys(COLOURS).filter(k => k.startsWith('Status/')) },
    { label: 'Semantic',       keys: Object.keys(COLOURS).filter(k => k.startsWith('Semantic/')) },
  ];

  let pageX = 0;
  const SWATCH_W = 160, SWATCH_H = 140, GAP = 16, COLS = 6;

  for (const { label, keys } of groups) {
    // Section header
    await addText(figma.currentPage, {
      x: pageX, y: 0, content: label, fontStyle: 'Bold', fontSize: 22,
      fills: solid('#0B0C0C'), name: `Label/${label}`,
    });

    let col = 0, row = 0;
    for (const name of keys) {
      const hexVal = COLOURS[name];
      const x = pageX + col * (SWATCH_W + GAP);
      const y = 48 + row * (SWATCH_H + GAP);

      // Swatch frame
      const sw = figma.createFrame();
      sw.name = `Swatch/${name}`;
      sw.x = x;
      sw.y = y;
      sw.resize(SWATCH_W, SWATCH_H);
      sw.cornerRadius = 8;
      sw.fills = solid('#FFFFFF');
      sw.effects = [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.08 }, offset: { x: 0, y: 2 }, radius: 8, spread: 0, visible: true, blendMode: 'NORMAL' }];
      figma.currentPage.appendChild(sw);

      // Colour block
      const block = figma.createRectangle();
      block.resize(SWATCH_W, 80);
      block.fills = solid(hexVal);
      sw.appendChild(block);

      // Border on very light colours
      const { r, g, b } = hex(hexVal);
      if (r > 0.9 && g > 0.9 && b > 0.9) {
        block.strokes = solid('#E0E0E0');
        block.strokeWeight = 1;
      }

      // Short name
      const shortName = name.split('/')[1];
      await addText(sw, { x: 12, y: 88, content: shortName, fontStyle: 'Bold', fontSize: 12, fills: solid('#0B0C0C') });
      await addText(sw, { x: 12, y: 104, content: hexVal.toUpperCase(), fontStyle: 'Regular', fontSize: 11, fills: solid('#888888') });
      const token = '--color-' + name.toLowerCase().replace('/', '-').replace(/ /g, '-').replace(/\//g, '-');
      await addText(sw, { x: 12, y: 119, content: token, fontStyle: 'Regular', fontSize: 10, fills: solid('#004D44') });

      col++;
      if (col >= COLS) { col = 0; row++; }
    }

    const rowCount = Math.ceil(keys.length / COLS);
    pageX += COLS * (SWATCH_W + GAP) + 60;
  }

  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
}

// ── PAGE: TYPOGRAPHY ─────────────────────────────────────────

async function createTypographyPage() {
  const page = getOrCreatePage('📝 Typography');
  figma.currentPage = page;

  // Background frame
  const bg = figma.createFrame();
  bg.name = 'Type Scale';
  bg.resize(900, 1000);
  bg.fills = solid('#FFFFFF');
  bg.cornerRadius = 12;
  bg.effects = [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.06 }, offset: { x: 0, y: 4 }, radius: 16, spread: 0, visible: true, blendMode: 'NORMAL' }];
  figma.currentPage.appendChild(bg);

  // Title
  await addText(bg, { x: 48, y: 48, content: 'Type Scale', fontStyle: 'Bold', fontSize: 28, fills: solid('#0B0C0C') });
  await addText(bg, { x: 48, y: 88, content: 'Lato · Google Fonts · Weights: 300, 400, 700, 900', fontStyle: 'Regular', fontSize: 14, fills: solid('#505A5F') });

  // Divider
  addRect(bg, { x: 48, y: 114, w: 804, h: 1, fills: solid('#E0E0E0') });

  // Column headers
  await addText(bg, { x: 48,  y: 126, content: 'ROLE', fontStyle: 'Bold', fontSize: 10, fills: solid('#888'), letterSpacing: { unit: 'PIXELS', value: 1.5 } });
  await addText(bg, { x: 220, y: 126, content: 'SIZE · WEIGHT', fontStyle: 'Bold', fontSize: 10, fills: solid('#888'), letterSpacing: { unit: 'PIXELS', value: 1.5 } });
  await addText(bg, { x: 380, y: 126, content: 'EXAMPLE', fontStyle: 'Bold', fontSize: 10, fills: solid('#888'), letterSpacing: { unit: 'PIXELS', value: 1.5 } });

  addRect(bg, { x: 48, y: 148, w: 804, h: 1, fills: solid('#E0E0E0') });

  const rows = [
    { role: 'Hero',        spec: '32px · Bold 700',    sample: 'Good morning, David',        size: 32, style: 'Bold' },
    { role: 'H1',          spec: '28px · Bold 700',    sample: 'Social housing application', size: 28, style: 'Bold' },
    { role: 'H2',          spec: '24px · Bold 700',    sample: 'Grants you could apply for', size: 24, style: 'Bold' },
    { role: 'H3',          spec: '20px · Bold 700',    sample: 'Personal details',            size: 20, style: 'Bold' },
    { role: 'Body large',  spec: '18px · Regular 400', sample: 'Complete the following sections to apply', size: 18, style: 'Regular' },
    { role: 'Body',        spec: '16px · Regular 400', sample: 'Your application has been received.',    size: 16, style: 'Regular' },
    { role: 'Body small',  spec: '14px · Regular 400', sample: 'Submitted 12 January 2026 · Ref: SH-2026-00142', size: 14, style: 'Regular' },
    { role: 'Caption',     spec: '12px · Regular 400', sample: "As it appears on your passport or driver's licence", size: 12, style: 'Regular' },
    { role: 'Overline',    spec: '10px · Regular 400', sample: 'DPENDR — LIFE EVENTS', size: 10, style: 'Regular' },
  ];

  let y = 168;
  for (const row of rows) {
    const rowH = Math.max(row.size * 2.2, 40);
    await addText(bg, { x: 48, y: y + (rowH - 14) / 2, content: row.role, fontStyle: 'Regular', fontSize: 13, fills: solid('#505A5F') });
    await addText(bg, { x: 220, y: y + (rowH - 13) / 2, content: row.spec, fontStyle: 'Regular', fontSize: 12, fills: solid('#888'), name: 'Spec' });
    const ls = row.role === 'Overline' ? { unit: 'PIXELS', value: 3 } : { unit: 'PIXELS', value: 0 };
    await addText(bg, { x: 380, y: y + (rowH - row.size) / 2, content: row.sample, fontStyle: row.style, fontSize: row.size,
      fills: solid('#0B0C0C'), lineHeight: { unit: 'PERCENT', value: 130 }, letterSpacing: ls });
    addRect(bg, { x: 48, y: y + rowH, w: 804, h: 1, fills: solid('#F0F0F0') });
    y += rowH + 1;
  }

  bg.resize(900, y + 60);

  // Weight specimen
  const weightFrame = figma.createFrame();
  weightFrame.name = 'Font Weights';
  weightFrame.x = 960;
  weightFrame.y = 0;
  weightFrame.resize(420, 320);
  weightFrame.fills = solid('#FFFFFF');
  weightFrame.cornerRadius = 12;
  weightFrame.effects = [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.06 }, offset: { x: 0, y: 4 }, radius: 16, spread: 0, visible: true, blendMode: 'NORMAL' }];
  figma.currentPage.appendChild(weightFrame);

  await addText(weightFrame, { x: 32, y: 32, content: 'Lato Weights', fontStyle: 'Bold', fontSize: 20, fills: solid('#0B0C0C') });
  const weights = [
    { label: 'Light 300',   style: 'Light',   sample: 'Supporting text, subtle labels' },
    { label: 'Regular 400', style: 'Regular', sample: 'All body copy, form labels' },
    { label: 'Bold 700',    style: 'Bold',    sample: 'All headings and CTAs' },
    { label: 'Black 900',   style: 'Black',   sample: 'Display, hero emphasis' },
  ];
  let wy = 72;
  for (const w of weights) {
    await addText(weightFrame, { x: 32, y: wy, content: w.label, fontStyle: 'Regular', fontSize: 11, fills: solid('#888') });
    await addText(weightFrame, { x: 32, y: wy + 16, content: w.sample, fontStyle: w.style, fontSize: 20, fills: solid('#0B0C0C') });
    wy += 52;
  }

  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
}

// ── PAGE: COMPONENTS ─────────────────────────────────────────

async function createComponentsPage() {
  const page = getOrCreatePage('🧩 Components');
  figma.currentPage = page;

  let pageY = 0;

  pageY = await buildButtons(pageY);
  pageY = await buildCards(pageY + 80);
  pageY = await buildFormFields(pageY + 80);
  pageY = await buildHeaders(pageY + 80);
  pageY = await buildHelpPanel(pageY + 80);
  await buildNavigation(pageY + 80);

  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
}

// ─ Section label helper ──────────────────────────────────────

async function sectionLabel(text, y) {
  await addText(figma.currentPage, { x: 0, y, content: text, fontStyle: 'Bold', fontSize: 20, fills: solid('#0B0C0C') });
  return y + 36;
}

async function componentLabel(parent, text, x, y) {
  await addText(parent, { x, y, content: text, fontStyle: 'Regular', fontSize: 11, fills: solid('#888888') });
}

// ─ Buttons ──────────────────────────────────────────────────

async function buildButtons(startY) {
  let y = await sectionLabel('Buttons', startY);
  await addText(figma.currentPage, { x: 0, y, content: 'Four variants — one primary CTA per screen. Minimum height 48px, large CTA 58px. Border radius: 4px.', fontStyle: 'Regular', fontSize: 13, fills: solid('#505A5F'), w: 1000 });
  y += 32;

  const variants = [
    { name: 'Button/Primary',      label: 'Primary',    bg: '#00875F', textColor: '#FFFFFF', w: 220, h: 58, border: null },
    { name: 'Button/Primary Dark', label: 'Primary dark','bg': '#004D44', textColor: '#FFFFFF', w: 220, h: 58, border: null },
    { name: 'Button/Secondary',    label: 'Secondary',  bg: '#FFFFFF', textColor: '#004D44', w: 220, h: 48, border: '#004D44' },
    { name: 'Button/Tertiary',     label: 'Tertiary',   bg: null,      textColor: '#004D44', w: 200, h: 48, border: null, underline: true },
  ];

  let x = 0;
  for (const v of variants) {
    const comp = figma.createComponent();
    comp.name = v.name;
    comp.x = x;
    comp.y = y;
    comp.resize(v.w, v.h);
    comp.cornerRadius = 4;
    comp.fills = v.bg ? solid(v.bg) : [];
    if (v.border) { comp.strokes = solid(v.border); comp.strokeWeight = 2; comp.strokeAlign = 'INSIDE'; }
    comp.layoutMode = 'HORIZONTAL';
    comp.primaryAxisAlignItems = 'CENTER';
    comp.counterAxisAlignItems = 'CENTER';
    comp.paddingLeft = 20;
    comp.paddingRight = 20;
    figma.currentPage.appendChild(comp);

    const btnText = await addText(comp, { content: v.label === 'Tertiary' ? 'Return to dashboard' : 'Apply now →',
      fontStyle: 'Bold', fontSize: 16, fills: solid(v.textColor) });
    if (v.underline) btnText.textDecoration = 'UNDERLINE';

    await componentLabel(figma.currentPage, v.label, x, y + v.h + 8);
    x += v.w + 24;
  }

  // Back link
  const backComp = figma.createComponent();
  backComp.name = 'Button/Back Link';
  backComp.x = x;
  backComp.y = y + 4;
  backComp.resize(120, 40);
  backComp.fills = [];
  backComp.layoutMode = 'HORIZONTAL';
  backComp.counterAxisAlignItems = 'CENTER';
  backComp.itemSpacing = 4;
  figma.currentPage.appendChild(backComp);
  const backTxt = await addText(backComp, { content: '← Home', fontStyle: 'Regular', fontSize: 16, fills: solid('#004D44') });
  backTxt.textDecoration = 'UNDERLINE';
  await componentLabel(figma.currentPage, 'Back link', x, y + 48);

  return y + 90;
}

// ─ Cards ────────────────────────────────────────────────────

async function buildCards(startY) {
  let y = await sectionLabel('Cards', startY);
  await addText(figma.currentPage, { x: 0, y, content: 'Three surface types. Shadow for elevation — no outer borders. Background: #EAF4F5 / #F0F0F0.', fontStyle: 'Regular', fontSize: 13, fills: solid('#505A5F'), w: 1000 });
  y += 32;

  // Service card
  const sc = figma.createComponent();
  sc.name = 'Card/Service';
  sc.x = 0;
  sc.y = y;
  sc.resize(320, 200);
  sc.cornerRadius = 10;
  sc.fills = solid('#EAF4F5');
  sc.effects = [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.25 }, offset: { x: 0, y: 4 }, radius: 4, spread: 0, visible: true, blendMode: 'NORMAL' }];
  sc.paddingLeft = sc.paddingRight = sc.paddingTop = sc.paddingBottom = 20;
  sc.layoutMode = 'VERTICAL';
  sc.itemSpacing = 8;
  figma.currentPage.appendChild(sc);

  // Illustration placeholder circle
  const illus = figma.createEllipse();
  illus.name = 'Illustration (decorative)';
  illus.x = 252;
  illus.y = 12;
  illus.resize(48, 48);
  illus.fills = solid('#D5EEDB');
  sc.appendChild(illus);

  await addText(sc, { content: 'CURRENT APPLICATION', fontStyle: 'Regular', fontSize: 10, fills: solid('#505A5F'), letterSpacing: { unit: 'PIXELS', value: 1.5 } });
  await addText(sc, { content: 'Social housing application', fontStyle: 'Bold', fontSize: 18, fills: solid('#004D44'), lineHeight: { unit: 'PERCENT', value: 130 } });
  await addText(sc, { content: 'Continue your application or check the status of a previous submission.', fontStyle: 'Regular', fontSize: 14, fills: solid('#505A5F'), lineHeight: { unit: 'PERCENT', value: 150 } });

  const ctaRect = figma.createRectangle();
  ctaRect.name = 'CTA';
  ctaRect.resize(140, 44);
  ctaRect.cornerRadius = 4;
  ctaRect.fills = solid('#00875F');
  sc.appendChild(ctaRect);
  await componentLabel(figma.currentPage, 'Service card', 0, y + 212);

  // Application status card
  const ac = figma.createComponent();
  ac.name = 'Card/Application Status';
  ac.x = 360;
  ac.y = y;
  ac.resize(320, 180);
  ac.cornerRadius = 10;
  ac.fills = solid('#EAF4F5');
  ac.effects = [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.25 }, offset: { x: 0, y: 4 }, radius: 4, spread: 0, visible: true, blendMode: 'NORMAL' }];
  ac.paddingLeft = ac.paddingRight = ac.paddingTop = ac.paddingBottom = 20;
  ac.layoutMode = 'VERTICAL';
  ac.itemSpacing = 8;
  figma.currentPage.appendChild(ac);

  // Status pill
  const pill = figma.createFrame();
  pill.name = 'Status pill';
  pill.resize(80, 24);
  pill.cornerRadius = 24;
  pill.fills = solid('#FFFFFF');
  ac.appendChild(pill);
  await addText(pill, { x: 12, y: 4, content: 'In review', fontStyle: 'Bold', fontSize: 12, fills: solid('#004D44') });

  await addText(ac, { content: 'Social housing application', fontStyle: 'Bold', fontSize: 18, fills: solid('#004D44') });
  await addText(ac, { content: 'Submitted 12 January 2026 · Ref: SH-2026-00142', fontStyle: 'Regular', fontSize: 13, fills: solid('#505A5F') });
  await componentLabel(figma.currentPage, 'Application status card', 360, y + 192);

  // Inner card
  const ic = figma.createComponent();
  ic.name = 'Card/Inner';
  ic.x = 720;
  ic.y = y;
  ic.resize(320, 56);
  ic.cornerRadius = 8;
  ic.fills = solid('#F0F0F0');
  ic.layoutMode = 'HORIZONTAL';
  ic.counterAxisAlignItems = 'CENTER';
  ic.paddingLeft = ic.paddingRight = 16;
  ic.itemSpacing = 12;
  figma.currentPage.appendChild(ic);
  await addText(ic, { content: '✓  Personal details — Complete', fontStyle: 'Regular', fontSize: 14, fills: solid('#0B0C0C') });
  await componentLabel(figma.currentPage, 'Inner card (step)', 720, y + 68);

  return y + 220;
}

// ─ Form Fields ──────────────────────────────────────────────

async function buildFormFields(startY) {
  let y = await sectionLabel('Form Fields', startY);
  await addText(figma.currentPage, { x: 0, y, content: 'Default, error, and radio states. Visible labels always above inputs. Min height 48px. Error uses red border + icon text.', fontStyle: 'Regular', fontSize: 13, fills: solid('#505A5F'), w: 1100 });
  y += 32;

  async function formField(name, cx, cy, state) {
    const fg = figma.createComponent();
    fg.name = `Form/${name}`;
    fg.x = cx;
    fg.y = cy;
    fg.resize(280, state === 'error' ? 108 : 80);
    fg.fills = [];
    fg.layoutMode = 'VERTICAL';
    fg.itemSpacing = 6;
    figma.currentPage.appendChild(fg);

    // Label
    await addText(fg, { content: state === 'radio' ? 'Employment status' : 'First name', fontStyle: 'Bold', fontSize: 16, fills: solid('#0B0C0C') });

    if (state === 'default' || state === 'filled') {
      // Hint
      await addText(fg, { content: "As it appears on your passport", fontStyle: 'Regular', fontSize: 13, fills: solid('#505A5F') });
      // Input box
      const input = figma.createRectangle();
      input.name = 'Input';
      input.resize(280, 48);
      input.cornerRadius = 4;
      input.fills = solid('#FFFFFF');
      input.strokes = solid('#888888');
      input.strokeWeight = 1;
      fg.appendChild(input);
      if (state === 'filled') {
        await addText(fg, { x: 14, content: 'David', fontStyle: 'Regular', fontSize: 16, fills: solid('#0B0C0C') });
      }
    }

    if (state === 'error') {
      // Error message
      await addText(fg, { content: '⚠  Enter your first name', fontStyle: 'Bold', fontSize: 13, fills: solid('#D4351C') });
      // Input with red border
      const input = figma.createRectangle();
      input.name = 'Input (error)';
      input.resize(280, 48);
      input.cornerRadius = 4;
      input.fills = solid('#FDF2F0');
      input.strokes = solid('#D4351C');
      input.strokeWeight = 2;
      fg.appendChild(input);
    }

    if (state === 'radio') {
      const options = ['Employed', 'Self-employed', 'Unemployed'];
      for (const opt of options) {
        const row = figma.createFrame();
        row.name = `Radio/${opt}`;
        row.resize(280, 48);
        row.cornerRadius = 4;
        row.fills = solid('#FFFFFF');
        row.strokes = solid('#E0E0E0');
        row.strokeWeight = 1;
        row.layoutMode = 'HORIZONTAL';
        row.counterAxisAlignItems = 'CENTER';
        row.paddingLeft = 14;
        row.itemSpacing = 12;
        fg.appendChild(row);
        const dot = figma.createEllipse();
        dot.resize(20, 20);
        dot.fills = solid('#FFFFFF');
        dot.strokes = solid('#888888');
        dot.strokeWeight = 1;
        row.appendChild(dot);
        await addText(row, { content: opt, fontStyle: 'Regular', fontSize: 16, fills: solid('#0B0C0C') });
      }
      fg.resize(280, 168);
    }

    await componentLabel(figma.currentPage, name, cx, cy + fg.height + 8);
    return fg.height;
  }

  await formField('Text Input (default)', 0,   y, 'default');
  await formField('Text Input (error)',   320,  y, 'error');
  await formField('Text Input (filled)',  640,  y, 'filled');
  await formField('Radio Group',          960,  y, 'radio');

  return y + 180;
}

// ─ Headers ──────────────────────────────────────────────────

async function buildHeaders(startY) {
  let y = await sectionLabel('Header', startY);
  await addText(figma.currentPage, { x: 0, y, content: 'Two variants. Standard: #008660 header bar. Hero: #004D44 with overlay texture, personalised greeting.', fontStyle: 'Regular', fontSize: 13, fills: solid('#505A5F'), w: 900 });
  y += 32;

  // Standard header
  const sh = figma.createComponent();
  sh.name = 'Header/Standard';
  sh.x = 0;
  sh.y = y;
  sh.resize(390, 80);
  sh.fills = solid('#008660');
  figma.currentPage.appendChild(sh);

  // Status bar
  addRect(sh, { x: 0, y: 0, w: 390, h: 24, fills: solid('#006648') });
  await addText(sh, { x: 16, y: 6, content: '9:41', fontStyle: 'Regular', fontSize: 11, fills: solid('#FFFFFF') });

  // Nav bar
  addRect(sh, { x: 0, y: 24, w: 390, h: 56, fills: solid('#008660') });
  // Harp placeholder
  addRect(sh, { x: 16, y: 34, w: 18, h: 28, fills: solid('#FFFFFF', 0.9), cornerRadius: 2 });
  await addText(sh, { x: 44, y: 38, content: 'Irish Government', fontStyle: 'Bold', fontSize: 13, fills: solid('#FFFFFF') });
  addRect(sh, { x: 340, y: 34, w: 28, h: 28, fills: solid('#FFFFFF', 0.15), cornerRadius: 14 });
  addRect(sh, { x: 374, y: 34, w: 28, h: 28, fills: solid('#FFFFFF', 0.15), cornerRadius: 14 });

  // Accent strip
  addRect(sh, { x: 0, y: 72, w: 390, h: 8, fills: solid('#004D44') });
  await componentLabel(figma.currentPage, 'Standard header (390px)', 0, y + 92);

  // Hero header
  const hh = figma.createComponent();
  hh.name = 'Header/Hero';
  hh.x = 440;
  hh.y = y;
  hh.resize(390, 180);
  hh.fills = solid('#004D44');
  hh.clipsContent = true;
  figma.currentPage.appendChild(hh);

  // Texture suggestion rectangle
  addRect(hh, { x: 0, y: 0, w: 390, h: 180, fills: solid('#028072', 0.2) });
  addRect(hh, { x: 0, y: 0, w: 390, h: 24, fills: solid('#000000', 0.2) });
  await addText(hh, { x: 16, y: 6, content: '9:41', fontStyle: 'Regular', fontSize: 11, fills: solid('#FFFFFF') });

  // Content
  await addText(hh, { x: 16, y: 36, content: 'DPENDR — LIFE EVENTS', fontStyle: 'Regular', fontSize: 10, fills: solid('#9AE1DA', 0.7), letterSpacing: { unit: 'PIXELS', value: 2 } });
  await addText(hh, { x: 16, y: 56, content: 'Good morning, David', fontStyle: 'Bold', fontSize: 28, fills: solid('#FFFFFF'), lineHeight: { unit: 'PERCENT', value: 120 } });
  await addText(hh, { x: 16, y: 102, content: 'Supports tailored for you', fontStyle: 'Regular', fontSize: 15, fills: solid('#BFE7E4') });

  // Icons
  addRect(hh, { x: 338, y: 32, w: 32, h: 32, fills: solid('#FFFFFF', 0.1), cornerRadius: 16 });
  addRect(hh, { x: 350, y: 54, w: 100, h: 1, fills: [] }); // spacer

  await componentLabel(figma.currentPage, 'Hero header (390px)', 440, y + 192);

  return y + 220;
}

// ─ Help Panel ───────────────────────────────────────────────

async function buildHelpPanel(startY) {
  let y = await sectionLabel('Help Panel', startY);
  await addText(figma.currentPage, { x: 0, y, content: 'Full-width footer panel on every screen. Background: #004D44. Dividers: rgba(255,255,255,0.2). Two or three support options max.', fontStyle: 'Regular', fontSize: 13, fills: solid('#505A5F'), w: 900 });
  y += 32;

  const hp = figma.createComponent();
  hp.name = 'Help Panel';
  hp.x = 0;
  hp.y = y;
  hp.resize(390, 176);
  hp.fills = solid('#004D44');
  figma.currentPage.appendChild(hp);

  await addText(hp, { x: 20, y: 20, content: 'Need help?', fontStyle: 'Bold', fontSize: 18, fills: solid('#FFFFFF') });

  const rows = [
    { icon: '💬', title: 'Chat with our digital assistant', sub: 'Available 24/7', y: 56 },
    { icon: '📞', title: 'Call us',                        sub: '+353 1 888 2000 · Mon–Fri 9am–5pm', y: 108 },
    { icon: '🔗', title: 'Privacy policy',                sub: '', y: 152 },
  ];

  for (const r of rows) {
    addRect(hp, { x: 0, y: r.y - 8, w: 390, h: 1, fills: solid('#FFFFFF', 0.2) });
    await addText(hp, { x: 20, y: r.y, content: r.title, fontStyle: 'Bold', fontSize: 15, fills: solid('#FFFFFF') });
    if (r.sub) await addText(hp, { x: 20, y: r.y + 20, content: r.sub, fontStyle: 'Regular', fontSize: 12, fills: solid('#BFE7E4') });
  }

  await componentLabel(figma.currentPage, 'Help panel (390px)', 0, y + 188);
  return y + 212;
}

// ─ Navigation ───────────────────────────────────────────────

async function buildNavigation(startY) {
  let y = await sectionLabel('Navigation', startY);

  // Back link component
  const bl = figma.createComponent();
  bl.name = 'Navigation/Back Link';
  bl.x = 0;
  bl.y = y;
  bl.resize(160, 44);
  bl.fills = [];
  bl.layoutMode = 'HORIZONTAL';
  bl.counterAxisAlignItems = 'CENTER';
  bl.itemSpacing = 4;
  figma.currentPage.appendChild(bl);
  const backT = await addText(bl, { content: '← Home', fontStyle: 'Regular', fontSize: 16, fills: solid('#004D44') });
  backT.textDecoration = 'UNDERLINE';
  await componentLabel(figma.currentPage, 'Back link', 0, y + 56);

  // Step indicator
  const si = figma.createComponent();
  si.name = 'Navigation/Step Indicator';
  si.x = 240;
  si.y = y;
  si.resize(200, 56);
  si.fills = [];
  si.layoutMode = 'VERTICAL';
  si.itemSpacing = 4;
  figma.currentPage.appendChild(si);
  await addText(si, { content: 'Step 2 of 5', fontStyle: 'Regular', fontSize: 13, fills: solid('#505A5F') });
  await addText(si, { content: 'Employment', fontStyle: 'Bold', fontSize: 24, fills: solid('#0B0C0C') });
  await componentLabel(figma.currentPage, 'Step indicator', 240, y + 68);

  // Section list item — complete
  const sli = figma.createComponent();
  sli.name = 'Navigation/Section Item (Complete)';
  sli.x = 520;
  sli.y = y;
  sli.resize(300, 52);
  sli.cornerRadius = 8;
  sli.fills = solid('#F0F0F0');
  sli.layoutMode = 'HORIZONTAL';
  sli.counterAxisAlignItems = 'CENTER';
  sli.paddingLeft = sli.paddingRight = 16;
  sli.itemSpacing = 12;
  figma.currentPage.appendChild(sli);
  const checkCircle = figma.createEllipse();
  checkCircle.resize(20, 20);
  checkCircle.fills = solid('#008660');
  sli.appendChild(checkCircle);
  await addText(sli, { content: 'Personal details', fontStyle: 'Regular', fontSize: 15, fills: solid('#0B0C0C') });
  const statusLbl = await addText(sli, { content: 'Complete', fontStyle: 'Bold', fontSize: 12, fills: solid('#008660') });
  await componentLabel(figma.currentPage, 'Section item (complete)', 520, y + 64);

  return y + 90;
}

// ── MAIN GENERATE ─────────────────────────────────────────────

async function generate(options) {
  progress('Loading Lato fonts...');
  await loadFonts();

  if (options.colorStyles) {
    progress('Creating colour styles (28 styles)...');
    await createColorStyles();
  }

  if (options.textStyles) {
    progress('Creating text styles (9 styles)...');
    await createTextStyles();
  }

  if (options.effectStyles) {
    progress('Creating effect styles (3 styles)...');
    createEffectStyles();
  }

  if (options.coverPage) {
    progress('Building cover page...');
    await createCoverPage();
  }

  if (options.colorPage) {
    progress('Building colour palette page...');
    await createColorPage();
  }

  if (options.typePage) {
    progress('Building typography page...');
    await createTypographyPage();
  }

  if (options.components) {
    progress('Building components (13 components)...');
    await createComponentsPage();
  }

  progress('Done!');
}
