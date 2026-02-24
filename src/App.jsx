import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import GITA_DATA from './data/gitaData'

// ─── Icons ────────────────────────────────────────────────────────────
const IconArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
)
const IconBook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
)
const IconChevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
)
const IconScripture = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
)
const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
)
const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
)
const IconExpand = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
)
const IconChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
)
const IconChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
)
const IconHome = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
)

const TYPE_META = {
  comparison: { icon: '\u2696\uFE0F', label: 'Comparison' },
  flow:       { icon: '\u2192',  label: 'Flow' },
  cycle:      { icon: '\u21BB',  label: 'Cycle' },
  radial:     { icon: '\u25CE',  label: 'Radial' },
  hierarchy:  { icon: '\u25B3',  label: 'Hierarchy' },
  grid:       { icon: '\u25A6',  label: 'Grid' },
}

const SEARCH_INDEX = GITA_DATA.flatMap(ch =>
  ch.models.map(m => ({
    model: m, chapter: ch,
    searchText: `${ch.chapter} ${ch.title} ${ch.subtitle} ${m.name} ${m.desc} ${(m.scriptures || []).map(s => s.ref + ' ' + s.text).join(' ')}`.toLowerCase()
  }))
)

// ════════════════════════════════════════════════════════════════════════
//  ZOOM MODAL
// ════════════════════════════════════════════════════════════════════════

function ZoomModal({ children, isOpen, onClose }) {
  const [scale, setScale] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const panStart = useRef({ x: 0, y: 0 })

  useEffect(() => { if (isOpen) { setScale(1); setPan({ x: 0, y: 0 }) } }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === '+' || e.key === '=') setScale(s => Math.min(s + 0.25, 4))
      if (e.key === '-') setScale(s => Math.max(s - 0.25, 0.5))
      if (e.key === '0') { setScale(1); setPan({ x: 0, y: 0 }) }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleWheel = useCallback((e) => {
    e.preventDefault()
    setScale(s => Math.max(0.5, Math.min(4, s + (e.deltaY > 0 ? -0.15 : 0.15))))
  }, [])

  const handlePointerDown = (e) => {
    setDragging(true); dragStart.current = { x: e.clientX, y: e.clientY }; panStart.current = { ...pan }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const handlePointerMove = (e) => { if (!dragging) return; setPan({ x: panStart.current.x + (e.clientX - dragStart.current.x), y: panStart.current.y + (e.clientY - dragStart.current.y) }) }
  const handlePointerUp = () => setDragging(false)

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-surface-800/90 border-b border-surface-400/50">
        <div className="flex items-center gap-2">
          <button onClick={() => setScale(s => Math.max(0.5, s - 0.25))} className="px-3 py-1.5 rounded-lg bg-surface-600 text-parchment-200 hover:bg-surface-500 text-sm font-medium transition-colors">{'\u2212'}</button>
          <span className="text-sm text-parchment-300 font-mono w-14 text-center">{Math.round(scale * 100)}%</span>
          <button onClick={() => setScale(s => Math.min(4, s + 0.25))} className="px-3 py-1.5 rounded-lg bg-surface-600 text-parchment-200 hover:bg-surface-500 text-sm font-medium transition-colors">+</button>
          <button onClick={() => { setScale(1); setPan({ x: 0, y: 0 }) }} className="px-3 py-1.5 rounded-lg bg-surface-600 text-parchment-200 hover:bg-surface-500 text-sm font-medium transition-colors ml-1">Reset</button>
        </div>
        <button onClick={onClose} className="p-2 text-parchment-300 hover:text-saffron-400 transition-colors"><IconClose /></button>
      </div>
      <div className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing" onWheel={handleWheel} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp}>
        <div className="w-full h-full flex items-center justify-center" style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`, transformOrigin: 'center center', transition: dragging ? 'none' : 'transform 0.15s ease-out' }}>
          <div className="max-w-3xl w-full p-8">{children}</div>
        </div>
      </div>
      <div className="text-center py-2 text-xs text-parchment-600">Scroll to zoom &middot; Drag to pan &middot; Press 0 to reset &middot; Esc to close</div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════
//  VISUAL TEMPLATES  (readability: min font 9.5px, min opacity 0.7)
// ════════════════════════════════════════════════════════════════════════

function ComparisonTemplate({ data }) {
  const left = data.left, right = data.right
  const maxItems = Math.max(left.items.length, right.items.length)
  const size = { w: 500, h: Math.max(300, maxItems * 48 + 110) }
  const midX = size.w / 2, topY = 65, itemH = 42
  const truncate = (s, max) => s.length > max ? s.substring(0, max - 1) + '\u2026' : s

  return (
    <div className="flex flex-col items-center gap-4"><div className="w-full max-w-xl mx-auto">
      <svg viewBox={`0 0 ${size.w} ${size.h}`} className="w-full h-auto">
        <defs>
          <linearGradient id="clg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="rgba(140,170,200,0.1)"/><stop offset="100%" stopColor="rgba(140,170,200,0.03)"/></linearGradient>
          <linearGradient id="crg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="rgba(240,130,30,0.03)"/><stop offset="100%" stopColor="rgba(240,130,30,0.1)"/></linearGradient>
          <filter id="cg"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect x="5" y="5" width={midX-10} height={size.h-10} rx="12" fill="url(#clg)" stroke="rgba(140,170,200,0.12)" strokeWidth="1"/>
        <rect x={midX+5} y="5" width={midX-10} height={size.h-10} rx="12" fill="url(#crg)" stroke="rgba(240,130,30,0.12)" strokeWidth="1"/>
        <line x1={midX} y1="20" x2={midX} y2={size.h-20} stroke="rgba(240,130,30,0.15)" strokeWidth="1" strokeDasharray="4 6"/>
        <circle cx={midX} cy={topY-22} r="18" fill="rgba(25,20,15,0.95)" stroke="rgba(240,130,30,0.5)" strokeWidth="1.5" filter="url(#cg)"/>
        <text x={midX} y={topY-21} textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="700" fill="rgba(245,190,110,1)" className="svg-label">VS</text>
        <text x={midX/2} y={topY-14} textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="700" fill="rgba(210,225,240,0.95)" className="svg-label">{truncate(left.label, 22)}</text>
        <line x1={midX/2-55} y1={topY-2} x2={midX/2+55} y2={topY-2} stroke="rgba(140,170,200,0.3)" strokeWidth="1"/>
        <text x={midX+midX/2} y={topY-14} textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="700" fill="rgba(250,200,120,1)" className="svg-label">{truncate(right.label, 22)}</text>
        <line x1={midX+midX/2-55} y1={topY-2} x2={midX+midX/2+55} y2={topY-2} stroke="rgba(240,130,30,0.3)" strokeWidth="1"/>
        {left.items.map((item, i) => { const y = topY+18+i*itemH; const c = item.replace(/\s*\([^)]*\)\s*$/g,'').trim(); return (
          <g key={`l-${i}`} className="hierarchy-level" style={{animationDelay:`${0.15+i*0.1}s`}}>
            <rect x="16" y={y-5} width={midX-32} height="28" rx="6" fill="rgba(140,170,200,0.06)" stroke="rgba(140,170,200,0.1)" strokeWidth="0.6"/>
            <circle cx="28" cy={y+9} r="5" fill="rgba(140,170,200,0.3)" stroke="rgba(140,170,200,0.45)" strokeWidth="1"/>
            <text x="28" y={y+10} textAnchor="middle" dominantBaseline="middle" fontSize="8" fontWeight="700" fill="rgba(210,225,240,0.9)">{i+1}</text>
            <text x="42" y={y+10} dominantBaseline="middle" fontSize="11" fill="rgba(220,230,240,0.92)" fontWeight="500">{truncate(c,25)}</text>
          </g>)})}
        {right.items.map((item, i) => { const y = topY+18+i*itemH; const c = item.replace(/\s*\([^)]*\)\s*$/g,'').trim(); return (
          <g key={`r-${i}`} className="hierarchy-level" style={{animationDelay:`${0.2+i*0.1}s`}}>
            <rect x={midX+16} y={y-5} width={midX-32} height="28" rx="6" fill="rgba(240,130,30,0.06)" stroke="rgba(240,130,30,0.1)" strokeWidth="0.6"/>
            <circle cx={midX+28} cy={y+9} r="5" fill="rgba(240,130,30,0.3)" stroke="rgba(240,130,30,0.5)" strokeWidth="1"/>
            <text x={midX+28} y={y+10} textAnchor="middle" dominantBaseline="middle" fontSize="8" fontWeight="700" fill="rgba(250,210,150,0.95)">{i+1}</text>
            <text x={midX+42} y={y+10} dominantBaseline="middle" fontSize="11" fill="rgba(250,220,175,0.95)" fontWeight="500">{truncate(c,25)}</text>
          </g>)})}
      </svg>
    </div></div>
  )
}

function FlowTemplate({ data }) {
  return (
    <div className="max-w-2xl mx-auto relative">
      <div className="absolute left-[19px] md:left-[23px] top-6 bottom-6 w-px">
        <svg width="3" height="100%" className="overflow-visible">
          <line x1="1.5" y1="0" x2="1.5" y2="100%" stroke="rgba(240,130,30,0.15)" strokeWidth="2"/>
          <line x1="1.5" y1="0" x2="1.5" y2="100%" stroke="rgba(240,130,30,0.25)" strokeWidth="1.5" strokeDasharray="4 8" className="cycle-flow-dash"/>
        </svg>
      </div>
      <div className="space-y-3 relative">
        {data.steps.map((step, i) => {
          const isA = step.accent
          return (
            <div key={i} className="slide-up" style={{animationDelay:`${i*0.1}s`}}>
              <div className={`relative rounded-xl p-5 md:p-6 border ml-10 md:ml-12 ${isA ? 'template-accent' : 'template-normal'}`}>
                <div className={`absolute -left-[29px] md:-left-[31px] top-6 w-5 h-5 rounded-full border-2 ${isA ? 'bg-saffron-600/30 border-saffron-500 shadow-[0_0_12px_rgba(240,130,30,0.35)]' : 'bg-surface-700 border-saffron-600/35'}`}>
                  {isA && <div className="absolute inset-1 rounded-full bg-saffron-500/50 animate-ping" style={{animationDuration:'3s'}}/>}
                </div>
                {i > 0 && <svg className="absolute -left-[22px] md:-left-[23px] -top-2 text-saffron-600/35" width="6" height="10" viewBox="0 0 6 10"><path d="M3 0 L3 7 M1 5 L3 9 L5 5" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/></svg>}
                <div className="flex items-start gap-3">
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${isA ? 'bg-saffron-600/25 text-saffron-300' : 'bg-surface-400/80 text-parchment-300'}`}>{i+1}</div>
                  <div className="min-w-0 pt-0.5">
                    <h4 className={`font-display text-lg md:text-xl font-semibold leading-snug ${isA ? 'text-saffron-300' : 'text-parchment-100'}`}>{step.label}</h4>
                    {step.desc && <p className={`text-base md:text-lg mt-1.5 leading-relaxed ${isA ? 'text-saffron-200/85' : 'text-parchment-400'}`}>{step.desc}</p>}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CycleTemplate({ data }) {
  const n = data.steps.length, size = 460, cx = size/2, cy = size/2, R = 175, nodeR = 42
  const nodes = data.steps.map((label, i) => { const a = (2*Math.PI*i/n)-Math.PI/2; return { x: cx+R*Math.cos(a), y: cy+R*Math.sin(a), label, angle: a } })
  const arcs = nodes.map((nd, i) => {
    const nx = nodes[(i+1)%n]; const a1 = nd.angle; const a2 = ((i+1)%n===0) ? a1+(2*Math.PI/n) : nx.angle
    const midA = (a1+a2)/2; const b = R+22; const cpx = cx+b*Math.cos(midA); const cpy = cy+b*Math.sin(midA)
    const o = 46; const sx = nd.x+o*Math.cos(a1+0.22); const sy = nd.y+o*Math.sin(a1+0.22)
    const ex = nx.x+o*Math.cos(a2-0.22); const ey = nx.y+o*Math.sin(a2-0.22)
    return `M${sx},${sy} Q${cpx},${cpy} ${ex},${ey}`
  })
  const arrows = nodes.map((_,i) => {
    const a1 = nodes[i].angle; const a2 = i+1<n ? nodes[i+1].angle : nodes[0].angle+(i+1===n ? 2*Math.PI/n*n : 0)
    const midA = (a1+a2)/2 + (i===n-1 ? Math.PI*2/n/2 : 0); const aR = R+10
    return { x: cx+aR*Math.cos(midA), y: cy+aR*Math.sin(midA), rot: (midA*180/Math.PI)+90 }
  })
  const circum = 2*Math.PI*R
  const cLabel = data.center.split(/[\u2014\u2013(]/)[0].trim()
  const trunc = (s,m) => s.length > m ? s.substring(0,m-1)+'\u2026' : s

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full max-w-lg mx-auto" style={{aspectRatio:'1'}}>
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full cycle-wheel">
          <defs>
            <radialGradient id="cGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(240,130,30,0.25)"/><stop offset="100%" stopColor="rgba(240,130,30,0)"/></radialGradient>
            <filter id="sGlow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <linearGradient id="aGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={size} y2={size}><stop offset="0%" stopColor="rgba(240,130,30,0.5)"/><stop offset="50%" stopColor="rgba(220,140,60,0.35)"/><stop offset="100%" stopColor="rgba(240,130,30,0.5)"/></linearGradient>
          </defs>
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(240,130,30,0.1)" strokeWidth="1"/>
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(240,130,30,0.2)" strokeWidth="1.5" strokeDasharray={`${circum*0.02} ${circum*0.04}`} className="cycle-orbit"/>
          <circle cx={cx} cy={cy} r="68" fill="url(#cGlow)" className="cycle-center-glow"/>
          {arcs.map((d,i) => <g key={`a${i}`}><path d={d} fill="none" stroke="rgba(240,130,30,0.12)" strokeWidth="2"/><path d={d} fill="none" stroke="url(#aGrad)" strokeWidth="1.5" strokeDasharray="6 8" className="cycle-flow-dash" style={{animationDelay:`${i*0.3}s`}}/></g>)}
          {arrows.map((a,i) => <g key={`ar${i}`} transform={`translate(${a.x},${a.y}) rotate(${a.rot})`} className="cycle-arrow" style={{animationDelay:`${0.5+i*0.15}s`}}><polygon points="0,-6 5,4 -5,4" fill="rgba(240,130,30,0.6)"/></g>)}
          <circle cx={cx} cy={cy} r="56" fill="rgba(25,20,15,0.92)" stroke="rgba(240,130,30,0.4)" strokeWidth="1.5" filter="url(#sGlow)"/>
          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="rgba(250,195,110,1)" className="svg-label">
            {cLabel.length > 24
              ? cLabel.split(' ').reduce((ls,w) => { const l = ls[ls.length-1]; if (l.length+w.length<14) ls[ls.length-1] = l+(l?' ':'')+w; else if (ls.length<3) ls.push(w); return ls }, ['']).map((line,li,arr) =>
                  <tspan key={li} x={cx} dy={li===0 ? `${-(arr.length-1)*0.55}em` : '1.15em'} fontSize="12.5" fontWeight="600">{line}</tspan>)
              : <tspan fontSize="13" fontWeight="600">{cLabel}</tspan>}
          </text>
          {nodes.map((nd,i) => (
            <g key={`n${i}`} className="cycle-node" style={{animationDelay:`${0.2+i*0.12}s`}}>
              <circle cx={nd.x} cy={nd.y} r={nodeR} fill="rgba(30,24,18,0.93)" stroke="rgba(240,130,30,0.4)" strokeWidth="1.5"/>
              <circle cx={nd.x} cy={nd.y-16} r="11" fill="rgba(240,130,30,0.22)" stroke="rgba(240,130,30,0.45)" strokeWidth="1"/>
              <text x={nd.x} y={nd.y-15} textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="700" fill="rgba(250,200,120,1)">{i+1}</text>
              <text x={nd.x} y={nd.y+5} textAnchor="middle" dominantBaseline="middle" fontSize="10.5" fill="rgba(240,230,210,0.95)" fontWeight="600">{trunc(nd.label.split('\u2014')[0].trim(),14)}</text>
              {nd.label.includes('\u2014') && <text x={nd.x} y={nd.y+19} textAnchor="middle" dominantBaseline="middle" fontSize="9.5" fill="rgba(240,230,210,0.7)" fontWeight="500">{trunc(nd.label.split('\u2014')[1].trim(),16)}</text>}
            </g>
          ))}
        </svg>
      </div>
      <div className="w-full max-w-2xl space-y-2">
        {data.steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3 slide-up px-1" style={{animationDelay:`${0.4+i*0.08}s`}}>
            <div className="shrink-0 w-7 h-7 rounded-full bg-saffron-600/20 text-saffron-300 flex items-center justify-center text-xs font-bold border border-saffron-600/25 mt-0.5">{i+1}</div>
            <span className="text-base md:text-lg leading-relaxed text-parchment-300">{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RadialTemplate({ data }) {
  const n = data.items.length, size = 460, cx = size/2, cy = size/2
  const R = n<=4?135:n<=6?150:160, pR = n<=4?40:n<=6?36:32
  const petals = data.items.map((item,i) => { const a = (2*Math.PI*i/n)-Math.PI/2; return { x:cx+R*Math.cos(a), y:cy+R*Math.sin(a), angle:a, label:item.replace(/\s*\([^)]*\)\s*$/g,'').trim() } })
  const shortL = (text,max) => { const c = text.replace(/\s*\([^)]*\)\s*$/g,'').trim(); if (c.length<=max) return [c]; const w = c.split(' '); const ls = ['']; w.forEach(wd => { const l = ls[ls.length-1]; if (l.length+wd.length+1<=max) ls[ls.length-1]=l+(l?' ':'')+wd; else if (ls.length<2) ls.push(wd) }); return ls.map(l => l.length>max ? l.substring(0,max-1)+'\u2026' : l) }
  const cLabel = data.center.split(/[\u2014\u2013(]/)[0].trim()

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full max-w-lg mx-auto" style={{aspectRatio:'1'}}>
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
          <defs>
            <radialGradient id="rCG" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(240,130,30,0.22)"/><stop offset="100%" stopColor="rgba(240,130,30,0)"/></radialGradient>
            <filter id="rSG"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <circle cx={cx} cy={cy} r={R+pR+14} fill="none" stroke="rgba(240,130,30,0.08)" strokeWidth="0.8" strokeDasharray="3 6" className="radial-ring"/>
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(240,130,30,0.12)" strokeWidth="1" className="radial-ring" style={{animationDelay:'0.3s'}}/>
          <circle cx={cx} cy={cy} r="58" fill="url(#rCG)" className="cycle-center-glow"/>
          {petals.map((p,i) => <line key={`ln${i}`} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(240,130,30,0.15)" strokeWidth="1" strokeDasharray="4 4" className="radial-connector" style={{animationDelay:`${0.3+i*0.08}s`}}/>)}
          <circle cx={cx} cy={cy} r="48" fill="rgba(25,20,15,0.93)" stroke="rgba(240,130,30,0.4)" strokeWidth="1.5" filter="url(#rSG)"/>
          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="rgba(250,195,110,1)" className="svg-label">
            {cLabel.length <= 12 ? <tspan fontSize="13" fontWeight="600">{cLabel}</tspan>
              : (() => { const w = cLabel.split(' '); const m = Math.ceil(w.length/2); return <><tspan x={cx} dy="-0.5em" fontSize="12" fontWeight="600">{w.slice(0,m).join(' ')}</tspan><tspan x={cx} dy="1.2em" fontSize="12" fontWeight="600">{w.slice(m).join(' ')}</tspan></> })()}
          </text>
          {petals.map((p,i) => { const lines = shortL(p.label, n<=5?14:12); return (
            <g key={`p${i}`} className="radial-petal" style={{animationDelay:`${0.4+i*0.1}s`}}>
              <circle cx={p.x} cy={p.y} r={pR} fill="rgba(30,24,18,0.92)" stroke="rgba(240,130,30,0.35)" strokeWidth="1.2"/>
              <circle cx={p.x+pR*0.6} cy={p.y-pR*0.6} r="9" fill="rgba(240,130,30,0.2)" stroke="rgba(240,130,30,0.4)" strokeWidth="0.8"/>
              <text x={p.x+pR*0.6} y={p.y-pR*0.6} textAnchor="middle" dominantBaseline="middle" fontSize="9.5" fontWeight="700" fill="rgba(250,200,120,0.95)">{i+1}</text>
              {lines.map((line,li) => <text key={li} x={p.x} y={p.y+(li-(lines.length-1)/2)*12} textAnchor="middle" dominantBaseline="middle" fontSize={n<=5?"10.5":"9.5"} fill="rgba(240,230,210,0.92)" fontWeight="500">{line}</text>)}
            </g>)})}
        </svg>
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-2">
        {data.items.map((item,i) => (
          <div key={i} className="flex items-start gap-3 slide-up px-1" style={{animationDelay:`${0.4+i*0.06}s`}}>
            <div className="shrink-0 w-6 h-6 rounded-full bg-saffron-600/20 text-saffron-300 flex items-center justify-center text-xs font-bold border border-saffron-600/25 mt-0.5">{i+1}</div>
            <span className="text-sm md:text-base leading-relaxed text-parchment-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function HierarchyTemplate({ data }) {
  const layers = data.layers, n = layers.length
  const size = { w: 480, h: Math.max(300, n*76+40) }
  const cx = size.w/2, topY = 30, layerH = (size.h-60)/n, minW = 120, maxW = size.w-40
  const rects = layers.map((layer,i) => { const p = i/Math.max(n-1,1); const w = minW+(maxW-minW)*p; return { ...layer, x: cx-w/2, y: topY+i*layerH, w, h: layerH-8, i } })

  return (
    <div className="flex flex-col items-center gap-5"><div className="w-full max-w-xl mx-auto">
      <svg viewBox={`0 0 ${size.w} ${size.h}`} className="w-full h-auto">
        <defs>
          <linearGradient id="pA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(240,130,30,0.28)"/><stop offset="100%" stopColor="rgba(240,130,30,0.1)"/></linearGradient>
          <linearGradient id="pN" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(65,55,42,0.75)"/><stop offset="100%" stopColor="rgba(42,36,28,0.9)"/></linearGradient>
          <filter id="pG"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <line x1={cx} y1={topY-5} x2={20} y2={size.h-15} stroke="rgba(240,130,30,0.07)" strokeWidth="0.8"/>
        <line x1={cx} y1={topY-5} x2={size.w-20} y2={size.h-15} stroke="rgba(240,130,30,0.07)" strokeWidth="0.8"/>
        {rects.map((r,i) => { const isA = r.accent; return (
          <g key={`l${i}`} className="hierarchy-level" style={{animationDelay:`${0.1+i*0.15}s`}}>
            {isA && <rect x={r.x-3} y={r.y-3} width={r.w+6} height={r.h+6} rx="12" fill="none" stroke="rgba(240,130,30,0.2)" strokeWidth="1" filter="url(#pG)"/>}
            <rect x={r.x} y={r.y} width={r.w} height={r.h} rx="10" fill={isA?'url(#pA)':'url(#pN)'} stroke={isA?'rgba(240,130,30,0.5)':'rgba(240,130,30,0.15)'} strokeWidth={isA?1.5:1}/>
            <circle cx={r.x+24} cy={r.y+r.h/2} r="13" fill={isA?'rgba(240,130,30,0.22)':'rgba(240,130,30,0.1)'} stroke={isA?'rgba(240,130,30,0.45)':'rgba(240,130,30,0.2)'} strokeWidth="1"/>
            <text x={r.x+24} y={r.y+r.h/2} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="700" fill={isA?'rgba(250,200,120,1)':'rgba(250,200,120,0.7)'}>{i+1}</text>
            <text x={r.x+48} y={r.y+r.h/2-(r.desc?7:0)} dominantBaseline="middle" fontSize="13.5" fontWeight="600" fill={isA?'rgba(250,200,120,1)':'rgba(240,230,210,0.9)'} className="svg-label">{r.label.length>32?r.label.substring(0,30)+'\u2026':r.label}</text>
            {r.desc && <text x={r.x+48} y={r.y+r.h/2+11} dominantBaseline="middle" fontSize="10.5" fill={isA?'rgba(250,200,120,0.7)':'rgba(240,230,210,0.55)'}>{r.desc.length>42?r.desc.substring(0,40)+'\u2026':r.desc}</text>}
            {i<n-1 && <g transform={`translate(${cx},${r.y+r.h+3})`}><polygon points="0,0 5,0 2.5,6" fill="rgba(240,130,30,0.35)"/></g>}
          </g>)})}
      </svg>
    </div></div>
  )
}

function GridTemplate({ data }) {
  const n = data.items.length
  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      {data.title && <h4 className="font-display text-xl md:text-2xl font-semibold text-parchment-100 text-center scale-in">{data.title}</h4>}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${n>=6?'lg:grid-cols-3':''} gap-3`}>
        {data.items.map((item,i) => (
          <div key={i} className="group slide-up rounded-xl border border-surface-400/60 bg-surface-700/70 hover:border-saffron-600/30 hover:bg-surface-600/60 transition-all duration-300 p-5 relative overflow-hidden" style={{animationDelay:`${0.08+i*0.06}s`}}>
            <svg className="absolute top-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 40 40"><polygon points="40,0 40,40 0,0" fill="rgba(240,130,30,0.1)"/></svg>
            <div className="flex items-start gap-3 relative">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-saffron-600/15 text-saffron-400 flex items-center justify-center text-xs font-bold border border-saffron-600/20 mt-0.5 group-hover:bg-saffron-600/25 group-hover:text-saffron-300 transition-colors duration-300">{i+1}</div>
              <span className="text-base md:text-lg leading-relaxed text-parchment-300 group-hover:text-parchment-100 transition-colors duration-300">{item}</span>
            </div>
          </div>
        ))}
      </div>
      {data.highlight && <div className="template-accent rounded-xl p-5 md:p-6 text-center scale-in mt-3" style={{animationDelay:'0.4s'}}><span className="text-base md:text-lg leading-relaxed text-saffron-200 italic">{data.highlight}</span></div>}
    </div>
  )
}

function VisualTemplate({ type, data }) {
  switch (type) {
    case 'comparison': return <ComparisonTemplate data={data} />
    case 'flow':       return <FlowTemplate data={data} />
    case 'cycle':      return <CycleTemplate data={data} />
    case 'radial':     return <RadialTemplate data={data} />
    case 'hierarchy':  return <HierarchyTemplate data={data} />
    case 'grid':       return <GridTemplate data={data} />
    default:           return <div className="text-parchment-400 text-lg italic">Template not available.</div>
  }
}

// ════════════════════════════════════════════════════════════════════════
//  SCRIPTURE SIDEBAR
// ════════════════════════════════════════════════════════════════════════

function ScriptureSidebar({ scriptures, isOpen, onClose }) {
  if (!scriptures?.length) return null
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={onClose}/>}
      <aside className={`scripture-panel overflow-y-auto fixed md:relative top-0 right-0 h-full z-50 w-[85vw] max-w-[400px] md:w-[360px] lg:w-[400px] transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        <div className="p-6 md:p-7">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5 text-saffron-400"><IconScripture /><span className="font-display text-sm font-semibold tracking-wider uppercase">Scripture</span></div>
            <button onClick={onClose} className="md:hidden p-1 text-parchment-300 hover:text-saffron-400 transition-colors"><IconClose /></button>
          </div>
          <div className="space-y-5">
            {scriptures.map((v,i) => (
              <div key={i} className="verse-card slide-in-left" style={{animationDelay:`${i*0.08}s`}}>
                <span className="inline-block text-sm font-bold text-saffron-400 bg-saffron-600/15 px-2.5 py-0.5 rounded mb-2">{v.ref}</span>
                {v.sanskrit && <p className="font-sanskrit text-base md:text-lg text-saffron-300/65 leading-relaxed mb-2 italic">{v.sanskrit}</p>}
                <p className="text-base md:text-lg text-parchment-300 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

// ════════════════════════════════════════════════════════════════════════
//  SEARCH OVERLAY
// ════════════════════════════════════════════════════════════════════════

function SearchOverlay({ isOpen, onClose, onSelectResult }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  useEffect(() => { if (isOpen) { setQuery(''); setTimeout(() => inputRef.current?.focus(), 100) } }, [isOpen])
  const results = useMemo(() => {
    if (query.length < 2) return []
    const q = query.toLowerCase()
    return SEARCH_INDEX.filter(item => item.searchText.includes(q)).slice(0, 15)
  }, [query])

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="w-full max-w-2xl bg-surface-800 border border-surface-400 rounded-2xl shadow-2xl overflow-hidden scale-in">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-surface-400">
          <IconSearch />
          <input ref={inputRef} type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search models, verses, concepts..." className="flex-1 bg-transparent text-parchment-100 text-lg placeholder:text-parchment-700 outline-none"/>
          <button onClick={onClose} className="text-parchment-500 hover:text-saffron-400 transition-colors text-sm font-medium px-2">ESC</button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {query.length < 2 && <div className="px-5 py-8 text-center text-parchment-500 text-sm">Type at least 2 characters to search across all 90 models</div>}
          {query.length >= 2 && results.length === 0 && <div className="px-5 py-8 text-center text-parchment-500 text-sm">No results for &ldquo;{query}&rdquo;</div>}
          {results.map((r) => (
            <button key={r.model.id} onClick={() => { onSelectResult(r.chapter, r.model); onClose() }}
              className="w-full text-left px-5 py-4 hover:bg-surface-600/60 border-b border-surface-400/30 transition-colors flex items-start gap-4 group">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-saffron-600/15 text-saffron-400 flex items-center justify-center text-sm font-bold border border-saffron-600/20 mt-0.5">{r.chapter.chapter}</div>
              <div className="min-w-0">
                <span className="text-xs text-parchment-600 bg-surface-500 px-2 py-0.5 rounded-full border border-surface-400">{TYPE_META[r.model.type]?.icon} {TYPE_META[r.model.type]?.label}</span>
                <h4 className="text-base font-semibold text-parchment-200 group-hover:text-saffron-300 transition-colors leading-snug mt-1 truncate">{r.model.name}</h4>
                <p className="text-sm text-parchment-500 mt-0.5 line-clamp-1">{r.model.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════
//  BREADCRUMBS
// ════════════════════════════════════════════════════════════════════════

function Breadcrumbs({ view, chapter, model, onGoHome, onGoChapter }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm px-5 md:px-8 lg:px-12 py-2.5 bg-surface-800/50 border-b border-surface-400/30 overflow-x-auto scrollbar-hide">
      <button onClick={onGoHome} className="flex items-center gap-1.5 text-parchment-500 hover:text-saffron-400 transition-colors shrink-0"><IconHome /><span>Home</span></button>
      {(view === 'chapter' || view === 'model') && chapter && (<>
        <span className="text-parchment-800">/</span>
        <button onClick={onGoChapter} className={`shrink-0 transition-colors ${view === 'model' ? 'text-parchment-500 hover:text-saffron-400' : 'text-saffron-400 font-medium'}`}>Ch.{chapter.chapter} &middot; {chapter.title}</button>
      </>)}
      {view === 'model' && model && (<>
        <span className="text-parchment-800">/</span>
        <span className="text-saffron-400 font-medium truncate max-w-[200px]">{model.name}</span>
      </>)}
    </nav>
  )
}

// ════════════════════════════════════════════════════════════════════════
//  MODEL DETAIL (with Zoom + Prev/Next)
// ════════════════════════════════════════════════════════════════════════

function ModelDetail({ model, chapter, onBack, onNavigateModel }) {
  const [scriptureOpen, setScriptureOpen] = useState(false)
  const [zoomOpen, setZoomOpen] = useState(false)
  const mi = chapter.models.findIndex(m => m.id === model.id)
  const prev = mi > 0 ? chapter.models[mi-1] : null
  const next = mi < chapter.models.length-1 ? chapter.models[mi+1] : null

  return (
    <div className="flex h-[calc(100vh-104px)]">
      <div className="flex-1 overflow-y-auto p-5 md:p-8 lg:p-12">
        <div className="max-w-3xl mx-auto">
          <button onClick={onBack} className="flex items-center gap-2 text-sm text-parchment-400 hover:text-saffron-400 transition-colors mb-6 group slide-in-left">
            <IconArrowLeft /><span className="group-hover:underline">Back to Chapter {chapter.chapter}</span>
          </button>

          <div className="mb-8 slide-up">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm text-parchment-400 bg-surface-500 px-3 py-1 rounded-full border border-surface-400">{TYPE_META[model.type]?.icon} {TYPE_META[model.type]?.label}</span>
              <span className="text-sm text-parchment-600">{mi+1} of {chapter.models.length}</span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-parchment-50 mb-4 leading-tight">{model.name}</h1>
            <p className="text-base md:text-lg text-parchment-400 leading-relaxed max-w-2xl">{model.desc}</p>
            <div className="glow-line mt-6"/>
          </div>

          <div className="slide-up relative group/viz" style={{animationDelay:'0.15s'}}>
            <button onClick={() => setZoomOpen(true)} className="absolute top-3 right-3 z-10 p-2.5 rounded-lg bg-surface-700/80 border border-surface-400/50 text-parchment-400 hover:text-saffron-400 hover:border-saffron-600/30 transition-all opacity-0 group-hover/viz:opacity-100 backdrop-blur-sm" title="Expand & zoom"><IconExpand /></button>
            <VisualTemplate type={model.type} data={model.data} />
          </div>

          <div className="flex items-center justify-between mt-10 pt-6 border-t border-surface-400/30">
            {prev ? (
              <button onClick={() => onNavigateModel(prev)} className="flex items-center gap-2 text-sm text-parchment-400 hover:text-saffron-400 transition-colors group max-w-[45%]">
                <IconChevronLeft />
                <div className="text-left"><div className="text-xs text-parchment-600 group-hover:text-parchment-400">Previous</div><div className="font-medium truncate">{prev.name}</div></div>
              </button>
            ) : <div/>}
            {next ? (
              <button onClick={() => onNavigateModel(next)} className="flex items-center gap-2 text-sm text-parchment-400 hover:text-saffron-400 transition-colors group max-w-[45%] text-right">
                <div><div className="text-xs text-parchment-600 group-hover:text-parchment-400">Next</div><div className="font-medium truncate">{next.name}</div></div>
                <IconChevronRight />
              </button>
            ) : <div/>}
          </div>

          <div className="h-24 md:hidden"/>
          <button onClick={() => setScriptureOpen(true)} className="md:hidden fixed bottom-6 right-6 z-30 bg-saffron-600 text-white rounded-full p-4 shadow-lg shadow-saffron-600/30 hover:bg-saffron-500 transition-all active:scale-95" aria-label="Show scripture"><IconScripture /></button>
        </div>
      </div>
      <ScriptureSidebar scriptures={model.scriptures} isOpen={scriptureOpen} onClose={() => setScriptureOpen(false)}/>
      <ZoomModal isOpen={zoomOpen} onClose={() => setZoomOpen(false)}><VisualTemplate type={model.type} data={model.data}/></ZoomModal>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════
//  CHAPTER VIEW
// ════════════════════════════════════════════════════════════════════════

function ChapterView({ chapter, onSelectModel }) {
  return (
    <div className="p-5 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <div className="mb-10 slide-up">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-5xl md:text-6xl font-display font-bold text-saffron-600/25">{chapter.chapter}</span>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-parchment-50">{chapter.title}</h2>
            <p className="text-base text-parchment-400 mt-0.5">{chapter.subtitle}</p>
          </div>
        </div>
        <div className="glow-line mt-5"/>
        <p className="text-sm text-parchment-400 mt-3">{chapter.models.length} visual models</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapter.models.map((model,i) => (
          <button key={model.id} onClick={() => onSelectModel(model)} className="card-surface p-6 text-left group cursor-pointer slide-up" style={{animationDelay:`${i*0.06}s`}}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-parchment-400 bg-surface-500 px-2.5 py-0.5 rounded-full border border-surface-400">{TYPE_META[model.type]?.icon} {TYPE_META[model.type]?.label}</span>
              <span className="text-parchment-600 group-hover:text-saffron-500 transition-colors"><IconChevron /></span>
            </div>
            <h3 className="font-display text-base md:text-lg font-semibold text-parchment-200 group-hover:text-saffron-300 transition-colors mb-2 leading-snug">{model.name}</h3>
            <p className="text-sm text-parchment-500 leading-relaxed line-clamp-2">{model.desc}</p>
            <div className="flex items-center gap-1.5 mt-4 text-xs text-parchment-500"><IconBook /><span>{model.scriptures?.length || 0} verses</span></div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════
//  HOME VIEW
// ════════════════════════════════════════════════════════════════════════

function HomeView({ onSelectChapter }) {
  const totalModels = GITA_DATA.reduce((sum, ch) => sum + ch.models.length, 0)
  return (
    <div className="p-5 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <div className="text-center py-10 md:py-20 slide-up">
        <div className="text-5xl md:text-6xl mb-5 opacity-30 font-sanskrit">{'\u0950'}</div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-parchment-50 mb-4 tracking-tight">Gita Visual Guide</h1>
        <p className="font-display text-lg md:text-xl text-saffron-400/90 italic mb-3">See the Wisdom</p>
        <p className="text-base md:text-lg text-parchment-400 max-w-xl mx-auto leading-relaxed">{GITA_DATA.length} chapters &middot; {totalModels} visual models &middot; Ancient wisdom, modern clarity</p>
        <div className="glow-line mt-10 max-w-xs mx-auto"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {GITA_DATA.map((ch,i) => (
          <button key={ch.chapter} onClick={() => onSelectChapter(ch)} className="card-surface p-6 text-left group cursor-pointer slide-up" style={{animationDelay:`${i*0.05}s`}}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <span className="text-3xl md:text-4xl font-display font-bold text-saffron-600/25 group-hover:text-saffron-600/45 transition-colors">{ch.chapter}</span>
                <div>
                  <h3 className="font-display text-base md:text-lg font-semibold text-parchment-200 group-hover:text-saffron-300 transition-colors leading-snug">{ch.title}</h3>
                  <p className="text-sm text-parchment-500 mt-0.5">{ch.subtitle}</p>
                </div>
              </div>
              <span className="text-parchment-600 group-hover:text-saffron-500 transition-colors mt-1"><IconChevron /></span>
            </div>
            <div className="flex items-center gap-1.5 mt-4 text-xs text-parchment-500"><IconBook /><span>{ch.models.length} models</span></div>
          </button>
        ))}
      </div>
      <div className="text-center mt-20 pb-8">
        <div className="glow-line max-w-xs mx-auto mb-6"/>
        <p className="text-sm text-parchment-600">Built with devotion &middot; Based on Srimad Bhagavad Gita</p>
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════
//  TOP NAV (with search)
// ════════════════════════════════════════════════════════════════════════

function TopNav({ currentChapter, allChapters, onSelectChapter, onGoHome, onOpenSearch }) {
  return (
    <header className="h-14 border-b border-surface-400 bg-surface-800/95 backdrop-blur-md sticky top-0 z-30 flex items-center px-4 md:px-6 gap-3">
      <button onClick={onGoHome} className="flex items-center gap-2 shrink-0 group">
        <span className="text-xl font-sanskrit text-saffron-500 opacity-70 group-hover:opacity-100 transition-opacity">{'\u0950'}</span>
        <span className="font-display text-sm font-semibold text-parchment-300 hidden md:inline group-hover:text-saffron-300 transition-colors">Gita Visual Guide</span>
      </button>
      <button onClick={onOpenSearch} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-600/60 border border-surface-400/50 text-parchment-500 hover:text-parchment-200 hover:border-saffron-600/20 transition-all text-sm">
        <IconSearch /><span className="hidden sm:inline">Search...</span><kbd className="hidden md:inline text-xs text-parchment-700 bg-surface-500 px-1.5 py-0.5 rounded ml-1">/</kbd>
      </button>
      <div className="flex-1 overflow-x-auto flex items-center gap-1 scrollbar-hide ml-1">
        {allChapters.map(ch => (
          <button key={ch.chapter} onClick={() => onSelectChapter(ch)} className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${currentChapter?.chapter === ch.chapter ? 'bg-saffron-600/20 text-saffron-300 border border-saffron-600/30' : 'text-parchment-500 hover:text-parchment-200 hover:bg-surface-500'}`}>{ch.chapter}</button>
        ))}
      </div>
    </header>
  )
}

// ════════════════════════════════════════════════════════════════════════
//  APP
// ════════════════════════════════════════════════════════════════════════

export default function App() {
  const [view, setView] = useState('home')
  const [currentChapter, setCurrentChapter] = useState(null)
  const [currentModel, setCurrentModel] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)

  const goHome = useCallback(() => { setView('home'); setCurrentChapter(null); setCurrentModel(null); window.scrollTo(0,0) }, [])
  const selectChapter = useCallback((ch) => { setCurrentChapter(ch); setCurrentModel(null); setView('chapter'); window.scrollTo(0,0) }, [])
  const selectModel = useCallback((model) => { setCurrentModel(model); setView('model'); window.scrollTo(0,0) }, [])
  const navigateModel = useCallback((model) => { setCurrentModel(model); window.scrollTo(0,0) }, [])
  const goBackToChapter = useCallback(() => { setCurrentModel(null); setView('chapter'); window.scrollTo(0,0) }, [])
  const handleSearchResult = useCallback((chapter, model) => { setCurrentChapter(chapter); setCurrentModel(model); setView('model'); window.scrollTo(0,0) }, [])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') { if (searchOpen) { setSearchOpen(false); return }; if (view === 'model') goBackToChapter(); else if (view === 'chapter') goHome() }
      if (e.key === '/' && !searchOpen && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); setSearchOpen(true) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [view, searchOpen, goBackToChapter, goHome])

  return (
    <div className="min-h-screen">
      <TopNav currentChapter={currentChapter} allChapters={GITA_DATA} onSelectChapter={selectChapter} onGoHome={goHome} onOpenSearch={() => setSearchOpen(true)}/>
      <Breadcrumbs view={view} chapter={currentChapter} model={currentModel} onGoHome={goHome} onGoChapter={goBackToChapter}/>
      {view === 'home' && <HomeView onSelectChapter={selectChapter}/>}
      {view === 'chapter' && currentChapter && <ChapterView chapter={currentChapter} onSelectModel={selectModel}/>}
      {view === 'model' && currentModel && currentChapter && <ModelDetail model={currentModel} chapter={currentChapter} onBack={goBackToChapter} onNavigateModel={navigateModel}/>}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} onSelectResult={handleSearchResult}/>
    </div>
  )
}
