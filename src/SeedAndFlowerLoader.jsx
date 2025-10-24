import React from "react";

const SeedAndFlowerLoader = ({ size = 100, seedScale = 1, speed = 4 }) => { 
  const bg = "#111827"; 
  const light = "#7FD3FF"; 

  return (
    <div
    style={{
      width: `{size}px`,
      height: `{size}px`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: bg,
      }}
      >
    
     <svg viewBox="0 0 200 200"
       width={size}
       height={size}
       xmlns="http://www.w3.org/2000/svg"
       role="img"
       aria-label="Seed of life rotating inside Flower of Life loader">

       <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
           <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
           <feMerge>
           <feMergeNode in="coloredBlur" />
           <feMergeNode in="SourceGraphic" />
           </feMerge>
        </filter>


        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
           <feGaussianBlur stdDeviation="6" result="biggerBlur" />
           <feMerge>
           <feMergeNode in="biggerBlur" />
           <feMergeNode in="SourceGraphic" />
           </feMerge>
        </filter>
       </defs>

  {/*  Flower of Life (static, outer pattern) */}
        <g
          className="flower-rotate"
          transform="translate(100,100)"
          fill="none"
          stroke={light}
          strokeWidth="1.9"
          strokeOpacity="0.6"
          filter="url(#glow)"
        >
 {/* Central circle */}
          {/* <circle cx="0" cy="0" r="35" /> */}
 {/* Surrounding circles */}
          <circle cx="0" cy="-40" r="40" />
          <circle cx="34.64" cy="-20" r="40" />
          <circle cx="34.64" cy="20" r="40" />
          <circle cx="0" cy="40" r="40" />
          <circle cx="0" cy="0" r="80" />
          <circle cx="-34.64" cy="20" r="40" />
          <circle cx="-34.64" cy="-20" r="40" />
        </g>
  {/*  Seed of Life (inner, rotating) */}
        <g
          className="seed-rotate"
          transform="translate(100,100)"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <g transform={`scale(${seedScale})`}>
            <g
              filter="url(#glow)"
              fill="none"
              stroke={light}
              strokeWidth="1.9"
              strokeOpacity="0.6"
            >
              {/* <circle cx="0" cy="0" r="18" /> */}
              <circle cx="0" cy="-18" r="18" />
              <circle cx="15.588" cy="-9" r="18" />
              <circle cx="15.588" cy="9" r="18" />
              <circle cx="0" cy="18" r="18" />
              <circle cx="-15.588" cy="9" r="18" />
              <circle cx="-15.588" cy="-9" r="18" />
            </g>
            <circle cx="0" cy="0" r="2" fill={light} fillOpacity="1.9" filter="url(#glow)" />
          </g>
        </g>
          
          <style>{`
          .seed-rotate {
            animation: spin ${speed}s linear infinite;
          }
          .flower-rotate {
          animation: spinReverse ${speed}s linear infinite;
          }
          @keyframes spin {
           from { transform: translate(100px, 100px) rotate(0deg); }
              to { transform: translate(100px, 100px) rotate(360deg); }
          }
          @keyframes spinReverse {
          from { transform: translate(100px, 100px) rotate(0deg);}
          to {transform: translate(100px, 100px) rotate(-360deg);}}

`}</style>

      </svg>
    </div>
  );
}

export default SeedAndFlowerLoader;