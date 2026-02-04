import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Александр В.",
      role: "Частный брокер, Москва",
      result: "+4.2 млн ₽",
      text: "Работал с Яндекс.Директом 2 года, сливал бюджет. Подключил 'Business' пакет в DM Leads. За первый месяц закрыл 2 сделки в Сити. Качество звонков - небо и земля.",
      avatar: "bg-blue-500"
    },
    {
      name: "Елена С.",
      role: "АН 'Elite Home', Сочи",
      result: "+12 млн ₽",
      text: "Берем пакет 'Exclusive' уже полгода. Нравится, что лиды не дублируются. Менеджер помог настроить CRM, теперь видим весь путь клиента. Окупаемость x8.",
      avatar: "bg-purple-500"
    },
    {
      name: "Дмитрий К.",
      role: "Invest Broker, Дубай",
      result: "$85,000",
      text: "Искал клиентов на инвестиции. Здесь аудитория реально с деньгами. Скрипты, которые дали, помогли закрыть клиента на этаж. Рекомендую коллегам.",
      avatar: "bg-teal-500"
    }
  ];

  return (
    <div className="w-full">
       <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Партнеры <span className="text-indigo-600">говорят</span>
          </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
         {reviews.map((review, idx) => (
             <div key={idx} className="bg-white border border-slate-200 p-8 rounded-[32px] relative overflow-hidden group hover:shadow-xl transition-all shadow-lg">
                 
                 <div className="flex items-center justify-between mb-6 relative z-10">
                     <div className="flex items-center gap-3">
                         <div className={`w-10 h-10 rounded-full ${review.avatar} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                             {review.name.charAt(0)}
                         </div>
                         <div>
                             <div className="text-slate-900 font-bold text-sm">{review.name}</div>
                             <div className="text-slate-400 text-xs">{review.role}</div>
                         </div>
                     </div>
                     <div className="flex text-yellow-400">
                         {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-3 h-3" />)}
                     </div>
                 </div>

                 <div className="mb-6 relative z-10">
                     <p className="text-slate-600 text-sm leading-relaxed font-medium">"{review.text}"</p>
                 </div>

                 <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                     <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Результат</div>
                     <div className="text-lg font-mono font-black text-teal-600">{review.result}</div>
                 </div>
             </div>
         ))}
      </div>
    </div>
  );
};

export default Testimonials;