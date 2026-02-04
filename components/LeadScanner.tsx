import React, { useState, useEffect } from 'react';
import { 
  ShieldCheckIcon, 
  UserIcon, 
  BanknotesIcon, 
  MapPinIcon, 
  CheckCircleIcon,
  CpuChipIcon
} from '@heroicons/react/24/solid';

const LeadScanner: React.FC = () => {
  const [step, setStep] = useState(0);
  const [leadId, setLeadId] = useState(84920);

  const steps = [
    { label: "ПЕРВИЧНОЕ_СКАНИРОВАНИЕ", status: "Сканирование...", color: "text-slate-400" },
    { label: "АНТИ-СПАМ", status: "Проверка Базы", color: "text-indigo-600" },
    { label: "ВЕРИФИКАЦИЯ БЮДЖЕТА", status: "Анализ Платежеспособности", color: "text-purple-600" },
    { label: "ГЕО_ЛОКАЦИЯ", status: "Определение Региона", color: "text-blue-600" },
    { label: "ФИНАЛЬНЫЙ СКОРИНГ", status: "ОДОБРЕНО: 98/100", color: "text-teal-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= steps.length - 1) {
            // Reset after a pause
            setTimeout(() => {
                setStep(0);
                setLeadId(prevId => prevId + 1);
            }, 2000);
            return prev;
        }
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto relative group">
       
       <div className="relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-slate-50 p-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  AI_ЯДРО_V3.EXE
              </div>
          </div>

          {/* Content */}
          <div className="p-6 font-mono text-xs relative">
              {/* Scan Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-500/30 animate-[shimmer_2s_linear_infinite]" style={{top: `${(step / (steps.length - 1)) * 100}%`, transition: 'top 0.5s ease'}}></div>

              <div className="space-y-4">
                  <div className="flex justify-between border-b border-slate-100 pb-2 mb-4">
                      <span className="text-slate-400">ID_ЦЕЛИ:</span>
                      <span className="text-slate-900 font-bold">#{leadId}</span>
                  </div>

                  {steps.map((s, idx) => (
                      <div key={idx} className={`flex items-center justify-between transition-all duration-300 ${idx > step ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}>
                          <div className="flex items-center gap-3">
                              {idx < step ? (
                                  <CheckCircleIcon className="w-4 h-4 text-teal-500" />
                              ) : idx === step ? (
                                  <CpuChipIcon className="w-4 h-4 text-indigo-500 animate-spin" />
                              ) : (
                                  <div className="w-4 h-4 rounded-full border border-slate-200"></div>
                              )}
                              <span className={`${idx === step ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
                                  {s.label}
                              </span>
                          </div>
                          <span className={`${idx <= step ? s.color : 'text-slate-400'}`}>
                              {idx <= step ? s.status : 'Ожидание'}
                          </span>
                      </div>
                  ))}
                  
                  {step === steps.length - 1 && (
                      <div className="mt-6 p-3 bg-teal-50 border border-teal-200 rounded text-center animate-pulse">
                          <span className="text-teal-600 font-bold uppercase tracking-wider">
                              Лид Верифицирован &rarr; CRM
                          </span>
                      </div>
                  )}
              </div>
          </div>
       </div>
    </div>
  );
};

export default LeadScanner;