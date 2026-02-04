import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {
    PhoneIcon,
    ShieldCheckIcon,
    BanknotesIcon,
    ClockIcon,
    WrenchScrewdriverIcon,
    RectangleStackIcon
} from '@heroicons/react/24/outline';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Откуда приходят лиды и как вы их проверяете?",
            answer: "Мы генерируем трафик через контекстную рекламу, SEO и посевы в Telegram каналах по элитной недвижимости. Каждый лид проходит двухэтапную проверку: автоматический скоринг на дубли/спам и ручной прозвон оператором колл-центра для подтверждения бюджета от 50 млн руб. и интереса к покупке квартиры в Москве.",
            icon: <RectangleStackIcon className="w-6 h-6 text-indigo-500" />
        },
        {
            question: "Вы продаете лиды в одни руки?",
            answer: "Да, это наше ключевое правило. Один верифицированный лид передается строго одному партнеру (брокеру или агентству элитной недвижимости). Мы не создаем искусственную конкуренцию на одном клиенте, обеспечивая высокую конверсию.",
            icon: <ShieldCheckIcon className="w-6 h-6 text-purple-500" />
        },
        {
            question: "Как быстро я получу контакт после заявки клиента?",
            answer: "Передача происходит в режиме реального времени. Как только оператор колл-центра ставит статус 'Квалифицирован', заявка на подбор недвижимости мгновенно отправляется в вашу CRM или Telegram-бот.",
            icon: <ClockIcon className="w-6 h-6 text-blue-500" />
        },
        {
            question: "Какие ниши и регионы доступны?",
            answer: "Мы специализируемся на жилой недвижимости (Новостройки бизнес-класса, Вторичка, Пентхаусы) классов Премиум и Элит. Основные регионы: Москва (ЦАО, Сити), Санкт-Петербург, Сочи, Дубай, Бали. Возможен запуск под ваш эксклюзивный регион.",
            icon: <BanknotesIcon className="w-6 h-6 text-teal-500" />
        },
        {
            question: "Есть ли интеграция с CRM?",
            answer: "Да, у нас готовы интеграции с AmoCRM и Bitrix24. Лиды на недвижимость падают сразу в воронку продаж. Также возможна отправка уведомлений в Telegram или на Email для моментальной реакции брокера.",
            icon: <WrenchScrewdriverIcon className="w-6 h-6 text-orange-500" />
        },
        {
            question: "Что делать, если лид окажется некачественным?",
            answer: "Мы предоставляем гарантию замены (брак). Если контакт не соответствует заявленным критериям (недозвон более 3 раз, не тот регион, нет бюджета на покупку), мы бесплатно заменим его на новый. Мы ценим бюджет каждого брокера.",
            icon: <PhoneIcon className="w-6 h-6 text-red-500" />
        }
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`bg-white border ${openIndex === index ? 'border-indigo-200 shadow-lg' : 'border-slate-200'} rounded-[32px] overflow-hidden transition-all duration-300`}
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                    >
                        <div className="flex items-center space-x-5 md:space-x-8">
                            <div className={`p-3.5 rounded-2xl ${openIndex === index ? 'bg-indigo-50' : 'bg-slate-50 group-hover:bg-slate-100'} transition-colors duration-300 border border-slate-100`}>
                                {faq.icon}
                            </div>
                            <span className={`font-bold text-lg md:text-xl ${openIndex === index ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'} transition-colors`}>
                                {faq.question}
                            </span>
                        </div>
                        <div className={`p-2 rounded-full ${openIndex === index ? 'bg-indigo-50' : 'bg-transparent'} transition-colors duration-300`}>
                            <ChevronDownIcon
                                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-indigo-500' : ''}`}
                            />
                        </div>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-8 pt-0 pl-[6.5rem] text-slate-500 leading-relaxed text-sm md:text-base pr-8 font-medium">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;