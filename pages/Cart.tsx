import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingCartIcon className="w-10 h-10 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">سبد خرید شما خالی است</h2>
        <p className="text-gray-500 mb-8">می‌توانید برای مشاهده محصولات به صفحه فروشگاه بروید.</p>
        <Link to="/books" className="bg-primary-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors">
          رفتن به فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <span className="w-1 h-8 bg-primary-600 rounded-full block"></span>
        سبد خرید
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Items List */}
        <div className="flex-1 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center">
               <img src={item.coverUrl} alt={item.title} className="w-20 h-28 object-cover rounded-md border border-gray-200" />
               
               <div className="flex-1">
                 <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                 <p className="text-sm text-gray-500 mb-4">{item.author}</p>
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                       <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-50 text-gray-600"><Plus className="w-4 h-4" /></button>
                       <span className="w-8 text-center font-medium">{item.quantity}</span>
                       <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-50 text-gray-600 disabled:opacity-50" disabled={item.quantity <= 1}><Minus className="w-4 h-4" /></button>
                    </div>
                    <div className="font-bold text-gray-900">
                      {(item.price * item.quantity).toLocaleString()} <span className="text-xs font-normal text-gray-500">تومان</span>
                    </div>
                 </div>
               </div>
               
               <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 p-2">
                 <Trash2 className="w-5 h-5" />
               </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-24">
            <h3 className="font-bold text-lg mb-6 text-gray-800">خلاصه سفارش</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>قیمت کالاها ({cart.length})</span>
                <span>{cartTotal.toLocaleString()} تومان</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>هزینه ارسال</span>
                <span className="text-green-600">رایگان</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-4 mb-6">
              <div className="flex justify-between font-bold text-xl text-gray-900">
                <span>مبلغ قابل پرداخت</span>
                <span>{cartTotal.toLocaleString()} <span className="text-sm font-normal text-gray-500">تومان</span></span>
              </div>
            </div>

            <Link to="/checkout" className="w-full block text-center bg-primary-600 text-white py-3.5 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
              ادامه فرآیند خرید
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Icon component for empty state
const ShoppingCartIcon = ({className}:{className:string}) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
)

export default Cart;