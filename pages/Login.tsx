import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { BookOpen, Mail, Lock, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { login } = useStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        
        {/* Banner Side */}
        <div className="hidden md:flex flex-col justify-between bg-primary-800 text-white p-12 w-1/2 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-20 mix-blend-overlay"></div>
           <div className="relative z-10">
             <div className="flex items-center gap-2 text-2xl font-bold mb-6">
               <BookOpen className="w-8 h-8" />
               <span>پاراگراف</span>
             </div>
             <p className="text-primary-100 text-lg leading-8">
               به بزرگترین جامعه کتاب‌خوان‌های ایران بپیوندید. دسترسی به هزاران عنوان کتاب، نقد و بررسی و تخفیف‌های ویژه.
             </p>
           </div>
           <div className="relative z-10 text-sm text-primary-200">
             © ۱۴۰۳ تمامی حقوق محفوظ است
           </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-right">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{isLoginMode ? 'ورود به حساب کاربری' : 'ساخت حساب جدید'}</h2>
            <p className="text-gray-500 text-sm">لطفا برای ادامه اطلاعات خود را وارد کنید.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">آدرس ایمیل</label>
              <div className="relative">
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pr-10 pl-4 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all dir-ltr text-left" 
                  placeholder="name@example.com"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">رمز عبور</label>
              <div className="relative">
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pr-10 pl-4 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all dir-ltr text-left" 
                  placeholder="••••••••"
                />
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              {isLoginMode && (
                <div className="text-left mt-2">
                  <a href="#" className="text-xs text-primary-600 hover:text-primary-700 font-medium">رمز عبور را فراموش کرده‌اید؟</a>
                </div>
              )}
            </div>

            <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2 group">
              {isLoginMode ? 'ورود' : 'ثبت نام'}
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            {isLoginMode ? 'حساب کاربری ندارید؟' : 'قبلا ثبت‌نام کرده‌اید؟'} 
            <button 
              onClick={() => setIsLoginMode(!isLoginMode)} 
              className="text-primary-600 font-bold hover:underline mr-1"
            >
              {isLoginMode ? 'ثبت‌نام کنید' : 'وارد شوید'}
            </button>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg text-xs text-yellow-800 border border-yellow-100">
             <span className="font-bold">نکته برای دمو:</span> برای دسترسی به پنل ادمین، از ایمیل شامل کلمه "admin" استفاده کنید (مثلا admin@test.com).
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;