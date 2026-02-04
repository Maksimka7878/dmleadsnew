import React, { useState } from 'react';
import { LeadFormData, FormStatus } from '../types';
import { ArrowRightIcon, LockClosedIcon } from '@heroicons/react/24/solid';

interface ExtendedLeadFormData extends LeadFormData {
  company: string;
  segment: string;
  region: string;
}

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<ExtendedLeadFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Purchase', 
    segment: 'Business',
    region: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative group">
      
      {/* Decorative Gradients for Light Mode */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 -left-20 w-60 h-60 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none"></div>

      {/* Main Light Card */}
      <div className="relative w-full bg-white/80 backdrop-blur-xl p-1 rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white">
        
        {/* Content */}
        <div className="relative p-8 md:p-12 z-10">
          
          <div className="flex justify-between items-start mb-10">
              <div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                      Получить <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">Доступ</span>
                  </h2>
                  <div className="h-1 w-20 bg-indigo-600 mt-2"></div>
              </div>
              <div className="hidden md:block text-right">
                  <div className="text-[10px] font-mono text-slate-400">ЗАЩИЩЕННОЕ_СОЕДИНЕНИЕ</div>
                  <div className="text-[10px] font-mono text-teal-600 animate-pulse">ШИФРОВАНИЕ: AES-256</div>
              </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {['name', 'company'].map((field) => (
                    <div key={field} className="relative group/input">
                        <input
                            type="text"
                            name={field}
                            required
                            placeholder=" "
                            onChange={handleInputChange}
                            className="block py-4 px-0 w-full text-sm font-bold text-slate-900 bg-transparent border-0 border-b border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer transition-colors"
                        />
                        <label className="absolute text-xs font-mono text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-wider">
                            {field === 'name' ? 'Имя Фамилия' : 'Агентство / Брокер'}
                        </label>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-focus-within/input:w-full"></div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {['email', 'phone'].map((field) => (
                    <div key={field} className="relative group/input">
                        <input
                            type={field === 'email' ? 'email' : 'tel'}
                            name={field}
                            required
                            placeholder=" "
                            onChange={handleInputChange}
                            className="block py-4 px-0 w-full text-sm font-bold text-slate-900 bg-transparent border-0 border-b border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer transition-colors"
                        />
                        <label className="absolute text-xs font-mono text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-wider">
                            {field === 'email' ? 'Рабочий Email' : 'Телефон'}
                        </label>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-focus-within/input:w-full"></div>
                    </div>
                ))}
            </div>

            <div className="relative group/input">
                 <textarea
                    name="message"
                    rows={1}
                    placeholder=" "
                    onChange={handleInputChange}
                    className="block py-4 px-0 w-full text-sm font-bold text-slate-900 bg-transparent border-0 border-b border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer transition-colors resize-none"
                 />
                 <label className="absolute text-xs font-mono text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-wider">
                    Критерии Лидов / Запрос
                 </label>
                 <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-focus-within/input:w-full"></div>
            </div>

            <button
                type="submit"
                className="w-full group relative px-8 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm overflow-hidden hover:bg-indigo-600 transition-colors duration-300 rounded-xl shadow-lg hover:shadow-xl"
            >
                <span className="relative z-10 flex items-center justify-center gap-3">
                    Запросить Доступ
                    <ArrowRightIcon className="w-5 h-5" />
                </span>
            </button>
            
            <div className="text-center">
                 <div className="inline-flex items-center gap-2 text-[9px] text-slate-400 font-mono uppercase">
                    <LockClosedIcon className="w-3 h-3" />
                    <span>Протокол Безопасной Передачи Данных</span>
                 </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;