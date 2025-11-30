import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { BOOKS, MOCK_ORDERS } from '../constants';
import { LayoutDashboard, Book, Users, ShoppingBag, Plus, Edit2, Trash2 } from 'lucide-react';

const Admin: React.FC = () => {
  const { user } = useStore();
  const [activeTab, setActiveTab] = useState<'books' | 'users' | 'orders'>('books');

  if (!user || user.role !== 'admin') {
    return <div className="p-20 text-center text-red-500 font-bold">دسترسی شما به این صفحه محدود شده است.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-l border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <LayoutDashboard className="text-primary-600" /> پنل مدیریت
          </h2>
        </div>
        <nav className="p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('books')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'books' ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Book className="w-5 h-5" /> مدیریت کتاب‌ها
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'orders' ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <ShoppingBag className="w-5 h-5" /> سفارشات
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'users' ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Users className="w-5 h-5" /> کاربران
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            {activeTab === 'books' && 'لیست کتاب‌ها'}
            {activeTab === 'orders' && 'لیست سفارشات'}
            {activeTab === 'users' && 'لیست کاربران'}
          </h1>
          {activeTab === 'books' && (
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 flex items-center gap-2">
              <Plus className="w-4 h-4" /> افزودن کتاب جدید
            </button>
          )}
        </header>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {activeTab === 'books' && (
             <div className="overflow-x-auto">
               <table className="w-full text-right">
                 <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
                   <tr>
                     <th className="px-6 py-4">کاور</th>
                     <th className="px-6 py-4">عنوان کتاب</th>
                     <th className="px-6 py-4">نویسنده</th>
                     <th className="px-6 py-4">قیمت</th>
                     <th className="px-6 py-4">عملیات</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                   {BOOKS.map(book => (
                     <tr key={book.id} className="hover:bg-gray-50">
                       <td className="px-6 py-3">
                         <img src={book.coverUrl} className="w-10 h-14 object-cover rounded" alt="" />
                       </td>
                       <td className="px-6 py-3 font-medium text-gray-800">{book.title}</td>
                       <td className="px-6 py-3 text-gray-600">{book.author}</td>
                       <td className="px-6 py-3 text-gray-600">{book.price.toLocaleString()}</td>
                       <td className="px-6 py-3 flex gap-2">
                         <button className="p-2 text-blue-600 hover:bg-blue-50 rounded"><Edit2 className="w-4 h-4" /></button>
                         <button className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          )}

          {activeTab === 'orders' && (
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
                  <tr>
                    <th className="px-6 py-4">شناسه سفارش</th>
                    <th className="px-6 py-4">مشتری</th>
                    <th className="px-6 py-4">تاریخ</th>
                    <th className="px-6 py-4">مبلغ کل</th>
                    <th className="px-6 py-4">وضعیت</th>
                    <th className="px-6 py-4">عملیات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MOCK_ORDERS.map(order => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-sm">{order.id}</td>
                      <td className="px-6 py-4">{order.customerName}</td>
                      <td className="px-6 py-4 text-gray-500">{order.date}</td>
                      <td className="px-6 py-4 font-medium">{order.total.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status === 'Delivered' ? 'تحویل شده' : order.status === 'Shipped' ? 'ارسال شده' : 'در حال پردازش'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                         <button className="text-primary-600 text-sm font-medium hover:underline">مشاهده جزئیات</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'users' && (
            <div className="p-10 text-center text-gray-500">
               <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
               <p>لیست کاربران در حال حاضر خالی است.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;