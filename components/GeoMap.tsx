
import React from 'react';

const GeoMap: React.FC = () => {
  const hotspots = [
    { id: 1, x: 20, y: 30, city: "MOSCOW", deals: "142" },
    { id: 2, x: 60, y: 45, city: "DUBAI", deals: "89" },
    { id: 3, x: 80, y: 70, city: "BALI", deals: "34" },
    { id: 4, x: 30, y: 25, city: "ST.PETERSBURG", deals: "56" },
    { id: 5, x: 25, y: 80, city: "SOCHI", deals: "41" },
  ];

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-[#0B1121] border border-indigo-500/20 rounded-[32px] overflow-hidden group">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* World Map Silhouette (Abstract CSS Shapes) */}
        <div className="absolute inset-0 opacity-10">
            {/* Rough shapes representing landmasses */}
            <div className="absolute top-[20%] left-[10%] w-[30%] h-[40%] bg-indigo-500 rounded-full blur-[60px]"></div>
            <div className="absolute top-[30%] right-[20%] w-[40%] h-[30%] bg-teal-500 rounded-full blur-[60px]"></div>
        </div>

        {/* Hotspots */}
        {hotspots.map((spot) => (
            <div 
                key={spot.id} 
                className="absolute group/spot cursor-pointer"
                style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
            >
                {/* Ping Animation */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-indigo-500/30 rounded-full animate-ping"></div>
                    <div className="absolute -inset-1 bg-teal-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white rounded-full relative z-10 shadow-[0_0_10px_white]"></div>
                </div>

                {/* Tooltip */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap z-20">
                    <div className="bg-[#0f172a]/90 backdrop-blur border border-indigo-500/30 p-2 rounded-lg shadow-xl flex flex-col">
                        <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">{spot.city}</span>
                        <span className="text-xs font-bold text-white">{spot.deals} ACTIVE DEALS</span>
                    </div>
                </div>
            </div>
        ))}

        {/* Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-transparent to-[#0B1121] pointer-events-none"></div>
        
        <div className="absolute bottom-4 left-6 text-[10px] font-mono text-slate-500">
            LIVE_GEO_TRACKING_ENABLED
        </div>
    </div>
  );
};

export default GeoMap;
