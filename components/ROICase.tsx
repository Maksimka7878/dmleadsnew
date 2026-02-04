import React from 'react';
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, ExclamationTriangleIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import TiltCard from './TiltCard';

const ROICase: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-start">
      
      {/* Left Text Content */}
      <div className="lg:w-5/12 sticky top-32">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">ФИНАНСОВОЕ ЯДРО</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[0.95] mb-8 tracking-tight">
          Качество лидов — <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500">
            драйвер
          </span> <br />
          вашей прибыли
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
          Получите несправедливое преимущество. Пока конкуренты сливают бюджет на "мусорный" трафик, вы закрываете сделки с верифицированными клиентами.
        </p>
        
        <div className="hidden lg:block p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="relative z-10">
               <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                     <ArrowTrendingUpIcon className="w-7 h-7 text-teal-600" />
                  </div>
                  <div>
                     <div className="text-slate-900 font-extrabold text-xl tracking-tight">Масштабирование</div>
                     <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Стратегия роста</div>
                  </div>
               </div>
               <p className="text-sm text-slate-500 leading-relaxed">
                 С DM Leads вы можете увеличить количество сделок в 2-3 раза за месяц. Просто докупите объем лидов в личном кабинете. Никаких настроек рекламы.
               </p>
           </div>
        </div>
      </div>

      {/* Right Cards Content */}
      <div className="lg:w-7/12 space-y-8">
        
        {/* Card 1: The Failure (Was) - Light Mode */}
        <div className="relative bg-white border border-red-100 rounded-[40px] p-8 overflow-hidden group shadow-lg">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 blur-[80px] rounded-full pointer-events-none"></div>

           <div className="relative z-10">
               <div className="flex justify-between items-start mb-8">
                   <div>
                       <span className="px-3 py-1.5 rounded-lg bg-red-50 border border-red-100 text-red-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                         <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                         СТАТУС: КРИТИЧЕСКИЙ
                       </span>
                       <h3 className="text-2xl font-bold text-slate-800 mt-4 max-w-sm">
                         Своя реклама
                       </h3>
                   </div>
                   <ExclamationTriangleIcon className="w-12 h-12 text-red-100" />
               </div>

               {/* Metric Grid */}
               <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="bg-slate-50 p-4 rounded-2xl border border-red-100">
                       <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Расход</div>
                       <div className="text-xl font-mono text-slate-700">200 000 ₽</div>
                   </div>
                   <div className="bg-slate-50 p-4 rounded-2xl border border-red-100">
                       <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">ROI</div>
                       <div className="text-xl font-mono text-red-500">-25%</div>
                   </div>
                   <div className="col-span-2 bg-slate-50 p-4 rounded-2xl border border-red-100 flex justify-between items-center">
                       <div>
                           <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Чистый убыток</div>
                           <div className="text-2xl font-mono font-bold text-red-500">- 50 000 ₽</div>
                       </div>
                       <ArrowTrendingDownIcon className="w-8 h-8 text-red-200" />
                   </div>
               </div>
               
               <p className="text-xs text-red-500/80 font-mono border-t border-red-100 pt-4">
                  &gt;&gt; ОШИБКА: Низкая конверсия.<br/>
                  &gt;&gt; ВНИМАНИЕ: Риск слива бюджета 95%.
               </p>
           </div>
        </div>


        {/* Card 2: The Success (Became) - Light Mode */}
        <TiltCard intensity={10} className="w-full">
            <div className="relative bg-white border border-indigo-100 rounded-[40px] p-8 md:p-10 shadow-xl shadow-indigo-100 overflow-hidden group">
            
            {/* Holographic Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                    <div>
                        <span className="px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-100 text-teal-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 w-fit">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-[pulse_2s_infinite]"></div>
                            СТАТУС: ОПТИМАЛЬНЫЙ
                        </span>
                        <h3 className="text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
                            Система <span className="text-indigo-600">DM Leads</span>
                        </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                        <CheckBadgeIcon className="w-7 h-7 text-white" />
                    </div>
                </div>

                {/* HUD Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {/* Metric 1 */}
                    <div className="bg-slate-50 p-5 rounded-3xl border border-indigo-100 group/metric transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">Инвестиции</div>
                        </div>
                        <div className="text-xl md:text-2xl font-mono font-bold text-slate-900 tracking-tight">200k ₽</div>
                    </div>
                    
                    {/* Metric 2 */}
                    <div className="bg-slate-50 p-5 rounded-3xl border border-indigo-100 group/metric transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <div className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Выручка</div>
                        </div>
                        <div className="text-xl md:text-2xl font-mono font-bold text-slate-900 tracking-tight">900k ₽</div>
                    </div>

                    {/* Main Result */}
                    <div className="col-span-2 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-3xl border border-indigo-100 relative overflow-hidden">
                        <div className="relative flex justify-between items-end">
                            <div>
                                <div className="text-xs text-indigo-500 font-black uppercase tracking-widest mb-1">Чистая прибыль</div>
                                <div className="text-3xl md:text-4xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                    + 700 000 ₽
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-teal-700 font-bold bg-teal-100 px-2 py-1 rounded mb-1 inline-block">+350%</div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase">ROI</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Прогноз: <span className="text-slate-900 font-bold">Положительная динамика</span>. Рекомендовано масштабирование.</span>
                </div>
            </div>
            </div>
        </TiltCard>

      </div>
    </div>
  );
};

export default ROICase;