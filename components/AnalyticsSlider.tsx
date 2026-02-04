import React, { useState } from 'react';
import { ChartBarIcon, ArrowTrendingUpIcon, FunnelIcon, CpuChipIcon } from '@heroicons/react/24/solid';

const AnalyticsSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      label: "КОНВЕРСИЯ",
      title: "Конверсия в сделку",
      icon: <ChartBarIcon className="w-4 h-4" />,
      content: (
        <div className="flex items-end justify-center h-full w-full gap-8 md:gap-16 px-4 pb-4 relative">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-100"></div>

          {/* Standard Market Bar */}
          <div className="flex flex-col items-center group relative z-10 w-24 md:w-32">
            <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded border border-slate-300 whitespace-nowrap font-bold">
                Холодный обзвон
            </div>
            <div className="w-full bg-slate-200 rounded-t-xl relative overflow-hidden h-[60px] border border-slate-300 group-hover:border-red-400 transition-colors">
               <div className="absolute bottom-0 w-full text-center text-slate-500 font-mono font-bold py-2 text-sm">0.8%</div>
            </div>
            <div className="mt-3 text-[10px] text-slate-400 text-center font-bold uppercase tracking-widest">
              Рынок
            </div>
          </div>

          {/* DM Leads Bar */}
          <div className="flex flex-col items-center group relative z-10 w-24 md:w-32">
             <div className="absolute -top-16 bg-indigo-50 text-indigo-600 border border-indigo-100 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg animate-bounce whitespace-nowrap">
                x6.5 Рост
            </div>
            <div className="w-full bg-gradient-to-t from-indigo-600 to-indigo-500 rounded-t-xl relative overflow-hidden h-[240px] shadow-2xl shadow-indigo-200 border-t border-x border-indigo-400 group-hover:h-[250px] transition-all duration-500">
               {/* Scanline */}
               <div className="absolute top-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent animate-shimmer" style={{backgroundSize: '100% 200%'}}></div>
               
               <div className="absolute top-4 w-full text-center text-white font-black text-3xl drop-shadow-md">5.2%</div>
            </div>
             <div className="mt-3 text-xs text-indigo-600 text-center font-black uppercase tracking-widest flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              DM Leads
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      label: "ИСТОЧНИКИ",
      title: "Качество источников",
      icon: <ArrowTrendingUpIcon className="w-4 h-4" />,
      content: (
        <div className="w-full h-full flex flex-col justify-center space-y-6 px-4 md:px-12 relative z-10">
          {[
            { name: "Контекст (Премиум)", val: 45, color: "bg-blue-500", shadow: "shadow-blue-200" },
            { name: "Telegram Посевы", val: 35, color: "bg-purple-500", shadow: "shadow-purple-200" },
            { name: "CPA Партнеры", val: 20, color: "bg-teal-500", shadow: "shadow-teal-200" }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
               <div className="flex justify-between text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">
                  <span className="flex items-center gap-2">
                     <CpuChipIcon className="w-3 h-3 text-slate-400" />
                     {item.name}
                  </span>
                  <span className="font-mono text-slate-900">{item.val}%</span>
               </div>
               
               {/* Cyber Bar Background */}
               <div className="w-full h-4 bg-slate-100 rounded-sm border border-slate-200 relative overflow-hidden">
                   {/* Grid Lines inside bar */}
                   <div className="absolute inset-0 flex">
                       {[...Array(10)].map((_, i) => (
                           <div key={i} className="flex-1 border-r border-slate-200 h-full"></div>
                       ))}
                   </div>
                   
                   {/* Fill */}
                   <div 
                      className={`h-full ${item.color} relative transition-all duration-1000 ease-out`}
                      style={{ width: `${item.val}%` }}
                   >
                       <div className={`absolute right-0 top-0 bottom-0 w-1 bg-white/50`}></div>
                   </div>
               </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 2,
      label: "ВОРОНКА",
      title: "Воронка Продаж",
      icon: <FunnelIcon className="w-4 h-4" />,
      content: (
        <div className="w-full h-full flex items-center justify-center px-4 relative z-10">
           <div className="w-full max-w-sm space-y-2 relative flex flex-col items-center">
              
              {/* Step 1 */}
              <div className="w-full bg-white p-4 rounded-xl border border-slate-200 text-center relative shadow-sm">
                 <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Сырые Данные</div>
                 <div className="text-slate-900 font-bold text-sm">Входящий Трафик</div>
              </div>
              
              {/* Connector */}
              <div className="h-6 w-0.5 bg-gradient-to-b from-slate-300 to-indigo-500"></div>

              {/* Step 2 (The Filter) */}
              <div className="w-[85%] bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-xl shadow-lg text-center relative">
                 <div className="text-[10px] text-indigo-100 font-bold uppercase tracking-widest mb-1">AI Обработка</div>
                 <div className="text-white font-bold text-sm">AI Фильтрация</div>
              </div>

               {/* Connector */}
              <div className="h-6 w-0.5 bg-gradient-to-b from-indigo-500 to-teal-400"></div>

              {/* Step 3 (The Gem) */}
              <div className="w-[65%] bg-gradient-to-r from-teal-500 to-emerald-500 p-5 rounded-2xl text-center relative shadow-xl shadow-teal-200 transform hover:scale-105 transition-transform cursor-pointer group">
                 <span className="text-sm text-white font-black flex justify-center items-center gap-2 uppercase tracking-wide relative z-10">
                   Сделка
                 </span>
              </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* HUD Container */}
      <div className="relative bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[500px] md:h-[400px]">
        
        {/* Left Side: Navigation / Menu */}
        <div className="w-full md:w-1/3 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-6 flex flex-col">
            <div className="mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">ВИЗУАЛИЗАЦИЯ</div>
            </div>

            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 no-scrollbar">
                {slides.map((slide, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`
                            flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 border
                            ${currentSlide === idx 
                                ? 'bg-white border-slate-200 shadow-md text-slate-900' 
                                : 'bg-transparent border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-100'}
                        `}
                    >
                        <div className={`p-2 rounded-lg ${currentSlide === idx ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                            {slide.icon}
                        </div>
                        <div className="min-w-0">
                            <div className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-0.5">{slide.label}</div>
                            <div className="text-sm font-bold truncate">{slide.title}</div>
                        </div>
                    </button>
                ))}
            </div>

            <div className="mt-auto hidden md:block pt-6 border-t border-slate-200">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>ДАННЫЕ LIVE</span>
                    <span className="text-green-500 font-bold">ОНЛАЙН</span>
                </div>
            </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full md:w-2/3 bg-slate-50 relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
             
             {/* Slide Content with Transition */}
             <div className="relative w-full h-full flex items-center justify-center p-6 md:p-12">
                 <div key={currentSlide} className="w-full h-full animate-fade-in-up">
                    {slides[currentSlide].content}
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSlider;