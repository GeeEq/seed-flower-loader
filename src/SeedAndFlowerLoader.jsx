import React from "react";

export default function SeedAndFlowerLoader() {
  const bg = "#111827"; // dark blue-gray
  const light = "#7FD3FF"; // light blue

  const svgSize = 100;
  const viewBox = "0 0 200 200";

  return (
    <div
    style={{
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

         {/* Centered and rotating Seed of Life */}
         <g
           transform="translate(100,100)"
           className="seed-rotate"
          >

        <g filter="url(#glow)" fill="none" stroke={light} strokeWidth="2.2" strokeOpacity="0.98">
        <circle cx="0" cy="0" r="18" />
        <circle cx="0" cy="-18" r="18" />
        <circle cx="15.588" cy="-9" r="18" />
        <circle cx="15.588" cy="9" r="18" />
        <circle cx="0" cy="18" r="18" />
        <circle cx="-15.588" cy="9" r="18" />
        <circle cx="-15.588" cy="-9" r="18" />
         </g>
        <circle cx="0" cy="0" r="6" fill={light} fillOpacity="0.9" filter="url(#glow)" />
         </g>
          
          <style>{`
          .seed-rotate {
           animation: spin 4s linear infinite;
           }

           @keyframes spin {
           0% { transform: rotate(0deg); }
           100% { transform: rotate(360deg); }
            }

           .seed-rotate circle[fill] {
             animation: pulse 2.6s ease-in-out infinite;
            }

           @keyframes pulse {
            0% { r: 6; opacity: 0.95; filter: drop-shadow(0 0 6px ${light}); }
            50% { r: 7; opacity: 1; filter: drop-shadow(0 0 12px ${light}); }
            100% { r: 6; opacity: 0.95; filter: drop-shadow(0 0 6px ${light}); }
             }
`}</style>

      </svg>
    </div>
  );
}
