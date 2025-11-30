import React from 'react';
import { ArrowLeft, BookOpen, PenTool, Sparkles, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { BOOKS, AUTHORS, PUBLISHERS } from '../constants';

const Home: React.FC = () => {
  // Filter Data
  const saleBooks = BOOKS.filter(b => b.originalPrice && b.originalPrice > b.price);
  const bestSellers = BOOKS.filter(b => b.rating >= 4.7);
  const lifeChangingBooks = BOOKS.filter(b => b.tags?.includes('life-changing'));
  const womenBooks = BOOKS.filter(b => b.tags?.includes('women'));
  const teenBooks = BOOKS.filter(b => b.category === 'نوجوان' || b.tags?.includes('teen'));
  const childBooks = BOOKS.filter(b => b.category === 'کودک' || b.tags?.includes('child'));
  const stationery = BOOKS.filter(b => b.category === 'لوازم تحریر');

  const BookRow = ({ title, books, link, icon: Icon, bgClass = "" }: any) => (
    <section className={`py-12 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-3">
             {Icon && <Icon className="w-6 h-6 text-primary-600" />}
             <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
           </div>
           {link && (
            <Link to={link} className="text-gray-500 hover:text-primary-600 flex items-center gap-1 text-sm font-medium group">
              مشاهده همه <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
           )}
        </div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x">
          {books.map((book: any) => (
            <div key={book.id} className="min-w-[200px] sm:min-w-[240px] snap-start">
              <BookCard book={book} />
            </div>
          ))}
          <div className="min-w-[50px] flex items-center justify-center">
             <Link to={link || '#'} className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white transition-colors">
               <ArrowLeft className="w-6 h-6" />
             </Link>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="space-y-4 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-right space-y-6">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
              جهانی از <span className="text-primary-500">کلمات</span><br /> در پاراگراف
            </h1>
            <p className="text-gray-300 text-lg max-w-lg mx-auto md:mx-0 leading-8">
              مرجع تخصصی نقد و بررسی و فروش کتاب. با پاراگراف، کتاب‌های مورد علاقه‌تان را راحت‌تر پیدا کنید و در کمترین زمان تحویل بگیرید.
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <Link to="/books" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary-600/30">
                خرید کتاب
              </Link>
              <Link to="/books?sale=true" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold backdrop-blur-sm transition-all border border-white/20">
                فروش ویژه
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-sm md:max-w-md perspective-1000 hidden md:block">
             <div className="grid grid-cols-2 gap-4 rotate-y-12">
                <img src={BOOKS[2].coverUrl} alt="book" className="rounded-lg shadow-2xl transform translate-y-12 hover:-translate-y-2 transition-transform duration-500 border-4 border-white/5" />
                <img src={BOOKS[5].coverUrl} alt="book" className="rounded-lg shadow-2xl transform -translate-y-4 hover:-translate-y-12 transition-transform duration-500 border-4 border-white/5" />
             </div>
          </div>
        </div>
      </section>

      {/* Sale Festival */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
         <div className="bg-gradient-to-r from-red-600 to-primary-600 rounded-2xl p-6 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full animate-pulse">
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">جشنواره فروش ویژه</h3>
                <p className="text-red-100 text-sm">تا ۳۰٪ تخفیف روی کتاب‌های منتخب</p>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar max-w-2xl py-2">
               {saleBooks.slice(0, 5).map(book => (
                 <Link key={book.id} to={`/book/${book.id}`} className="shrink-0 w-20 hover:scale-110 transition-transform">
                   <img src={book.coverUrl} className="rounded-md shadow-md w-full h-auto" />
                 </Link>
               ))}
            </div>
            <Link to="/books?sale=true" className="bg-white text-red-600 px-6 py-2.5 rounded-lg font-bold hover:bg-red-50 transition-colors whitespace-nowrap">
              مشاهده همه
            </Link>
         </div>
      </div>

      {/* Stationery Link Banner */}
      <section className="container mx-auto px-4 mt-16">
        <Link to="/books?cat=stationery" className="block group relative overflow-hidden rounded-2xl">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
           <div className="relative z-10 p-8 md:p-12 flex items-center justify-between text-white">
              <div>
                 <h2 className="text-3xl font-bold mb-2">لوازم تحریر و نوشت افزار</h2>
                 <p className="text-blue-100">انواع دفتر، خودکار، مداد رنگی و ابزار طراحی</p>
              </div>
              <div className="bg-white/20 p-4 rounded-full group-hover:scale-110 transition-transform">
                 <PenTool className="w-10 h-10" />
              </div>
           </div>
           {/* Decor */}
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
        </Link>
      </section>

      {/* Featured Authors */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 border-r-4 border-primary-600 pr-3">نویسندگان منتخب</h2>
        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-4">
          {AUTHORS.map(author => (
            <div key={author.id} className="flex flex-col items-center gap-3 shrink-0 group cursor-pointer">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-primary-500 transition-all p-1">
                <img src={author.imageUrl} alt={author.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">{author.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Book Rows */}
      <BookRow title="پرفروش‌ترین‌های پاراگراف" books={bestSellers} link="/books" icon={BookOpen} bgClass="bg-gray-50" />
      
      <BookRow title="کتاب‌هایی که زندگی‌تان را دگرگون می‌کنند" books={lifeChangingBooks} link="/books?tag=life-changing" icon={Sparkles} />
      
      <BookRow title="کتاب‌هایی که همه زنان باید بخوانند" books={womenBooks} link="/books?tag=women" icon={UserCheck} bgClass="bg-pink-50" />
      
      <BookRow title="برترین رمان‌های نوجوان" books={teenBooks} link="/books?cat=teen" />

      <BookRow title="دنیای رنگارنگ کودکان" books={childBooks} link="/books?cat=child" bgClass="bg-blue-50" />

      {/* Stationery Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-bold text-gray-800 border-r-4 border-cyan-500 pr-3">لوازم تحریر</h2>
           <Link to="/books?cat=stationery" className="text-cyan-600 hover:text-cyan-700 text-sm font-bold">مشاهده همه</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {stationery.map(item => (
            <BookCard key={item.id} book={item} />
          ))}
        </div>
      </section>

      {/* Publishers */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-100">
        <h2 className="text-center text-gray-400 font-bold mb-8 text-sm uppercase tracking-widest">ناشرین همکار</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {PUBLISHERS.map(pub => (
             <div key={pub.id} className="text-xl font-black text-gray-700 hover:text-primary-600 cursor-pointer">
               {pub.name}
             </div>
           ))}
        </div>
      </section>

    </div>
  );
};

export default Home;