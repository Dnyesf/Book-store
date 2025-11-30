import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Check } from 'lucide-react';
import { BOOKS } from '../constants';
import { useStore } from '../context/StoreContext';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useStore();
  
  const book = BOOKS.find(b => b.id === Number(id));

  if (!book) {
    return <div className="p-20 text-center">کتاب مورد نظر یافت نشد.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6 flex gap-2">
         <Link to="/">خانه</Link> / <Link to="/books">فروشگاه</Link> / <span className="text-gray-800">{book.title}</span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8">
          
          {/* Image Column */}
          <div className="md:col-span-4 lg:col-span-3 bg-gray-50 p-8 flex justify-center items-start">
             <div className="relative shadow-2xl rounded-lg overflow-hidden max-w-[280px]">
                <img src={book.coverUrl} alt={book.title} className="w-full h-auto" />
             </div>
          </div>

          {/* Info Column */}
          <div className="md:col-span-8 lg:col-span-6 p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-md font-bold">{book.category}</span>
              <div className="flex gap-3 text-gray-400">
                 <button className="hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /></button>
                 <button className="hover:text-blue-500 transition-colors"><Share2 className="w-5 h-5" /></button>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
            <p className="text-lg text-gray-500 mb-6">نویسنده: <span className="text-primary-600 font-medium">{book.author}</span></p>
            
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
               <div className="flex items-center gap-1">
                 <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                 <span className="font-bold text-gray-800 text-lg">{book.rating}</span>
                 <span className="text-gray-400 text-sm">(از ۱۲۰ رای)</span>
               </div>
               <div className="h-6 w-px bg-gray-200"></div>
               <div className="text-green-600 text-sm font-medium flex items-center gap-1">
                 <Check className="w-4 h-4" /> موجود در انبار
               </div>
            </div>

            <div className="mb-8">
               <h3 className="font-bold text-gray-800 mb-3 text-lg">درباره کتاب</h3>
               <p className="text-gray-600 leading-8 text-justify">
                 {book.description} {book.description}
                 <br/><br/>
                 این کتاب یکی از پرفروش‌ترین آثار در سال‌های اخیر بوده و توانسته نظر منتقدان بسیاری را به خود جلب کند. خواندن این اثر تجربه‌ای متفاوت از دنیای ادبیات را برای شما رقم خواهد زد.
               </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
               <div>ناشر: <span className="text-gray-900 font-medium">نشر چشمه</span></div>
               <div>سال چاپ: <span className="text-gray-900 font-medium">۱۴۰۲</span></div>
               <div>قطع: <span className="text-gray-900 font-medium">رقعی</span></div>
               <div>تعداد صفحه: <span className="text-gray-900 font-medium">۳۲۰</span></div>
            </div>
          </div>

          {/* Action Column */}
          <div className="md:col-span-12 lg:col-span-3 lg:border-r border-gray-100 p-8 bg-gray-50 lg:bg-white flex flex-col justify-center">
             <div className="bg-white lg:bg-gray-50 p-6 rounded-xl border border-gray-100 lg:border-none shadow-sm lg:shadow-none">
                <div className="mb-6">
                   {book.originalPrice && (
                     <div className="text-gray-400 line-through text-sm mb-1 text-left decoration-red-400">
                        {book.originalPrice.toLocaleString()}
                     </div>
                   )}
                   <div className="text-3xl font-bold text-gray-900 text-center">
                      {book.price.toLocaleString()} <span className="text-sm text-gray-500 font-normal">تومان</span>
                   </div>
                </div>

                <button 
                  onClick={() => addToCart(book)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-primary-600/20 transition-all flex items-center justify-center gap-2 mb-4 active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5" />
                  افزودن به سبد خرید
                </button>
                
                <p className="text-xs text-gray-500 text-center leading-5">
                   ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
                </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetail;