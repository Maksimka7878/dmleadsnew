import React, { useState, useEffect, useRef } from 'react';

const ComparisonSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const rows = [
    {
      parameter: "Запуск и настройка",
      traditional: "Долго (найм, тесты, бюджет)",
      dmLeads: "Мгновенно (доступ сегодня)"
    },
    {
      parameter: "Стоимость клиента",
      traditional: "Непредсказуемая (Аукцион)",
      dmLeads: "Фиксированная (Прайс)"
    },
    {
      parameter: "Качество заявок",
      traditional: "Много спама и недозвонов",
      dmLeads: "Верифицированные (Call-центр)"
    },
    {
      parameter: "Конкуренция",
      traditional: "Высокая (10 объявлений)",
      dmLeads: "Низкая (Лид в одни руки)"
    },
    {
      parameter: "Оплата за",
      traditional: "За клики (риск слива)",
      dmLeads: "Только за целевые контакты"
    }
  ];

  return (
    <div className="w-full" ref={sectionRef}>
      <div className="flex flex-col xl:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Visual Graphic - Light Mode */}
        <div className="w-full xl:w-5/12 relative">
           <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] rounded-full animate-pulse-slow"></div>
           
           <div className="relative bg-white border border-slate-200 rounded-[40px] p-8 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              {/* System Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Аналитика.exe</div>
              </div>

              {/* Chart Content */}
              <div className="space-y-8">
                 <div className="flex justify-between items-end">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                             <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                             <div className="text-xs font-bold uppercase tracking-wider text-teal-600">Рост эффективности</div>
                        </div>
                        <div className="text-5xl font-extrabold text-slate-900 tracking-tighter">2 391</div>
                        <div className="text-sm font-bold text-slate-400 mt-1">Квалифицированных лидов</div>
                    </div>
                    <div className="px-3 py-1.5 bg-slate-100 rounded-lg border border-slate-200 text-[10px] font-bold uppercase text-slate-500">
                        За неделю
                    </div>
                 </div>

                 {/* CSS Bars Graphic */}
                 <div className="h-64 flex items-end justify-between gap-4 pt-6 border-t border-slate-100 relative">
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                         <div className="border-t border-slate-300 w-full h-0"></div>
                         <div className="border-t border-slate-300 w-full h-0"></div>
                         <div className="border-t border-slate-300 w-full h-0"></div>
                         <div className="border-t border-slate-300 w-full h-0"></div>
                    </div>

                    {/* Bar 1 */}
                    <div 
                        className="w-full bg-slate-300 rounded-t-lg relative group transition-all duration-1000 ease-out-expo opacity-60"
                        style={{ height: isVisible ? '35%' : '0%' }}
                    >
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-slate-600 font-bold uppercase">SEO</div>
                    </div>
                    {/* Bar 2 */}
                    <div 
                        className="w-full bg-slate-400 rounded-t-lg relative group transition-all duration-1000 ease-out-expo delay-100 opacity-80"
                        style={{ height: isVisible ? '45%' : '0%' }}
                    >
                         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-white font-bold uppercase">КОНТЕКСТ</div>
                    </div>
                    {/* Bar 4 (Winner) */}
                    <div 
                        className="w-full bg-gradient-to-t from-indigo-600 to-indigo-500 rounded-t-xl relative shadow-lg shadow-indigo-200 group transition-all duration-1000 ease-out-expo delay-300 z-10"
                        style={{ height: isVisible ? '90%' : '0%' }}
                    >
                        <div className="absolute top-0 w-full h-[1px] bg-white/30"></div>
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="text-[10px] font-black text-indigo-600 bg-white px-2.5 py-1.5 rounded-lg border border-indigo-100 whitespace-nowrap shadow-md">DM Leads</div>
                            <div className="w-0.5 h-4 bg-indigo-500/50"></div>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Side: Comparison Table - Light Mode */}
        <div className="w-full xl:w-7/12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 leading-tight">
                Сравнение с <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">
                    самостоятельной рекламой
                </span>
            </h2>

            <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-xl bg-white">
                {/* Table Header */}
                <div className="grid grid-cols-10 bg-slate-50 border-b border-slate-200 p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <div className="col-span-4 pl-2">ПАРАМЕТР</div>
                    <div className="col-span-3 text-center hidden md:block">СВОЯ РЕКЛАМА</div>
                    <div className="col-span-3 text-center text-indigo-600">НАШ СЕРВИС</div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-slate-100">
                    {rows.map((row, idx) => (
                        <div 
                            key={idx} 
                            className={`grid grid-cols-1 md:grid-cols-10 p-6 hover:bg-slate-50 transition-all duration-500 items-center group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {/* Parameter Name */}
                            <div className="col-span-1 md:col-span-4 font-bold text-slate-900 pl-2 mb-2 md:mb-0 text-sm">
                                {row.parameter}
                            </div>
                            
                            {/* Traditional */}
                            <div className="col-span-1 md:col-span-3 text-sm text-slate-500 text-center bg-slate-100 md:bg-transparent p-3 md:p-0 rounded-xl mb-2 md:mb-0 font-medium border border-slate-200 md:border-none">
                                <span className="md:hidden font-bold text-slate-600 mr-2 text-xs uppercase">Реклама:</span>
                                {row.traditional}
                            </div>
                            
                            {/* DM Leads */}
                            <div className="col-span-1 md:col-span-3 text-sm font-bold text-indigo-700 text-center bg-indigo-50 md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none flex items-center justify-center border border-indigo-100 md:border-none">
                                <span className="md:hidden text-indigo-600 mr-2 text-xs uppercase">DM Leads:</span>
                                <span className="text-teal-600">{row.dmLeads}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ComparisonSection;