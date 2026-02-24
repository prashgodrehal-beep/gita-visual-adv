import { useState, useEffect, useCallback } from 'react'
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

const TYPE_META = {
  comparison: { icon: '⚖️', label: 'Comparison' },
  flow:       { icon: '→',  label: 'Flow' },
  cycle:      { icon: '↻',  label: 'Cycle' },
  radial:     { icon: '◎',  label: 'Radial' },
  hierarchy:  { icon: '△',  label: 'Hierarchy' },
  grid:       { icon: '▦',  label: 'Grid' },
}

// ════════════════════════════════════════════════════════════════════════
//  VISUAL TEMPLATES
// ════════════════════════════════════════════════════════════════════════

function ComparisonTemplate({ data }) {
  const left = data.left
  const right = data.right
  const maxItems = Math.max(left.items.length, right.items.length)
  const size = { w: 480, h: Math.max(280, maxItems * 46 + 100) }
  const midX = size.w / 2
  const topY = 60
  const itemH = 40
  const colW = 190

  const truncate = (s, max) => s.length > max ? s.substring(0, max - 1) + '…' : s

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full max-w-xl mx-auto">
        <svg viewBox={`0 0 ${size.w} ${size.h}`} className="w-full h-auto">
          <defs>
            <linearGradient id="compLeftGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(140,160,180,0.08)" />
              <stop offset="100%" stopColor="rgba(140,160,180,0.02)" />
            </linearGradient>
            <linearGradient id="compRightGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(240,112,2,0.02)" />
              <stop offset="100%" stopColor="rgba(240,112,2,0.08)" />
            </linearGradient>
            <filter id="compGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Background panels */}
          <rect x="5" y="5" width={midX - 10} height={size.h - 10} rx="12"
            fill="url(#compLeftGrad)" stroke="rgba(140,160,180,0.1)" strokeWidth="0.8" />
          <rect x={midX + 5} y="5" width={midX - 10} height={size.h - 10} rx="12"
            fill="url(#compRightGrad)" stroke="rgba(240,112,2,0.1)" strokeWidth="0.8" />

          {/* Center divider */}
          <line x1={midX} y1="20" x2={midX} y2={size.h - 20}
            stroke="rgba(240,112,2,0.15)" strokeWidth="1" strokeDasharray="4 6" />

          {/* VS badge */}
          <circle cx={midX} cy={topY - 18} r="16" fill="rgba(25,20,15,0.95)"
            stroke="rgba(240,112,2,0.35)" strokeWidth="1.2" filter="url(#compGlow)" />
          <text x={midX} y={topY - 17} textAnchor="middle" dominantBaseline="middle"
            fontSize="9" fontWeight="700" fill="rgba(240,170,80,0.8)"
            className="cycle-center-text">VS</text>

          {/* Left header */}
          <text x={midX / 2} y={topY - 12} textAnchor="middle" dominantBaseline="middle"
            fontSize="12" fontWeight="700" fill="rgba(180,200,220,0.85)"
            className="cycle-center-text">
            {truncate(left.label, 22)}
          </text>
          <line x1={midX / 2 - 40} y1={topY} x2={midX / 2 + 40} y2={topY}
            stroke="rgba(140,160,180,0.2)" strokeWidth="0.8" />

          {/* Right header */}
          <text x={midX + midX / 2} y={topY - 12} textAnchor="middle" dominantBaseline="middle"
            fontSize="12" fontWeight="700" fill="rgba(240,170,80,0.9)"
            className="cycle-center-text">
            {truncate(right.label, 22)}
          </text>
          <line x1={midX + midX / 2 - 40} y1={topY} x2={midX + midX / 2 + 40} y2={topY}
            stroke="rgba(240,112,2,0.2)" strokeWidth="0.8" />

          {/* Left items */}
          {left.items.map((item, i) => {
            const y = topY + 26 + i * itemH
            const clean = item.replace(/\s*\([^)]*\)\s*$/g, '').trim()
            return (
              <g key={`l-${i}`} className="hierarchy-level" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
                <circle cx={25} cy={y + 8} r="4"
                  fill="rgba(140,160,180,0.2)" stroke="rgba(140,160,180,0.3)" strokeWidth="0.8" />
                <text x={37} y={y + 9} dominantBaseline="middle"
                  fontSize="9.5" fill="rgba(210,215,220,0.75)">
                  {truncate(clean, 28)}
                </text>
              </g>
            )
          })}

          {/* Right items */}
          {right.items.map((item, i) => {
            const y = topY + 26 + i * itemH
            const clean = item.replace(/\s*\([^)]*\)\s*$/g, '').trim()
            return (
              <g key={`r-${i}`} className="hierarchy-level" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <circle cx={midX + 20} cy={y + 8} r="4"
                  fill="rgba(240,112,2,0.2)" stroke="rgba(240,112,2,0.35)" strokeWidth="0.8" />
                <text x={midX + 32} y={y + 9} dominantBaseline="middle"
                  fontSize="9.5" fill="rgba(240,200,160,0.8)">
                  {truncate(clean, 28)}
                </text>
              </g>
            )
          })}

          {/* Connecting arrows between matching items */}
          {Array.from({ length: Math.min(left.items.length, right.items.length) }).map((_, i) => {
            const y = topY + 34 + i * itemH
            return (
              <line key={`conn-${i}`} x1={midX - 12} y1={y} x2={midX + 12} y2={y}
                stroke="rgba(240,112,2,0.08)" strokeWidth="0.6" strokeDasharray="2 3"
                className="radial-connector" style={{ animationDelay: `${0.4 + i * 0.1}s` }} />
            )
          })}
        </svg>
      </div>
    </div>
  )
}

function FlowTemplate({ data }) {
  return (
    <div className="max-w-2xl mx-auto relative">
      {/* SVG vertical flow line */}
      <div className="absolute left-[19px] md:left-[23px] top-6 bottom-6 w-px">
        <svg width="3" height="100%" className="overflow-visible">
          <line x1="1.5" y1="0" x2="1.5" y2="100%"
            stroke="rgba(240,112,2,0.12)" strokeWidth="1.5" />
          <line x1="1.5" y1="0" x2="1.5" y2="100%"
            stroke="rgba(240,112,2,0.2)" strokeWidth="1"
            strokeDasharray="4 8" className="cycle-flow-dash" />
        </svg>
      </div>

      <div className="space-y-3 relative">
        {data.steps.map((step, i) => {
          const isAccent = step.accent
          const isLast = i === data.steps.length - 1
          return (
            <div key={i} className="slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`relative rounded-xl p-5 md:p-6 border ml-10 md:ml-12 ${isAccent ? 'template-accent' : 'template-normal'}`}>
                {/* Node dot on the timeline */}
                <div className={`absolute -left-[29px] md:-left-[31px] top-6 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 ${isAccent
                  ? 'bg-saffron-600/30 border-saffron-500 shadow-[0_0_12px_rgba(240,112,2,0.3)]'
                  : 'bg-surface-700 border-saffron-600/30'}`}>
                  {isAccent && <div className="absolute inset-1 rounded-full bg-saffron-500/60 animate-ping" style={{ animationDuration: '3s' }} />}
                </div>

                {/* Arrow from previous */}
                {i > 0 && (
                  <svg className="absolute -left-[22px] md:-left-[23px] -top-2 text-saffron-600/30" width="6" height="10" viewBox="0 0 6 10">
                    <path d="M3 0 L3 7 M1 5 L3 9 L5 5" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                  </svg>
                )}

                <div className="flex items-start gap-3">
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${isAccent ? 'bg-saffron-600/25 text-saffron-300' : 'bg-surface-400/80 text-parchment-900'}`}>
                    {i + 1}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h4 className={`font-display text-lg md:text-xl font-semibold leading-snug ${isAccent ? 'text-saffron-300' : 'text-parchment-100'}`}>
                      {step.label}
                    </h4>
                    {step.desc && (
                      <p className={`text-base md:text-lg mt-1.5 leading-relaxed ${isAccent ? 'text-saffron-200/80' : 'text-parchment-700'}`}>
                        {step.desc}
                      </p>
                    )}
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
  const n = data.steps.length
  const size = 440
  const cx = size / 2
  const cy = size / 2
  const R = 170
  const nodeR = 38

  const nodes = data.steps.map((label, i) => {
    const angle = (2 * Math.PI * i / n) - Math.PI / 2
    return { x: cx + R * Math.cos(angle), y: cy + R * Math.sin(angle), label, angle }
  })

  /* Build smooth arc path between consecutive nodes */
  const arcSegments = nodes.map((node, i) => {
    const next = nodes[(i + 1) % n]
    const a1 = node.angle
    const a2 = ((i + 1) % n === 0) ? a1 + (2 * Math.PI / n) : next.angle
    const midA = (a1 + a2) / 2
    const bulge = R + 22
    const cpx = cx + bulge * Math.cos(midA)
    const cpy = cy + bulge * Math.sin(midA)

    const startOff = 42, endOff = 42
    const sx = node.x + startOff * Math.cos(a1 + 0.25)
    const sy = node.y + startOff * Math.sin(a1 + 0.25)
    const ex = next.x + endOff * Math.cos(a2 - 0.25)
    const ey = next.y + endOff * Math.sin(a2 - 0.25)
    return `M${sx},${sy} Q${cpx},${cpy} ${ex},${ey}`
  })

  /* Arrow positions at midpoint of each arc */
  const arrows = nodes.map((_, i) => {
    const a1 = nodes[i].angle
    const a2 = i + 1 < n ? nodes[i + 1].angle : nodes[0].angle + (i + 1 === n ? 2 * Math.PI / n * n : 0)
    const midA = (a1 + a2) / 2 + (i === n - 1 ? Math.PI * 2 / n / 2 : 0)
    const arrowR = R + 10
    return {
      x: cx + arrowR * Math.cos(midA),
      y: cy + arrowR * Math.sin(midA),
      rot: (midA * 180 / Math.PI) + 90
    }
  })

  const circum = 2 * Math.PI * R

  return (
    <div className="flex flex-col items-center gap-6">
      {/* SVG Wheel */}
      <div className="w-full max-w-lg mx-auto" style={{ aspectRatio: '1' }}>
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full cycle-wheel">
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(240,112,2,0.25)" />
              <stop offset="100%" stopColor="rgba(240,112,2,0)" />
            </radialGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="arcGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={size} y2={size}>
              <stop offset="0%" stopColor="rgba(240,112,2,0.5)" />
              <stop offset="50%" stopColor="rgba(212,123,52,0.35)" />
              <stop offset="100%" stopColor="rgba(240,112,2,0.5)" />
            </linearGradient>
          </defs>

          {/* Outer orbit ring */}
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(240,112,2,0.08)" strokeWidth="1" />

          {/* Animated dashed orbit */}
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(240,112,2,0.18)" strokeWidth="1.5"
            strokeDasharray={`${circum * 0.02} ${circum * 0.04}`}
            className="cycle-orbit" />

          {/* Center glow */}
          <circle cx={cx} cy={cy} r="65" fill="url(#centerGlow)" className="cycle-center-glow" />

          {/* Arc connections with animated dash */}
          {arcSegments.map((d, i) => (
            <g key={`arc-${i}`}>
              <path d={d} fill="none" stroke="rgba(240,112,2,0.12)" strokeWidth="2" />
              <path d={d} fill="none" stroke="url(#arcGrad)" strokeWidth="1.5"
                strokeDasharray="6 8" className="cycle-flow-dash"
                style={{ animationDelay: `${i * 0.3}s` }} />
            </g>
          ))}

          {/* Arrow indicators */}
          {arrows.map((a, i) => (
            <g key={`arrow-${i}`} transform={`translate(${a.x},${a.y}) rotate(${a.rot})`}
               className="cycle-arrow" style={{ animationDelay: `${0.5 + i * 0.15}s` }}>
              <polygon points="0,-5 4,3 -4,3" fill="rgba(240,112,2,0.55)" />
            </g>
          ))}

          {/* Center circle */}
          <circle cx={cx} cy={cy} r="52" fill="rgba(25,20,15,0.9)"
            stroke="rgba(240,112,2,0.35)" strokeWidth="1.5" filter="url(#softGlow)" />
          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
            className="cycle-center-text" fill="rgba(240,170,80,0.95)">
            {data.center.length > 30
              ? data.center.split(/[—–(]/)[0].trim().split(' ').reduce((lines, word) => {
                  const last = lines[lines.length - 1]
                  if (last.length + word.length < 16) { lines[lines.length - 1] = last + (last ? ' ' : '') + word }
                  else { lines.push(word) }
                  return lines
                }, ['']).map((line, li, arr) => (
                  <tspan key={li} x={cx} dy={li === 0 ? `${-(arr.length - 1) * 0.55}em` : '1.1em'} fontSize="11" fontWeight="600">{line}</tspan>
                ))
              : <tspan fontSize="11" fontWeight="600">{data.center.split(/[—–(]/)[0].trim()}</tspan>
            }
          </text>

          {/* Step nodes */}
          {nodes.map((node, i) => (
            <g key={`node-${i}`} className="cycle-node" style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
              {/* Node background */}
              <circle cx={node.x} cy={node.y} r={nodeR} fill="rgba(30,24,18,0.92)"
                stroke="rgba(240,112,2,0.3)" strokeWidth="1.2" />
              {/* Step number */}
              <circle cx={node.x} cy={node.y - 12} r="9" fill="rgba(240,112,2,0.15)"
                stroke="rgba(240,112,2,0.3)" strokeWidth="0.8" />
              <text x={node.x} y={node.y - 11} textAnchor="middle" dominantBaseline="middle"
                fontSize="8" fontWeight="700" fill="rgba(240,170,80,0.9)">{i + 1}</text>
              {/* Label — short version inside node */}
              <text x={node.x} y={node.y + 6} textAnchor="middle" dominantBaseline="middle"
                fontSize="7.5" fill="rgba(230,215,190,0.85)" fontWeight="500">
                {node.label.split('—')[0].trim().length > 18
                  ? node.label.split('—')[0].trim().substring(0, 16) + '…'
                  : node.label.split('—')[0].trim()}
              </text>
              {node.label.includes('—') && (
                <text x={node.x} y={node.y + 17} textAnchor="middle" dominantBaseline="middle"
                  fontSize="6" fill="rgba(230,215,190,0.5)">
                  {node.label.split('—')[1].trim().length > 22
                    ? node.label.split('—')[1].trim().substring(0, 20) + '…'
                    : node.label.split('—')[1].trim()}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Step detail list below the wheel */}
      <div className="w-full max-w-2xl space-y-2">
        {data.steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3 slide-up px-1" style={{ animationDelay: `${0.4 + i * 0.08}s` }}>
            <div className="shrink-0 w-7 h-7 rounded-full bg-saffron-600/15 text-saffron-400 flex items-center justify-center text-xs font-bold border border-saffron-600/20 mt-0.5">{i + 1}</div>
            <span className="text-base md:text-lg leading-relaxed text-parchment-400">{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RadialTemplate({ data }) {
  const n = data.items.length
  const size = 440
  const cx = size / 2
  const cy = size / 2
  const R = n <= 4 ? 130 : n <= 6 ? 145 : 155
  const petalR = n <= 4 ? 36 : n <= 6 ? 32 : 28

  const petals = data.items.map((item, i) => {
    const angle = (2 * Math.PI * i / n) - Math.PI / 2
    return {
      x: cx + R * Math.cos(angle),
      y: cy + R * Math.sin(angle),
      angle,
      label: item.replace(/\s*\([^)]*\)\s*$/g, '').trim()
    }
  })

  /* Extract short label (first few words) */
  const shortLabel = (text, max) => {
    const clean = text.replace(/\s*\([^)]*\)\s*$/g, '').trim()
    if (clean.length <= max) return [clean]
    const words = clean.split(' ')
    const lines = ['']
    words.forEach(w => {
      const last = lines[lines.length - 1]
      if (last.length + w.length + 1 <= max) lines[lines.length - 1] = last + (last ? ' ' : '') + w
      else if (lines.length < 2) lines.push(w)
    })
    return lines.map(l => l.length > max ? l.substring(0, max - 1) + '…' : l)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full max-w-lg mx-auto" style={{ aspectRatio: '1' }}>
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
          <defs>
            <radialGradient id="radialCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(240,112,2,0.2)" />
              <stop offset="100%" stopColor="rgba(240,112,2,0)" />
            </radialGradient>
            <filter id="radialSoftGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Outer decorative ring */}
          <circle cx={cx} cy={cy} r={R + petalR + 12} fill="none"
            stroke="rgba(240,112,2,0.06)" strokeWidth="0.8" strokeDasharray="3 6" className="radial-ring" />

          {/* Inner ring */}
          <circle cx={cx} cy={cy} r={R} fill="none"
            stroke="rgba(240,112,2,0.1)" strokeWidth="0.8" className="radial-ring" style={{ animationDelay: '0.3s' }} />

          {/* Center glow */}
          <circle cx={cx} cy={cy} r="55" fill="url(#radialCenterGlow)" className="cycle-center-glow" />

          {/* Connector lines from center to petals */}
          {petals.map((p, i) => (
            <line key={`line-${i}`} x1={cx} y1={cy} x2={p.x} y2={p.y}
              stroke="rgba(240,112,2,0.12)" strokeWidth="1"
              strokeDasharray="4 4"
              className="radial-connector" style={{ animationDelay: `${0.3 + i * 0.08}s` }} />
          ))}

          {/* Center node */}
          <circle cx={cx} cy={cy} r="44" fill="rgba(25,20,15,0.92)"
            stroke="rgba(240,112,2,0.35)" strokeWidth="1.5" filter="url(#radialSoftGlow)" />
          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
            fill="rgba(240,170,80,0.95)" className="cycle-center-text">
            {(() => {
              const label = data.center.split(/[—–(]/)[0].trim()
              if (label.length <= 14) return <tspan fontSize="12" fontWeight="600">{label}</tspan>
              const words = label.split(' ')
              const mid = Math.ceil(words.length / 2)
              return <>
                <tspan x={cx} dy="-0.5em" fontSize="11" fontWeight="600">{words.slice(0, mid).join(' ')}</tspan>
                <tspan x={cx} dy="1.15em" fontSize="11" fontWeight="600">{words.slice(mid).join(' ')}</tspan>
              </>
            })()}
          </text>

          {/* Petal nodes */}
          {petals.map((p, i) => {
            const lines = shortLabel(p.label, n <= 5 ? 16 : 13)
            return (
              <g key={`petal-${i}`} className="radial-petal" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                <circle cx={p.x} cy={p.y} r={petalR} fill="rgba(30,24,18,0.9)"
                  stroke="rgba(240,112,2,0.25)" strokeWidth="1" />
                {/* Small index badge */}
                <circle cx={p.x + petalR * 0.6} cy={p.y - petalR * 0.6} r="7"
                  fill="rgba(240,112,2,0.15)" stroke="rgba(240,112,2,0.3)" strokeWidth="0.6" />
                <text x={p.x + petalR * 0.6} y={p.y - petalR * 0.6}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize="7" fontWeight="700" fill="rgba(240,170,80,0.85)">{i + 1}</text>
                {/* Label */}
                {lines.map((line, li) => (
                  <text key={li} x={p.x} y={p.y + (li - (lines.length - 1) / 2) * 10}
                    textAnchor="middle" dominantBaseline="middle"
                    fontSize={n <= 5 ? "8" : "7"} fill="rgba(230,215,190,0.8)" fontWeight="500">
                    {line}
                  </text>
                ))}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Full item list below */}
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-2">
        {data.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 slide-up px-1" style={{ animationDelay: `${0.4 + i * 0.06}s` }}>
            <div className="shrink-0 w-6 h-6 rounded-full bg-saffron-600/15 text-saffron-400 flex items-center justify-center text-xs font-bold border border-saffron-600/20 mt-0.5">{i + 1}</div>
            <span className="text-sm md:text-base leading-relaxed text-parchment-400">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function HierarchyTemplate({ data }) {
  const layers = data.layers
  const n = layers.length
  const size = { w: 460, h: Math.max(300, n * 72 + 40) }
  const cx = size.w / 2
  const topY = 30
  const layerH = (size.h - 60) / n
  const minW = 100
  const maxW = size.w - 40

  const rects = layers.map((layer, i) => {
    const progress = i / Math.max(n - 1, 1)
    const w = minW + (maxW - minW) * progress
    const y = topY + i * layerH
    return { ...layer, x: cx - w / 2, y, w, h: layerH - 8, i }
  })

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-full max-w-xl mx-auto">
        <svg viewBox={`0 0 ${size.w} ${size.h}`} className="w-full h-auto">
          <defs>
            <linearGradient id="pyramidAccent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(240,112,2,0.25)" />
              <stop offset="100%" stopColor="rgba(240,112,2,0.08)" />
            </linearGradient>
            <linearGradient id="pyramidNormal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(60,50,40,0.7)" />
              <stop offset="100%" stopColor="rgba(40,34,28,0.9)" />
            </linearGradient>
            <filter id="pyramidGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Pyramid outline / wireframe guides */}
          <line x1={cx} y1={topY - 5} x2={20} y2={size.h - 15}
            stroke="rgba(240,112,2,0.06)" strokeWidth="0.8" />
          <line x1={cx} y1={topY - 5} x2={size.w - 20} y2={size.h - 15}
            stroke="rgba(240,112,2,0.06)" strokeWidth="0.8" />

          {/* Connection lines between layers */}
          {rects.slice(0, -1).map((r, i) => (
            <line key={`conn-${i}`}
              x1={cx} y1={r.y + r.h + 2} x2={cx} y2={r.y + r.h + 10}
              stroke="rgba(240,112,2,0.2)" strokeWidth="1.5"
              markerEnd="none" className="hierarchy-level"
              style={{ animationDelay: `${i * 0.12}s` }} />
          ))}

          {/* Layer rectangles */}
          {rects.map((r, i) => {
            const isAccent = r.accent
            const cornerR = 10
            return (
              <g key={`layer-${i}`} className="hierarchy-level" style={{ animationDelay: `${0.1 + i * 0.15}s` }}>
                {/* Glow for accent */}
                {isAccent && (
                  <rect x={r.x - 3} y={r.y - 3} width={r.w + 6} height={r.h + 6}
                    rx={cornerR + 2} fill="none" stroke="rgba(240,112,2,0.15)"
                    strokeWidth="1" filter="url(#pyramidGlow)" />
                )}
                {/* Main rect */}
                <rect x={r.x} y={r.y} width={r.w} height={r.h} rx={cornerR}
                  fill={isAccent ? 'url(#pyramidAccent)' : 'url(#pyramidNormal)'}
                  stroke={isAccent ? 'rgba(240,112,2,0.4)' : 'rgba(240,112,2,0.12)'}
                  strokeWidth={isAccent ? 1.5 : 1} />
                {/* Level indicator */}
                <circle cx={r.x + 22} cy={r.y + r.h / 2} r="11"
                  fill={isAccent ? 'rgba(240,112,2,0.2)' : 'rgba(240,112,2,0.08)'}
                  stroke={isAccent ? 'rgba(240,112,2,0.4)' : 'rgba(240,112,2,0.15)'}
                  strokeWidth="0.8" />
                <text x={r.x + 22} y={r.y + r.h / 2}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize="10" fontWeight="700"
                  fill={isAccent ? 'rgba(240,170,80,0.95)' : 'rgba(240,170,80,0.6)'}>{i + 1}</text>
                {/* Label */}
                <text x={r.x + 42} y={r.y + r.h / 2 - (r.desc ? 6 : 0)}
                  dominantBaseline="middle" fontSize="12" fontWeight="600"
                  fill={isAccent ? 'rgba(240,170,80,0.95)' : 'rgba(230,215,190,0.85)'}
                  className="cycle-center-text">
                  {r.label.length > 35 ? r.label.substring(0, 33) + '…' : r.label}
                </text>
                {r.desc && (
                  <text x={r.x + 42} y={r.y + r.h / 2 + 10}
                    dominantBaseline="middle" fontSize="9"
                    fill={isAccent ? 'rgba(240,170,80,0.6)' : 'rgba(230,215,190,0.45)'}>
                    {r.desc.length > 45 ? r.desc.substring(0, 43) + '…' : r.desc}
                  </text>
                )}
                {/* Down arrow between layers */}
                {i < n - 1 && (
                  <g transform={`translate(${cx}, ${r.y + r.h + 5})`}>
                    <polygon points="0,0 4,0 2,5" fill="rgba(240,112,2,0.3)" />
                  </g>
                )}
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

function GridTemplate({ data }) {
  const n = data.items.length
  const cols = n <= 4 ? 2 : n <= 6 ? 3 : n <= 9 ? 3 : 3

  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      {data.title && (
        <h4 className="font-display text-xl md:text-2xl font-semibold text-parchment-100 text-center scale-in">{data.title}</h4>
      )}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${n >= 6 ? 'lg:grid-cols-3' : ''} gap-3`}>
        {data.items.map((item, i) => (
          <div key={i} className="group slide-up rounded-xl border border-surface-400/60 bg-surface-700/70 hover:border-saffron-600/25 hover:bg-surface-600/60 transition-all duration-300 p-5 relative overflow-hidden"
            style={{ animationDelay: `${0.08 + i * 0.06}s` }}>
            {/* Corner accent triangle */}
            <svg className="absolute top-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 40 40">
              <polygon points="40,0 40,40 0,0" fill="rgba(240,112,2,0.08)" />
            </svg>
            <div className="flex items-start gap-3 relative">
              {/* Number badge */}
              <div className="shrink-0 w-8 h-8 rounded-lg bg-saffron-600/10 text-saffron-400/70 flex items-center justify-center text-xs font-bold border border-saffron-600/15 mt-0.5 group-hover:bg-saffron-600/20 group-hover:text-saffron-300 transition-colors duration-300">
                {i + 1}
              </div>
              <span className="text-base md:text-lg leading-relaxed text-parchment-400 group-hover:text-parchment-200 transition-colors duration-300">{item}</span>
            </div>
          </div>
        ))}
      </div>
      {data.highlight && (
        <div className="template-accent rounded-xl p-5 md:p-6 text-center scale-in mt-3" style={{ animationDelay: '0.4s' }}>
          <span className="text-base md:text-lg leading-relaxed text-saffron-200/90 italic">{data.highlight}</span>
        </div>
      )}
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
    default:           return <div className="text-parchment-700 text-lg italic">Template type "{type}" not yet available.</div>
  }
}

// ════════════════════════════════════════════════════════════════════════
//  SCRIPTURE SIDEBAR
// ════════════════════════════════════════════════════════════════════════

function ScriptureSidebar({ scriptures, isOpen, onClose }) {
  if (!scriptures?.length) return null

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={onClose} />}
      <aside className={`
        scripture-panel overflow-y-auto
        fixed md:relative top-0 right-0 h-full z-50
        w-[85vw] max-w-[400px] md:w-[360px] lg:w-[400px]
        transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 md:p-7">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5 text-saffron-400">
              <IconScripture />
              <span className="font-display text-sm font-semibold tracking-wider uppercase">Scripture</span>
            </div>
            <button onClick={onClose} className="md:hidden p-1 text-muted-100 hover:text-saffron-400 transition-colors">
              <IconClose />
            </button>
          </div>

          <div className="space-y-5">
            {scriptures.map((v, i) => (
              <div key={i} className="verse-card slide-in-left" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="inline-block text-sm font-bold text-saffron-400 bg-saffron-600/10 px-2.5 py-0.5 rounded mb-2">
                  {v.ref}
                </span>
                {v.sanskrit && (
                  <p className="font-sanskrit text-base md:text-lg text-saffron-300/50 leading-relaxed mb-2 italic">
                    {v.sanskrit}
                  </p>
                )}
                <p className="text-base md:text-lg text-parchment-500 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

// ════════════════════════════════════════════════════════════════════════
//  MODEL DETAIL VIEW
// ════════════════════════════════════════════════════════════════════════

function ModelDetail({ model, chapter, onBack }) {
  const [scriptureOpen, setScriptureOpen] = useState(false)

  return (
    <div className="flex h-[calc(100vh-64px)]">
      <div className="flex-1 overflow-y-auto p-5 md:p-8 lg:p-12">
        <div className="max-w-3xl mx-auto">
          <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-50 hover:text-saffron-400 transition-colors mb-8 group slide-in-left">
            <IconArrowLeft />
            <span className="group-hover:underline">Chapter {chapter.chapter} · {chapter.title}</span>
          </button>

          <div className="mb-10 slide-up">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm text-muted-50 bg-surface-500 px-3 py-1 rounded-full border border-surface-400">
                {TYPE_META[model.type]?.icon} {TYPE_META[model.type]?.label}
              </span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-parchment-50 mb-4 leading-tight">
              {model.name}
            </h1>
            <p className="text-base md:text-lg text-parchment-700 leading-relaxed max-w-2xl">{model.desc}</p>
            <div className="glow-line mt-8" />
          </div>

          <div className="slide-up" style={{ animationDelay: '0.15s' }}>
            <VisualTemplate type={model.type} data={model.data} />
          </div>

          <div className="h-24 md:hidden" />

          <button
            onClick={() => setScriptureOpen(true)}
            className="md:hidden fixed bottom-6 right-6 z-30 bg-saffron-600 text-white rounded-full p-4 shadow-lg shadow-saffron-600/30 hover:bg-saffron-500 transition-all active:scale-95"
            aria-label="Show scripture"
          >
            <IconScripture />
          </button>
        </div>
      </div>

      <ScriptureSidebar
        scriptures={model.scriptures}
        isOpen={scriptureOpen}
        onClose={() => setScriptureOpen(false)}
      />
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
          <span className="text-5xl md:text-6xl font-display font-bold text-saffron-600/20">{chapter.chapter}</span>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-parchment-50">{chapter.title}</h2>
            <p className="text-base text-parchment-950 mt-0.5">{chapter.subtitle}</p>
          </div>
        </div>
        <div className="glow-line mt-5" />
        <p className="text-sm text-muted-50 mt-3">{chapter.models.length} visual models</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapter.models.map((model, i) => (
          <button
            key={model.id}
            onClick={() => onSelectModel(model)}
            className="card-surface p-6 text-left group cursor-pointer slide-up"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-50 bg-surface-500 px-2.5 py-0.5 rounded-full border border-surface-400">
                {TYPE_META[model.type]?.icon} {TYPE_META[model.type]?.label}
              </span>
              <span className="text-muted-400 group-hover:text-saffron-500 transition-colors"><IconChevron /></span>
            </div>
            <h3 className="font-display text-base md:text-lg font-semibold text-parchment-300 group-hover:text-saffron-300 transition-colors mb-2 leading-snug">
              {model.name}
            </h3>
            <p className="text-sm text-muted-50 leading-relaxed line-clamp-2">{model.desc}</p>
            <div className="flex items-center gap-1.5 mt-4 text-xs text-muted-200">
              <IconBook />
              <span>{model.scriptures?.length || 0} verses</span>
            </div>
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
        <div className="text-5xl md:text-6xl mb-5 opacity-30 font-sanskrit">ॐ</div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-parchment-50 mb-4 tracking-tight">
          Gita Visual Guide
        </h1>
        <p className="font-display text-lg md:text-xl text-saffron-400/80 italic mb-3">
          See the Wisdom
        </p>
        <p className="text-base md:text-lg text-muted-50 max-w-xl mx-auto leading-relaxed">
          {GITA_DATA.length} chapters · {totalModels} visual models · Ancient wisdom, modern clarity
        </p>
        <div className="glow-line mt-10 max-w-xs mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {GITA_DATA.map((ch, i) => (
          <button
            key={ch.chapter}
            onClick={() => onSelectChapter(ch)}
            className="card-surface p-6 text-left group cursor-pointer slide-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <span className="text-3xl md:text-4xl font-display font-bold text-saffron-600/20 group-hover:text-saffron-600/40 transition-colors">
                  {ch.chapter}
                </span>
                <div>
                  <h3 className="font-display text-base md:text-lg font-semibold text-parchment-300 group-hover:text-saffron-300 transition-colors leading-snug">
                    {ch.title}
                  </h3>
                  <p className="text-sm text-muted-200 mt-0.5">{ch.subtitle}</p>
                </div>
              </div>
              <span className="text-muted-400 group-hover:text-saffron-500 transition-colors mt-1"><IconChevron /></span>
            </div>
            <div className="flex items-center gap-1.5 mt-4 text-xs text-muted-200">
              <IconBook />
              <span>{ch.models.length} models</span>
            </div>
          </button>
        ))}
      </div>

      <div className="text-center mt-20 pb-8">
        <div className="glow-line max-w-xs mx-auto mb-6" />
        <p className="text-sm text-muted-400">
          Built with devotion · Based on Srimad Bhagavad Gita
        </p>
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════
//  TOP NAV
// ════════════════════════════════════════════════════════════════════════

function TopNav({ currentChapter, allChapters, onSelectChapter, onGoHome }) {
  return (
    <header className="h-16 border-b border-surface-400 bg-surface-800/90 backdrop-blur-md sticky top-0 z-30 flex items-center px-4 md:px-6 gap-4">
      <button onClick={onGoHome} className="flex items-center gap-2.5 shrink-0 group">
        <span className="text-xl font-sanskrit text-saffron-500 opacity-60 group-hover:opacity-100 transition-opacity">ॐ</span>
        <span className="font-display text-sm font-semibold text-parchment-600 hidden md:inline group-hover:text-saffron-300 transition-colors">
          Gita Visual Guide
        </span>
      </button>

      <div className="flex-1 overflow-x-auto flex items-center gap-1.5 scrollbar-hide">
        {allChapters.map(ch => (
          <button
            key={ch.chapter}
            onClick={() => onSelectChapter(ch)}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              currentChapter?.chapter === ch.chapter
                ? 'bg-saffron-600/20 text-saffron-300 border border-saffron-600/30'
                : 'text-muted-100 hover:text-parchment-800 hover:bg-surface-500'
            }`}
          >
            {ch.chapter}
          </button>
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

  const goHome = useCallback(() => {
    setView('home'); setCurrentChapter(null); setCurrentModel(null); window.scrollTo(0, 0)
  }, [])

  const selectChapter = useCallback((ch) => {
    setCurrentChapter(ch); setCurrentModel(null); setView('chapter'); window.scrollTo(0, 0)
  }, [])

  const selectModel = useCallback((model) => {
    setCurrentModel(model); setView('model'); window.scrollTo(0, 0)
  }, [])

  const goBackToChapter = useCallback(() => {
    setCurrentModel(null); setView('chapter'); window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (view === 'model') goBackToChapter()
        else if (view === 'chapter') goHome()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [view, goBackToChapter, goHome])

  return (
    <div className="min-h-screen">
      <TopNav currentChapter={currentChapter} allChapters={GITA_DATA} onSelectChapter={selectChapter} onGoHome={goHome} />
      {view === 'home' && <HomeView onSelectChapter={selectChapter} />}
      {view === 'chapter' && currentChapter && <ChapterView chapter={currentChapter} onSelectModel={selectModel} />}
      {view === 'model' && currentModel && currentChapter && <ModelDetail model={currentModel} chapter={currentChapter} onBack={goBackToChapter} />}
    </div>
  )
}
