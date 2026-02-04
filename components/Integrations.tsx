import React from 'react';
import { CloudArrowUpIcon, CommandLineIcon, ChatBubbleLeftRightIcon, TableCellsIcon } from '@heroicons/react/24/solid';
import ScrollReveal from './ScrollReveal';

const Integrations: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded bg-indigo-50 border border-indigo-100 text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4">
              Синхронизация
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Мгновенная <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">интеграция</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
              Лиды поступают в вашу экосистему за 0.5 секунды через API, Webhooks или готовые модули.
          </p>
      </div>

      <div className="relative max-w-5xl mx-auto h-[400px] md:h-[300px] bg-white border border-slate-200 rounded-[40px] flex items-center justify-center overflow-hidden shadow-xl">
         {/* Cyber Circuit Lines Background */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%">
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                   <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="none" stroke="#6366f1" strokeWidth="1"/>
                   <path d="M50 10 L50 90" fill="none" stroke="#6366f1" strokeWidth="1"/>
                   <path d="M10 50 L90 50" fill="none" stroke="#6366f1" strokeWidth="1"/>
                   <circle cx="50" cy="50" r="3" fill="#6366f1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit)"/>
             </svg>
         </div>

         {/* Central Core */}
         <div className="relative z-20 w-32 h-32 bg-white rounded-full border-4 border-indigo-500 shadow-[0_0_60px_rgba(79,70,229,0.2)] flex items-center justify-center animate-pulse-slow">
             <div className="text-center">
                 <div className="text-2xl font-black text-slate-900">DM</div>
                 <div className="text-[9px] font-bold text-indigo-500 uppercase">ЯДРО API</div>
             </div>
             {/* Radiating Lines */}
             <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-ping opacity-20"></div>
         </div>

         {/* Orbiting Planets (Logos) */}
         <div className="absolute inset-0 flex items-center justify-center">
             {/* AmoCRM */}
             <div className="absolute top-10 md:top-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 flex flex-col items-center group">
                 <div className="w-16 h-16 bg-white border border-blue-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                    <CloudArrowUpIcon className="w-8 h-8 text-blue-500" />
                 </div>
                 <span className="mt-2 text-xs font-bold text-slate-600">AmoCRM</span>
                 {/* Connector Line */}
                 <div className="hidden md:block absolute top-1/2 -right-24 w-24 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 opacity-50"></div>
             </div>

             {/* Bitrix24 */}
             <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:right-20 flex flex-col items-center group">
                 <div className="w-16 h-16 bg-white border border-cyan-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                    <CommandLineIcon className="w-8 h-8 text-cyan-500" />
                 </div>
                 <span className="mt-2 text-xs font-bold text-slate-600">Bitrix24</span>
                  {/* Connector Line */}
                 <div className="hidden md:block absolute top-1/2 -left-24 w-24 h-0.5 bg-gradient-to-l from-cyan-300 to-indigo-300 opacity-50"></div>
             </div>

             {/* Telegram */}
             <div className="absolute left-6 md:left-auto md:top-10 md:right-20 flex flex-col items-center group">
                 <div className="w-16 h-16 bg-white border border-sky-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                    <ChatBubbleLeftRightIcon className="w-8 h-8 text-sky-500" />
                 </div>
                 <span className="mt-2 text-xs font-bold text-slate-600">Telegram</span>
             </div>

             {/* Excel/Sheets */}
             <div className="absolute right-6 md:right-auto md:bottom-10 md:left-20 flex flex-col items-center group">
                 <div className="w-16 h-16 bg-white border border-green-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                    <TableCellsIcon className="w-8 h-8 text-green-500" />
                 </div>
                 <span className="mt-2 text-xs font-bold text-slate-600">Google Sheets</span>
             </div>
         </div>
      </div>
    </div>
  );
};

export default Integrations;