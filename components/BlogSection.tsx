import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const BlogSection: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const articles = [
        {
            id: 1,
            title: "Как купить качественные лиды на недвижимость в 2024 году",
            summary: "Эффективная лидогенерация для риелторов требует современного подхода. Узнайте, как купить лиды на недвижимость, проверенные ИИ, и избежать потери бюджета на нецелевые звонки.",
            content: `
        <p class="mb-4">Рынок недвижимости меняется, и старые методы поиска клиентов, такие как холодные звонки, теряют эффективность. Чтобы <strong>купить лиды на недвижимость</strong> высокого качества, брокерам необходимо обращать внимание на источники трафика и методы верификации.</p>
        <h3 class="text-lg font-bold text-slate-800 mb-2">Почему важен подтвержденный бюджет?</h3>
        <p class="mb-4">Многие сервисы предлагают дешевые заявки, но часто это просто "пустышки". В системе DM Leads каждый лид проходит через нейросеть, которая анализирует платежеспособность и реальные намерения клиента. Это позволяет риелторам работать только с теми, кто готов к сделке.</p>
        <h3 class="text-lg font-bold text-slate-800 mb-2">Преимущества автоматизации</h3>
        <p>Использование готовых заявок освобождает время для показов и переговоров. Вместо того чтобы тратить часы на прозвон баз, вы получаете входящий поток заинтересованных клиентов, ищущих элитную недвижимость в Москве и других регионах.</p>
      `
        },
        {
            id: 2,
            title: "Лиды для брокеров: Сравнение источников",
            summary: "Где брать клиентов частному маклеру? Сравниваем контекстную рекламу, доски объявлений и специализированные биржи лидов. Плюсы и минусы каждого канала.",
            content: `
        <p class="mb-4">Каждый брокер сталкивается с вопросом: откуда брать клиентов? Рассмотрим основные каналы получения <strong>лидов для брокеров</strong>.</p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Контекстная реклама (Яндекс.Директ)</strong>: Высокая стоимость клика, необходимость настройки и ведения кампаний. Подходит для агентств с бюджетом.</li>
            <li><strong>Доски объявлений (Авито, Циан)</strong>: Много конкуренции, клиенты часто "просто смотрят". Низкая конверсия в сделку.</li>
            <li><strong>Покупка готовых лидов (Лидогенерация)</strong>: Оплата за результат. Вы получаете контакт человека, который уже оставил заявку на подбор. Это самый быстрый способ получить клиентов здесь и сейчас.</li>
        </ul>
        <p>DM Leads предлагает уникальное решение — аукцион верифицированных лидов, где вы платите только за целевые контакты.</p>
      `
        },
        {
            id: 3,
            title: "Маркетинг в недвижимости: Тренды и Инсайты",
            summary: "Как привлекать клиентов на покупку квартир без огромных вложений. Секреты успешных агентств недвижимости и роль CRM-систем в обработке заявок.",
            content: `
        <p class="mb-4">Успешный <strong>маркетинг в недвижимости</strong> строится на доверии и скорости реакции. Клиент, оставивший заявку, ждет звонка в течение 5-10 минут. Если вы не перезвонили, он уйдет к конкуренту.</p>
        <h3 class="text-lg font-bold text-slate-800 mb-2">Роль CRM</h3>
        <p class="mb-4">Без CRM системы невозможно качественно обработать большой поток лидов. Интеграция DM Leads с популярными CRM позволяет автоматически выгружать заявки и ставить задачи менеджерам.</p>
        <p>Инвестируйте в качество сервиса, а поток клиентов обеспечит наша система лидогенерации.</p>
      `
        }
    ];

    const toggleArticle = (id: number) => {
        if (expanded === id) {
            setExpanded(null);
        } else {
            setExpanded(id);
        }
    };

    return (
        <section className="py-12 bg-slate-100 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-slate-400 mb-8 uppercase tracking-widest text-center text-sm">Полезные Материалы</h2>
                <div className="grid gap-4">
                    {articles.map((article) => (
                        <article key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                            <div
                                className="p-4 cursor-pointer flex justify-between items-center hover:bg-slate-50 transition-colors"
                                onClick={() => toggleArticle(article.id)}
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 hover:text-indigo-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-1">{article.summary}</p>
                                </div>
                                <div className="ml-4 text-slate-400">
                                    {expanded === article.id ? (
                                        <ChevronUpIcon className="w-5 h-5" />
                                    ) : (
                                        <ChevronDownIcon className="w-5 h-5" />
                                    )}
                                </div>
                            </div>

                            {expanded === article.id && (
                                <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
