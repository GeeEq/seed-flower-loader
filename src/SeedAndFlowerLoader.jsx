import React from "react";

export default function SeedAndFlowerLoader() {
  const bg = "#111827"; // dark blue-gray
  const light = "#7FD3FF"; // light blue

  const svgSize = 100;
  const viewBox = "0 0 200 200";

  return (
    <div
    ststyle={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: bg,
      }}
      >
    
     <svg viewBox={viewBox}
       width={svgSize}
       height={svgSize}
       xmlns="http://www.w3.org/2000/svg"
       role="img"
       aria-label="Seed of life rotating inside Flower of Life loader">

       <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
           <feGaussianBlur stdDeviation="2.8" result="coloredBlur" />
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

       {/* Flower of Life pattern centered */}
         <g transform="translate(100,100)" filter="url(#softGlow)">
         <g fill="none" stroke={light} strokeWidth="1.6" strokeOpacity="0.95">
         <circle cx="0" cy="0" r="46" />
         <circle cx="0" cy="-46" r="46" />
         <circle cx="39.86" cy="-23" r="46" />
         <circle cx="39.86" cy="23" r="46" />
         <circle cx="0" cy="46" r="46" />
         <circle cx="-39.86" cy="23" r="46" />
         <circle cx="-39.86" cy="-23" r="46" />
         </g>
         </g>

      </svg>
    </div>
  );
}
