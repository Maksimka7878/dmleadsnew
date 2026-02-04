import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { CheckIcon, SparklesIcon } from '@heroicons/react/24/solid';

const Pricing: React.FC = () => {
  const [period, setPeriod] = useState<'monthly' | 'quarterly'>('monthly');

  const discount = 0.15; // 15% discount

  const plans = [
    {
      name: "Starter",
      basePrice: 25000,
      leads: "10-15 Лидов",
      color: "border-slate-200",
      btnColor: "bg-slate-800 hover:bg-slate-700",
      features: [
        "Теплый трафик",
        "Замена брака (до 10%)",
        "Личный кабинет",
        "Поддержка 24/7"
      ]
    },
    {
      name: "Growth",
      basePrice: 100000,
      leads: "50-60 Лидов",
      popular: true,
      color: "border-indigo-200",
      btnColor: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-200",
      features: [
        "Горячий трафик (В2С)",
        "Замена брака (100%)",
        "Интеграция с CRM",
        "Персональный менеджер",
        "Скрипты продаж"
      ]
    },
    {
      name: "Exclusive",
      basePrice: 350000,
      leads: "200+ Лидов",
      color: "border-teal-200",
      btnColor: "bg-gradient-to-r from-teal-600 to-emerald-600 hover:shadow-lg hover:shadow-teal-200",
      features: [
        "Премиум / Элит сегмент",
        "Эксклюзив на регион",
        "Разработка оффера",
        "Обучение отдела продаж",
        "Приоритетная открутка"
      ]
    }
  ];

  const getPrice = (base: number) => {
    if (period === 'monthly') return base.toLocaleString('ru-RU') + ' ₽';
    return (base * 3 * (1 - discount)).toLocaleString('ru-RU') + ' ₽ / кв';
  };

  return (
    <div className="w-full">
       <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Тарифы <span className="text-indigo-600">доступа</span>
          </h2>
          
          {/* Toggle Switch */}
          <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200 mb-8 relative">
              <button 
                 onClick={() => setPeriod('monthly')}
                 className={`px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all z-10 ${period === 'monthly' ? 'text-white' : 'text-slate-500'}`}
              >
                  Месяц
              </button>
              <button 
                 onClick={() => setPeriod('quarterly')}
                 className={`px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all z-10 ${period === 'quarterly' ? 'text-white' : 'text-slate-500'}`}
              >
                  Квартал (-15%)
              </button>
              {/* Sliding Background */}
              <div className={`absolute top-1 bottom-1 w-[50%] bg-indigo-600 rounded-lg transition-all duration-300 ${period === 'monthly' ? 'left-1' : 'left-[49%]'}`}></div>
          </div>

          <p className="text-slate-500 max-w-2xl mx-auto">
              Гибкие пакеты для частных брокеров и крупных агентств. Депозитная система.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {plans.map((plan, index) => (
           <TiltCard key={index} intensity={5} className={plan.popular ? "scale-105 z-10" : "scale-100 mt-0 md:mt-4"}>
              <div className={`
                 relative h-full bg-white border ${plan.popular ? 'border-indigo-200 shadow-2xl shadow-indigo-100' : 'border-slate-200 shadow-xl'} 
                 rounded-[32px] p-8 flex flex-col
              `}>
                 {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                        ХИТ ПРОДАЖ
                    </div>
                 )}

                 <div className="mb-6">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{plan.name}</div>
                    <div className="text-3xl font-black text-slate-900">{getPrice(plan.basePrice)}</div>
                    <div className="text-indigo-600 font-bold text-sm mt-1">{plan.leads}</div>
                 </div>

                 <div className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                                <CheckIcon className="w-3 h-3" />
                            </div>
                            <span className="text-sm font-medium text-slate-600">{feat}</span>
                        </div>
                    ))}
                 </div>

                 <button className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white transition-all ${plan.btnColor}`}>
                    ВЫБРАТЬ
                 </button>
              </div>
           </TiltCard>
        ))}
      </div>
    </div>
  );
};

export default Pricing;