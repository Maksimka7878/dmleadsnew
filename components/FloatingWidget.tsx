import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const FloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [latency, setLatency] = useState(14);
  const [leads, setLeads] = useState(12439);

  useEffect(() => {
     const interval = setInterval(() => {
         setLatency(prev => Math.max(10, Math.min(50, prev + (Math.random() - 0.5) * 10)));
         if (Math.random() > 0.7) setLeads(prev => prev + 1);
     }, 2000);
     return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
       <div 
         className={`
            bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden transition-all duration-300
            ${isOpen ? 'w-64 h-auto' : 'w-12 h-12 rounded-full cursor-pointer hover:bg-slate-50'}
         `}
         onClick={() => !isOpen && setIsOpen(true)}
       >
          {isOpen ? (
              <div className="p-4 relative">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                    className="absolute top-2 right-2 p-1 hover:bg-slate-100 rounded-full"
                  >
                     <ChevronUpIcon className="w-4 h-4 text-slate-500 rotate-180" />
                  </button>

                  <div className="flex items-center gap-2 mb-4">
                      <div className="relative">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-50"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">СИСТЕМА ОНЛАЙН</span>
                  </div>

                  <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500 font-mono">ПИНГ СЕРВЕРА</span>
                          <span className={`font-mono font-bold ${latency < 20 ? 'text-teal-600' : 'text-yellow-600'}`}>
                             {Math.floor(latency)}ms
                          </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500 font-mono">ВСЕГО ЛИДОВ</span>
                          <span className="font-mono font-bold text-indigo-600">
                             {leads.toLocaleString()}
                          </span>
                      </div>
                      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 animate-[shimmer_2s_linear_infinite]" style={{width: '60%'}}></div>
                      </div>
                  </div>
              </div>
          ) : (
             <div className="w-full h-full flex items-center justify-center">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             </div>
          )}
       </div>
    </div>
  );
};

export default FloatingWidget;