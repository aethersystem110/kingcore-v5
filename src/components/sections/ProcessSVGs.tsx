// SVG technical illustrations for the 5 process chapters
// Ported from the HTML reference design

export function WindingSVG() {
  return (
    <svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="pglue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#B87333" stopOpacity=".25"/><stop offset="100%" stopColor="#9A5F2A" stopOpacity=".75"/></linearGradient>
        <pattern id="pkraft" patternUnits="userSpaceOnUse" width="8" height="8"><rect width="8" height="8" fill="#A87B4A"/><line x1="0" y1="0" x2="8" y2="8" stroke="#9A5F2A" strokeWidth=".7" opacity=".5"/></pattern>
      </defs>
      <g transform="translate(80 90)"><circle r="28" fill="#A87B4A"/><circle r="28" fill="none" stroke="#3D2B1F" strokeWidth=".8" opacity=".3"/><circle r="18" fill="none" stroke="#3D2B1F" strokeWidth=".4" opacity=".25"/><circle r="4" fill="#3D2B1F"/><circle r="1.5" fill="#B87333"/></g>
      <g transform="translate(80 170)"><circle r="28" fill="#9A5F2A"/><circle r="28" fill="none" stroke="#3D2B1F" strokeWidth=".8" opacity=".3"/><circle r="4" fill="#3D2B1F"/><circle r="1.5" fill="#B87333"/></g>
      <g transform="translate(80 250)"><circle r="28" fill="#A87B4A"/><circle r="28" fill="none" stroke="#3D2B1F" strokeWidth=".8" opacity=".3"/><circle r="4" fill="#3D2B1F"/><circle r="1.5" fill="#B87333"/></g>
      <path d="M 110 90 C 200 90, 240 200, 320 200" stroke="#A87B4A" strokeWidth="2.2" fill="none"/>
      <path d="M 110 170 C 200 170, 240 205, 320 205" stroke="#9A5F2A" strokeWidth="2.2" fill="none"/>
      <path d="M 110 250 C 200 250, 240 210, 320 210" stroke="#A87B4A" strokeWidth="2.2" fill="none"/>
      <g transform="translate(240 200)"><rect x="-50" y="0" width="100" height="36" fill="#3D2B1F" opacity=".85"/><rect x="-46" y="6" width="92" height="26" fill="url(#pglue)"/></g>
      <g transform="translate(320 200)"><rect x="0" y="-3" width="160" height="6" fill="#3D2B1F"/><rect x="6" y="-14" width="80" height="28" fill="url(#pkraft)"/><ellipse cx="6" cy="0" rx="3" ry="14" fill="#9A5F2A"/></g>
    </svg>
  );
}

export function CuringSVG() {
  return (
    <svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <radialGradient id="pheat" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#B87333" stopOpacity=".55"/><stop offset="60%" stopColor="#B87333" stopOpacity=".16"/><stop offset="100%" stopColor="#B87333" stopOpacity="0"/></radialGradient>
        <pattern id="pkraft2" patternUnits="userSpaceOnUse" width="8" height="8"><rect width="8" height="8" fill="#A87B4A"/><line x1="0" y1="0" x2="8" y2="8" stroke="#9A5F2A" strokeWidth=".7" opacity=".5"/></pattern>
      </defs>
      <g transform="translate(40 80)">
        <rect x="0" y="0" width="440" height="180" fill="#3D2B1F" fillOpacity=".05"/>
        <rect x="0" y="0" width="440" height="180" fill="none" stroke="#3D2B1F" strokeWidth="1.2"/>
        <ellipse cx="110" cy="90" rx="80" ry="48" fill="url(#pheat)"/>
        <ellipse cx="220" cy="90" rx="80" ry="48" fill="url(#pheat)"/>
        <ellipse cx="330" cy="90" rx="80" ry="48" fill="url(#pheat)"/>
        <g transform="translate(110 18)"><rect x="-14" y="0" width="28" height="5" fill="#9A5F2A"/><rect x="-10" y="5" width="20" height="2" fill="#B87333"/></g>
        <g transform="translate(220 18)"><rect x="-14" y="0" width="28" height="5" fill="#9A5F2A"/><rect x="-10" y="5" width="20" height="2" fill="#B87333"/></g>
        <g transform="translate(330 18)"><rect x="-14" y="0" width="28" height="5" fill="#9A5F2A"/><rect x="-10" y="5" width="20" height="2" fill="#B87333"/></g>
        <rect x="-20" y="80" width="480" height="20" fill="url(#pkraft2)"/>
      </g>
      <text x="260" y="290" textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="22" fill="#B87333">85–95°C</text>
      <text x="260" y="310" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" letterSpacing="2" fill="#3D2B1F" opacity=".5">CONTROLLED CURE</text>
    </svg>
  );
}

export function GrindingSVG() {
  return (
    <svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <radialGradient id="pdust"><stop offset="0%" stopColor="#FBF7EE" stopOpacity=".9"/><stop offset="100%" stopColor="#FBF7EE" stopOpacity="0"/></radialGradient>
        <pattern id="pkraft3" patternUnits="userSpaceOnUse" width="8" height="8"><rect width="8" height="8" fill="#A87B4A"/><line x1="0" y1="0" x2="8" y2="8" stroke="#9A5F2A" strokeWidth=".7" opacity=".5"/></pattern>
      </defs>
      <g transform="translate(260 70)">
        <polygon points="-100,80 100,80 70,20 -70,20" fill="none" stroke="#3D2B1F" strokeWidth="1.2"/>
        <line x1="-70" y1="20" x2="70" y2="20" stroke="#9A5F2A" strokeWidth="2.5"/>
        <text x="0" y="50" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="2.5" fill="#3D2B1F" opacity=".55">EXTRACTION</text>
      </g>
      <g transform="translate(260 165)">
        <circle cx="-60" cy="0" r="12" fill="#3D2B1F"/><circle cx="-60" cy="0" r="3" fill="#B87333"/>
        <circle cx="60" cy="0" r="12" fill="#3D2B1F"/><circle cx="60" cy="0" r="3" fill="#B87333"/>
        <line x1="-60" y1="-12" x2="60" y2="-12" stroke="#3D2B1F" strokeWidth="2.5"/>
        <line x1="-60" y1="12" x2="60" y2="12" stroke="#3D2B1F" strokeWidth="2.5"/>
        <rect x="-60" y="-12" width="120" height="24" fill="#9A5F2A" opacity=".55"/>
      </g>
      <g transform="translate(40 230)">
        <rect x="0" y="-18" width="200" height="36" fill="url(#pkraft3)"/>
        <rect x="200" y="-18" width="240" height="36" fill="#A87B4A"/>
        <rect x="0" y="-18" width="440" height="36" fill="none" stroke="#3D2B1F" strokeWidth="1" opacity=".35"/>
        <ellipse cx="0" cy="0" rx="5" ry="18" fill="#9A5F2A"/>
        <ellipse cx="440" cy="0" rx="5" ry="18" fill="#9A5F2A" opacity=".75"/>
      </g>
      <g opacity=".75">
        <circle cx="220" cy="285" r="2" fill="url(#pdust)"/><circle cx="260" cy="295" r="2.5" fill="url(#pdust)"/>
        <circle cx="300" cy="290" r="2" fill="url(#pdust)"/><circle cx="340" cy="300" r="1.8" fill="url(#pdust)"/>
      </g>
    </svg>
  );
}

export function WaxSVG() {
  return (
    <svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="pwax" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FBF7EE" stopOpacity="0"/><stop offset="50%" stopColor="#FBF7EE" stopOpacity=".8"/><stop offset="100%" stopColor="#FBF7EE" stopOpacity="0"/></linearGradient>
        <radialGradient id="pblade"><stop offset="0%" stopColor="#9A5F2A"/><stop offset="100%" stopColor="#9A5F2A" stopOpacity=".25"/></radialGradient>
      </defs>
      <g transform="translate(40 200)">
        <rect x="0" y="-22" width="440" height="44" fill="#A87B4A"/>
        <rect x="0" y="-22" width="440" height="44" fill="none" stroke="#3D2B1F" strokeWidth="1" opacity=".35"/>
        <rect x="0" y="-20" width="440" height="6" fill="url(#pwax)"/>
        <ellipse cx="0" cy="0" rx="6" ry="22" fill="#9A5F2A"/>
        <ellipse cx="440" cy="0" rx="6" ry="22" fill="#9A5F2A" opacity=".75"/>
      </g>
      <g transform="translate(180 152)">
        <path d="M -28 0 L 28 0 L 22 -22 L -22 -22 Z" fill="#3D2B1F"/>
        <rect x="-22" y="-16" width="44" height="10" fill="#B87333" opacity=".75"/>
        <rect x="-2" y="-40" width="4" height="20" fill="#3D2B1F"/>
      </g>
      <g transform="translate(360 110)">
        <line x1="0" y1="60" x2="0" y2="20" stroke="#B87333" strokeWidth=".8"/>
        <circle cx="0" cy="60" r="2.5" fill="#B87333"/>
        <text x="-4" y="14" textAnchor="end" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="22" fill="#B87333">18 μm</text>
        <text x="-4" y="32" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="2" fill="#3D2B1F" opacity=".55">LIQUID WAX</text>
      </g>
      <g transform="translate(460 200)">
        <circle r="20" fill="#3D2B1F"/><circle r="20" fill="url(#pblade)" opacity=".4"/><circle r="5" fill="#B87333"/>
      </g>
      <text x="260" y="300" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" letterSpacing="2.5" fill="#3D2B1F" opacity=".55">HEATED PARAFFIN · POLISHED</text>
    </svg>
  );
}

export function CutSVG() {
  return (
    <svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <radialGradient id="pblade2"><stop offset="0%" stopColor="#9A5F2A"/><stop offset="100%" stopColor="#9A5F2A" stopOpacity=".25"/></radialGradient>
        <linearGradient id="pwax2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FBF7EE" stopOpacity="0"/><stop offset="50%" stopColor="#FBF7EE" stopOpacity=".7"/><stop offset="100%" stopColor="#FBF7EE" stopOpacity="0"/></linearGradient>
      </defs>
      <g transform="translate(120 100)">
        <rect x="-2" y="0" width="4" height="40" fill="#3D2B1F"/>
        <g transform="translate(0 60)"><circle r="28" fill="url(#pblade2)" opacity=".4"/><circle r="22" fill="#9A5F2A"/><circle r="26" fill="none" stroke="#3D2B1F" strokeWidth="1" strokeDasharray="2.5 2.5"/><circle r="4" fill="#3D2B1F"/></g>
      </g>
      <g transform="translate(260 100)">
        <rect x="-2" y="0" width="4" height="40" fill="#3D2B1F"/>
        <g transform="translate(0 60)"><circle r="28" fill="url(#pblade2)" opacity=".4"/><circle r="22" fill="#9A5F2A"/><circle r="26" fill="none" stroke="#3D2B1F" strokeWidth="1" strokeDasharray="2.5 2.5"/><circle r="4" fill="#3D2B1F"/></g>
      </g>
      <g transform="translate(400 100)">
        <rect x="-2" y="0" width="4" height="40" fill="#3D2B1F"/>
        <g transform="translate(0 60)"><circle r="28" fill="url(#pblade2)" opacity=".4"/><circle r="22" fill="#9A5F2A"/><circle r="26" fill="none" stroke="#3D2B1F" strokeWidth="1" strokeDasharray="2.5 2.5"/><circle r="4" fill="#3D2B1F"/></g>
      </g>
      <g transform="translate(40 220)">
        <rect x="0" y="-22" width="440" height="44" fill="#A87B4A"/>
        <rect x="0" y="-22" width="440" height="44" fill="none" stroke="#3D2B1F" strokeWidth="1" opacity=".35"/>
        <rect x="0" y="-20" width="440" height="5" fill="url(#pwax2)"/>
        <ellipse cx="0" cy="0" rx="6" ry="22" fill="#9A5F2A"/>
        <ellipse cx="440" cy="0" rx="6" ry="22" fill="#9A5F2A" opacity=".75"/>
      </g>
      <g transform="translate(260 290)">
        <line x1="-140" y1="0" x2="140" y2="0" stroke="#B87333" strokeWidth=".8"/>
        <line x1="-140" y1="-5" x2="-140" y2="5" stroke="#B87333" strokeWidth=".8"/>
        <line x1="140" y1="-5" x2="140" y2="5" stroke="#B87333" strokeWidth=".8"/>
        <text x="0" y="-9" textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="18" fill="#B87333">± 0.1 mm</text>
      </g>
    </svg>
  );
}

export const PROCESS_SVGS = [WindingSVG, CuringSVG, GrindingSVG, WaxSVG, CutSVG];
