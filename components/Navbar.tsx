import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, BookOpen } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Navbar: React.FC = () => {
  const { cart, user, logout } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/books');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-primary-700 font-bold text-2xl shrink-0">
            <BookOpen className="w-8 h-8" />
            <span>پاراگراف</span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl relative mx-4">
            <input 
              type="text" 
              placeholder="جستجو در میان هزاران کتاب..." 
              className="w-full bg-gray-100 text-gray-800 rounded-full py-2.5 pr-10 pl-4 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:bg-white transition-all border border-transparent focus:border-primary-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-600">
              <Search className="w-5 h-5" />
            </button>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            {user ? (
               <div className="flex items-center gap-2">
                 {user.role === 'admin' && (
                   <Link to="/admin" className="text-sm font-medium text-gray-600 hover:text-primary-600 hidden md:block">
                     پنل مدیریت
                   </Link>
                 )}
                 <button onClick={logout} className="text-sm text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-md transition-colors">
                   خروج
                 </button>
                 <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                   {user.name.charAt(0)}
                 </div>
               </div>
            ) : (
              <Link to="/login" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-primary-700 font-medium text-sm border border-gray-200 px-4 py-2 rounded-lg hover:border-primary-300 transition-all">
                <User className="w-4 h-4" />
                <span>ورود / ثبت‌نام</span>
              </Link>
            )}

            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Search & Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 space-y-4">
             <form onSubmit={handleSearch} className="relative">
                <input 
                  type="text" 
                  placeholder="جستجو..." 
                  className="w-full bg-gray-100 rounded-lg py-2 pr-10 pl-4 text-sm"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
             </form>
             <nav className="flex flex-col gap-2">
               <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 py-2 hover:text-primary-600">صفحه اصلی</Link>
               <Link to="/books" onClick={() => setIsMenuOpen(false)} className="text-gray-700 py-2 hover:text-primary-600">فروشگاه کتاب</Link>
               {!user && (
                 <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-gray-700 py-2 hover:text-primary-600">ورود به حساب کاربری</Link>
               )}
               {user && user.role === 'admin' && (
                 <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="text-gray-700 py-2 hover:text-primary-600">پنل مدیریت</Link>
               )}
             </nav>
          </div>
        )}
      </div>

      {/* Secondary Nav (Categories) */}
      <div className="hidden md:block bg-gray-800 text-white text-sm">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-8 py-2.5 overflow-x-auto no-scrollbar">
            <li><Link to="/books" className="hover:text-primary-300 transition-colors whitespace-nowrap">تازه های نشر</Link></li>
            <li><Link to="/books?cat=literature" className="hover:text-primary-300 transition-colors whitespace-nowrap">ادبیات</Link></li>
            <li><Link to="/books?cat=psychology" className="hover:text-primary-300 transition-colors whitespace-nowrap">روانشناسی</Link></li>
            <li><Link to="/books?cat=history" className="hover:text-primary-300 transition-colors whitespace-nowrap">تاریخ</Link></li>
            <li><Link to="/books?cat=teen" className="hover:text-primary-300 transition-colors whitespace-nowrap">نوجوان</Link></li>
             <li><Link to="/books?cat=child" className="hover:text-primary-300 transition-colors whitespace-nowrap">کودک</Link></li>
            <li><Link to="/books?cat=stationery" className="hover:text-primary-300 transition-colors whitespace-nowrap">لوازم تحریر</Link></li>
            <li className="mr-auto text-yellow-400 font-bold"><Link to="/books?sale=true">فروش ویژه</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;