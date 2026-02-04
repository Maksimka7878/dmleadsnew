import React from 'react';
import { UserCircleIcon, AcademicCapIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import TiltCard from './TiltCard';

const SupportSection: React.FC = () => {
  const items = [
    {
      title: "Персональный менеджер",
      description: "Ваш личный стратег. Поможет выбрать выгодную локацию (ЖК/Район), настроить фильтры по бюджету клиента и даст рекомендации по увеличению конверсии в сделку.",
      icon: <UserCircleIcon className="w-8 h-8 text-indigo-600" />,
      borderColor: "border-slate-200",
      glowColor: "shadow-[0_0_30px_rgba(79,70,229,0.1)]",
      iconBg: "bg-indigo-50"
    },
    {
      title: "Скрипты и Обучение",
      description: "Не просто лиды, а инструменты продаж. Предоставим проверенные скрипты звонков, техники работы с возражениями и гайды по 'дожиму' клиентов в мессенджерах.",
      icon: <AcademicCapIcon className="w-8 h-8 text-purple-600" />,
      borderColor: "border-slate-200",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.1)]",
      iconBg: "bg-purple-50"
    },
    {
      title: "Техническая поддержка",
      description: "Поможем 'под ключ' настроить интеграцию с AmoCRM или Bitrix24. Настроим Telegram-бота для мгновенных уведомлений о новых заявках. Решаем вопросы за 15 минут.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-teal-600" />,
      borderColor: "border-slate-200",
      glowColor: "shadow-[0_0_30px_rgba(45,212,191,0.1)]",
      iconBg: "bg-teal-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <TiltCard 
          key={index} 
          intensity={8}
          className="h-full"
        >
            <div 
              className={`
                h-full relative overflow-hidden rounded-[40px] border bg-white p-10 
                transition-all duration-300 ${item.borderColor} hover:border-indigo-200 ${item.glowColor} hover:shadow-xl shadow-lg group
              `}
            >
              <div className="relative z-10">
                <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 ${item.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 font-medium group-hover:text-slate-600 transition-colors">
                    {item.description}
                </p>
              </div>
            </div>
        </TiltCard>
      ))}
    </div>
  );
};

export default SupportSection;