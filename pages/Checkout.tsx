import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cartTotal, clearCart } = useStore();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center max-w-lg w-full">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">سفارش شما با موفقیت ثبت شد</h2>
          <p className="text-gray-500 mb-8">شماره پیگیری سفارش شما: <span className="font-mono text-gray-800 font-bold">ORD-1403-8821</span></p>
          <a href="/" className="text-primary-600 font-bold hover:underline">بازگشت به صفحه اصلی</a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <span className="w-1 h-8 bg-primary-600 rounded-full block"></span>
        تکمیل اطلاعات خرید
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
           <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                 <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">شماره موبایل</label>
                 <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all text-left" placeholder="0912..." />
               </div>
             </div>

             <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">استان / شهر</label>
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none">
                    <option>تهران</option>
                    <option>اصفهان</option>
                    <option>فارس</option>
                  </select>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none">
                    <option>تهران</option>
                    <option>شهریار</option>
                    <option>پرند</option>
                  </select>
                </div>
             </div>

             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">آدرس دقیق پستی</label>
               <textarea required rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"></textarea>
             </div>
             
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">کد پستی</label>
               <input required type="text" className="w-full md:w-1/2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all text-left" />
             </div>
           </form>
        </div>

        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
             <h3 className="font-bold text-gray-800 mb-4">جزئیات پرداخت</h3>
             <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>مبلغ کل</span>
                  <span>{cartTotal.toLocaleString()} تومان</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>هزینه ارسال</span>
                  <span className="text-green-600">رایگان</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>مالیات بر ارزش افزوده</span>
                  <span>0 تومان</span>
                </div>
             </div>
             <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between font-bold text-xl text-gray-900">
                  <span>مبلغ نهایی</span>
                  <span>{cartTotal.toLocaleString()} <span className="text-sm font-normal text-gray-500">تومان</span></span>
                </div>
             </div>
             <button type="submit" form="checkout-form" className="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg">
               پرداخت آنلاین
             </button>
             <div className="mt-4 flex justify-center gap-2">
               <div className="w-8 h-5 bg-gray-200 rounded"></div>
               <div className="w-8 h-5 bg-gray-200 rounded"></div>
               <div className="w-8 h-5 bg-gray-200 rounded"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;