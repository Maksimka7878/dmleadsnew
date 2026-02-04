import React from 'react';

const RunningLine: React.FC = () => {
  const items = [
    "НОВЫЙ ЛИД: ПЕНТХАУС, МОСКВА СИТИ •",
    "СДЕЛКА ЗАКРЫТА: +4.2М ₽ •",
    "НОВЫЙ ПАРТНЕР: WHITEOAK REALTY •",
    "СТАТУС СИСТЕМЫ: ОПТИМАЛЬНО •",
    "ИСТОЧНИК: TELEGRAM ADS •",
    "КОНТАКТ ВЕРИФИЦИРОВАН: +7 (999) ... •",
    "НОВЫЙ ЛИД: ВИЛЛА, PALM JUMEIRAH •"
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200 py-3 select-none">
      <div className="flex animate-shimmer whitespace-nowrap w-[200%]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-8 mx-4">
             {items.map((text, idx) => (
                <span key={idx} className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span>
                   {text}
                </span>
             ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-shimmer {
            animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RunningLine;