import React, { useState, Suspense } from 'react';

// Critical components (Above the fold)
import Background from './components/Background';
import LeadForm from './components/LeadForm';
import TiltCard from './components/TiltCard';
import Typewriter from './components/Typewriter';
import MagneticButton from './components/MagneticButton';
import RunningLine from './components/RunningLine';
import LeadScanner from './components/LeadScanner';

// Lazy loaded components (Below the fold)
const AnalyticsSlider = React.lazy(() => import('./components/AnalyticsSlider'));
const ComparisonSection = React.lazy(() => import('./components/ComparisonSection'));
const ROICase = React.lazy(() => import('./components/ROICase'));
const SupportSection = React.lazy(() => import('./components/SupportSection'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Integrations = React.lazy(() => import('./components/Integrations'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const BlogSection = React.lazy(() => import('./components/BlogSection'));
import {
    ArrowRightIcon,
    ArrowDownIcon,
    BellIcon,
    WalletIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/solid';
import { BanknotesIcon } from '@heroicons/react/24/outline';

const App: React.FC = () => {
    // Calculator State
    const [leadCount, setLeadCount] = useState(50);
    const estimatedDeals = Math.floor(leadCount * 0.05);
    const estimatedRevenue = (estimatedDeals * 350000).toLocaleString('ru-RU');
    const [isOurCallCenter, setIsOurCallCenter] = useState(true);

    return (
        <div className="min-h-screen text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20 overflow-x-hidden bg-slate-50">
            <Background />

            {/* Editorial Header - Light Mode - CLEAN */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="flex items-center gap-12">
                    <div className="text-2xl font-black tracking-tighter uppercase text-slate-900 cursor-pointer">DM<span className="text-indigo-600">.</span>LEADS</div>
                    <div className="hidden lg:flex items-center gap-8">
                        <a href="#technology" className="text-xs font-bold text-slate-500 hover:text-indigo-600 uppercase tracking-widest transition-colors">ТЕХНОЛОГИЯ</a>
                        <a href="#income" className="text-xs font-bold text-slate-500 hover:text-indigo-600 uppercase tracking-widest transition-colors">ДОХОД</a>
                        <a href="#sources" className="text-xs font-bold text-slate-500 hover:text-indigo-600 uppercase tracking-widest transition-colors">ИСТОЧНИКИ</a>
                    </div>
                </div>
                {/* Button REMOVED as requested */}
            </header>

            <main className="relative z-10 flex flex-col gap-0 pt-20">

                {/* HERO SECTION */}
                <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden" id="technology">
                    {/* REMOVED Background Typography "СИСТЕМНЫЕ ПРОДАЖИ" */}

                    <div className="relative z-10 px-6 md:px-12 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Text Content - Left Side */}
                        <div className="lg:col-span-7 pt-20 lg:pt-0 relative flex flex-col items-start text-left">

                            <h1 className="text-6xl md:text-7xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8 relative z-20">
                                МАСШТАБИРУЙ <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 inline-block min-h-[1em]">
                                    <Typewriter
                                        words={['ПРОДАЖИ', 'ПРИБЫЛЬ', 'СДЕЛКИ', 'БИЗНЕС']}
                                        typingSpeed={120}
                                        deletingSpeed={80}
                                        pauseTime={2000}
                                    />
                                </span> <br />
                                БЕЗ ГРАНИЦ<span className="text-teal-500">.</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-12">
                                Автоматизированная экосистема для генерации <strong className="text-slate-900">лидов на недвижимость</strong>.
                                <span className="block text-slate-900 mt-2 font-bold">Верифицированные заявки. Подтвержденный бюджет. Без холодных звонков.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <MagneticButton>
                                    <a href="#form-section" className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white font-black text-lg uppercase tracking-wide overflow-hidden hover:bg-indigo-600 transition-colors rounded-xl shadow-xl hover:shadow-2xl">
                                        <span>ЗАПУСТИТЬ СИСТЕМУ</span>
                                        <ArrowRightIcon className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
                                    </a>
                                </MagneticButton>
                                {/* REMOVED Loading Widget next to button */}
                            </div>
                        </div>

                        {/* iPhone Mockup - Right Side - Desert Titanium */}
                        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                            {/* REMOVED Floating Shards (40%, Growth) */}
                            <TiltCard intensity={15} glareOpacity={0.3} className="w-full max-w-[380px]">
                                <div className="relative rounded-[55px] border-[8px] border-[#d4c5b0] shadow-2xl bg-[#0f172a] overflow-hidden h-[780px]">
                                    {/* Titanium Frame Details */}
                                    <div className="absolute inset-0 rounded-[46px] border-[2px] border-black/50 pointer-events-none z-20"></div>
                                    <div className="absolute -inset-[2px] rounded-[58px] border-[1px] border-[#e8ded0]/50 pointer-events-none z-20"></div>

                                    {/* Screen Container */}
                                    <div className="relative w-full h-full bg-[#F8FAFC] overflow-hidden flex flex-col">
                                        {/* Dynamic Island Area */}
                                        <div className="absolute top-0 w-full h-14 z-30 flex justify-center items-end pb-2">
                                            <div className="w-[120px] h-[35px] bg-black rounded-full flex items-center justify-between px-3 relative shadow-md">
                                                <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-indigo-500/50 rounded-full animate-pulse"></div>
                                                </div>
                                                <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-inner"></div>
                                            </div>
                                        </div>

                                        {/* Status Bar */}
                                        <div className="h-14 w-full flex justify-between items-center px-8 pt-3 text-slate-900 text-[13px] font-bold z-20">
                                            <span>14:20</span>
                                            <div className="flex gap-1.5">
                                                <div className="w-4 h-2.5 bg-slate-900 rounded-[1px]"></div>
                                                <div className="w-4 h-2.5 bg-slate-900 rounded-[1px]"></div>
                                                <div className="w-6 h-2.5 border-2 border-slate-900 rounded-[3px] relative">
                                                    <div className="absolute inset-0.5 bg-slate-900"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dashboard Content - Light Mode */}
                                        <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-hidden">
                                            {/* Header */}
                                            <div className="flex justify-between items-center mt-2">
                                                <h2 className="text-2xl font-black text-slate-900">Дашборд</h2>
                                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                                    <BellIcon className="w-5 h-5 text-slate-600" />
                                                </div>
                                            </div>

                                            {/* Balance Card */}
                                            <div className="w-full bg-slate-900 text-white p-6 rounded-3xl shadow-xl relative overflow-hidden group">
                                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full"></div>
                                                <div className="relative z-10">
                                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Общая Выручка</div>
                                                    <div className="text-3xl font-mono font-bold mb-4">4.2M ₽</div>
                                                    <div className="inline-flex px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase">
                                                        +12% за неделю
                                                    </div>
                                                </div>
                                                <WalletIcon className="absolute right-6 bottom-6 w-12 h-12 text-slate-700/50" />
                                            </div>

                                            {/* Activity Chart */}
                                            <div className="w-full bg-white border border-slate-100 p-5 rounded-3xl shadow-sm">
                                                <div className="flex justify-between items-end h-16 gap-2">
                                                    {[40, 65, 30, 85, 50, 95, 60].map((h, i) => (
                                                        <div key={i} className="w-full bg-indigo-50 rounded-t-md relative group-hover:bg-indigo-100 transition-colors">
                                                            <div
                                                                className="absolute bottom-0 w-full bg-indigo-500 rounded-t-md transition-all duration-1000"
                                                                style={{ height: `${h}%` }}
                                                            ></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Feed */}
                                            <div className="flex-1 space-y-3">
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Лента</div>
                                                {[
                                                    { id: 8491, time: '5м назад' },
                                                    { id: 8492, time: '12м назад' },
                                                    { id: 8493, time: '24м назад' },
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                                                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                                                            <CheckBadgeIcon className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-slate-900">Лид #{item.id}</div>
                                                            <div className="text-[10px] text-slate-400 font-bold">Запрос: Пентхаус • {item.time}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Floating Notification */}
                                            <div className="absolute bottom-24 right-4 bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg transform rotate-[-5deg] animate-pulse">
                                                РОСТ ОБНАРУЖЕН
                                            </div>
                                        </div>

                                        {/* Bottom Bar */}
                                        <div className="h-1 bg-slate-200 w-1/3 mx-auto rounded-full mb-2"></div>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">ЛИСТАЙТЕ ВНИЗ</span>
                        <ArrowDownIcon className="w-4 h-4 text-slate-900" />
                    </div>
                </section>

                {/* RUNNING LINE (TICKER) */}
                <RunningLine />

                {/* WORKFLOW (Pain vs Gain) - Light Mode */}
                <section id="workflow" className="py-32 px-6 md:px-12 w-full bg-white relative">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <div className="sticky top-32">
                                <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9]">
                                    AI ЯДРО <br /> <span className="text-indigo-600">ЛОГИКИ</span>
                                </h2>
                                <p className="text-slate-500 text-lg mb-12 font-medium">
                                    Наша нейросеть отфильтровывает 85% мусора до того, как он попадет в ваш дашборд. Убедитесь в этом.
                                </p>

                                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-lg">
                                    <h4 className="text-sm font-bold text-slate-900 uppercase mb-4">ЭТАПЫ ВЕРИФИКАЦИИ</h4>
                                    <ul className="space-y-4">
                                        {['Анти-Спам Фильтр', 'Анализ Платежеспособности', 'Проверка Региона', 'Подтверждение Намерений'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold border border-indigo-200">{i + 1}</div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 flex flex-col items-center justify-center">
                            <LeadScanner />

                            {/* Toggle Section Below */}
                            <div className="mt-20 w-full">
                                <div className="flex justify-between items-end mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900">СРАВНИТЬ РЕЗУЛЬТАТЫ</h3>
                                    <div className="flex gap-2">
                                        <button onClick={() => setIsOurCallCenter(false)} className={`px-4 py-2 text-xs font-bold uppercase rounded border transition-colors ${!isOurCallCenter ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}>САМ</button>
                                        <button onClick={() => setIsOurCallCenter(true)} className={`px-4 py-2 text-xs font-bold uppercase rounded border transition-colors ${isOurCallCenter ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}>СИСТЕМА</button>
                                    </div>
                                </div>

                                <div className={`
                             w-full aspect-[2/1] rounded-[32px] p-8 border transition-all duration-500 flex flex-col justify-center items-center text-center shadow-xl
                             ${isOurCallCenter ? 'bg-indigo-50 border-indigo-200' : 'bg-red-50 border-red-100'}
                          `}>
                                    <div className={`text-6xl font-black mb-4 ${isOurCallCenter ? 'text-indigo-600' : 'text-slate-400'}`}>
                                        {isOurCallCenter ? '98%' : '12%'}
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-slate-400">ИНДЕКС ЭФФЕКТИВНОСТИ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ANALYTICS - Light Mode */}
                <Suspense fallback={<div className="py-24 text-center text-slate-400">Загрузка аналитики...</div>}>
                    <section id="sources" className="py-24 bg-slate-50 border-y border-slate-200 relative">
                        <div className="px-6 md:px-12 max-w-[1800px] mx-auto">
                            <div className="mb-12 flex items-end justify-between">
                                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">АНАЛИТИКА<br />РЫНКА</h2>
                                <div className="hidden md:block text-right">
                                    <div className="text-[10px] font-mono text-teal-600">ДАННЫЕ LIVE</div>
                                </div>
                            </div>
                            <AnalyticsSlider />
                        </div>
                    </section>
                </Suspense>

                {/* COMPARISON - Light Mode */}
                <Suspense fallback={<div className="py-32"></div>}>
                    <section className="py-32 px-6 md:px-12 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <ComparisonSection />
                        </div>
                    </section>
                </Suspense>

                {/* INTEGRATIONS & ECOSYSTEM - Light Mode */}
                <Suspense fallback={<div className="py-24"></div>}>
                    <section className="py-24 bg-slate-50 relative overflow-hidden">
                        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
                            <Integrations />
                            <div id="income"></div>
                        </div>
                    </section>
                </Suspense>

                {/* CALCULATOR - Clean Light Card */}
                <section className="py-32 px-6 md:px-12 bg-white">
                    <div className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-[48px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-16">
                            <div className="flex-1">
                                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-[10px] font-black uppercase tracking-widest mb-6 border border-teal-200 rounded-md">
                                    СИМУЛЯТОР ПРИБЫЛИ
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-[0.9]">
                                    ПРОГНОЗ<br />РОСТА
                                </h2>

                                <div className="space-y-8 mt-12">
                                    <div>
                                        <div className="flex justify-between text-xs font-mono text-slate-500 mb-4">
                                            <span>ВВОД: КОЛ-ВО ЛИДОВ</span>
                                            <span className="text-slate-900 font-bold">{leadCount} / МЕС</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="10"
                                            max="500"
                                            value={leadCount}
                                            onChange={(e) => setLeadCount(Number(e.target.value))}
                                            className="w-full h-1 bg-slate-200 rounded-full appearance-none cursor-pointer accent-indigo-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 grid grid-cols-1 gap-4">
                                <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl flex items-center justify-between shadow-sm">
                                    <div>
                                        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">СДЕЛКИ</div>
                                        <div className="text-4xl font-mono font-bold text-slate-900 mt-2">{estimatedDeals}</div>
                                    </div>
                                    <CheckBadgeIcon className="w-10 text-slate-300" />
                                </div>
                                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-3xl flex items-center justify-between relative overflow-hidden shadow-xl shadow-indigo-200">
                                    <div className="relative z-10">
                                        <div className="text-indigo-100 text-xs font-bold uppercase tracking-widest">ПОТЕНЦИАЛ ВЫРУЧКИ</div>
                                        <div className="text-4xl md:text-5xl font-mono font-bold text-white mt-2 tracking-tight">₽ {estimatedRevenue}</div>
                                    </div>
                                    <BanknotesIcon className="w-10 text-white/50 relative z-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING - Light Mode */}
                <Suspense fallback={<div className="py-24"></div>}>
                    <section className="py-24 px-6 md:px-12 bg-slate-50">
                        <Pricing />
                    </section>
                </Suspense>

                {/* TESTIMONIALS - Light Mode */}
                <Suspense fallback={<div className="py-24"></div>}>
                    <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
                        <div className="max-w-7xl mx-auto">
                            <Testimonials />
                        </div>
                    </section>
                </Suspense>

                {/* ROI CASE - Light Mode */}
                <Suspense fallback={<div className="py-32"></div>}>
                    <section className="py-32 px-6 md:px-12 bg-slate-50">
                        <div className="max-w-7xl mx-auto">
                            <ROICase />
                        </div>
                    </section>
                </Suspense>

                {/* SUPPORT & FAQ - Light Mode */}
                <Suspense fallback={<div className="py-24"></div>}>
                    <section className="py-24 px-6 md:px-12 bg-white">
                        <div className="max-w-7xl mx-auto space-y-32">
                            <SupportSection />
                            <FAQ />
                        </div>
                    </section>
                </Suspense>

                {/* FINAL CTA FORM - Light Mode */}
                <section id="form-section" className="py-32 px-6 md:px-12 relative bg-slate-50">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                            ГОТОВЫ <br /><span className="text-teal-600">ДОМИНИРОВАТЬ?</span>
                        </h2>
                    </div>
                    <LeadForm />
                </section>

                {/* SEO BLOG SECTION - Collapsible */}
                <Suspense fallback={<div className="py-12"></div>}>
                    <BlogSection />
                </Suspense>

            </main>

            {/* Footer - Keep Dark for Contrast */}
            <footer className="bg-slate-900 py-20 px-6 md:px-12 border-t border-slate-800">
                <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
                    <div>
                        <div className="text-[10vw] leading-[0.8] font-black text-white/10 uppercase tracking-tighter select-none">
                            DM.LEADS
                        </div>
                    </div>
                    <div className="text-right space-y-4">
                        <div className="text-white font-bold text-lg">СИСТЕМА V3.0</div>
                        <div className="text-slate-400 text-sm">
                            © 2024 DM Leads.<br />Все права защищены.
                        </div>
                        <div className="flex gap-6 justify-end text-sm font-bold text-white uppercase">
                            <a href="#" className="hover:text-teal-400">КОНФИДЕНЦИАЛЬНОСТЬ</a>
                            <a href="#" className="hover:text-teal-400">ОФЕРТА</a>
                            <a href="#" className="hover:text-teal-400">КОНТАКТЫ</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;