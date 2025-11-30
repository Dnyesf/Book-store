import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { BOOKS, CATEGORIES, AUTHORS, PUBLISHERS } from '../constants';
import { SlidersHorizontal, ChevronDown, Check, Search } from 'lucide-react';

const BookList: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPublishers, setSelectedPublishers] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [priceRange, setPriceRange] = useState<number>(1000000);
  
  const location = useLocation();

  React.useEffect(() => {
     const params = new URLSearchParams(location.search);
     const cat = params.get('cat');
     const sale = params.get('sale');
     
     if (cat) {
        if(cat === 'literature') setSelectedCategories(['ادبیات کلاسیک']);
        else if(cat === 'history') setSelectedCategories(['تاریخ']);
        else if(cat === 'psychology') setSelectedCategories(['روانشناسی']);
        else if(cat === 'teen') setSelectedCategories(['نوجوان']);
        else if(cat === 'child') setSelectedCategories(['کودک']);
        else if(cat === 'stationery') setSelectedCategories(['لوازم تحریر']);
     }
  }, [location]);

  const toggleFilter = (state: string[], setState: any, value: string) => {
    if (state.includes(value)) {
      setState(state.filter(item => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const filteredBooks = useMemo(() => {
    return BOOKS.filter(book => {
      // Category
      const matchCat = selectedCategories.length === 0 || selectedCategories.includes(book.category);
      // Publisher
      const matchPub = selectedPublishers.length === 0 || (book.publisher && selectedPublishers.includes(book.publisher));
      // Author
      const matchAuthor = selectedAuthors.length === 0 || selectedAuthors.includes(book.author);
      // Price
      const matchPrice = book.price <= priceRange;
      
      // Sale
      const params = new URLSearchParams(location.search);
      const sale = params.get('sale');
      const matchSale = !sale || (book.originalPrice && book.originalPrice > book.price);

      return matchCat && matchPub && matchAuthor && matchPrice && matchSale;
    });
  }, [selectedCategories, selectedPublishers, selectedAuthors, priceRange, location.search]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-72 shrink-0 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
            <div className="flex items-center gap-2 font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
              <SlidersHorizontal className="w-5 h-5" />
              <span>فیلترها</span>
            </div>

            {/* Availability Toggle */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="text-sm font-medium text-gray-700">فقط کالاهای موجود</span>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${onlyAvailable ? 'bg-primary-600' : 'bg-gray-200'}`} onClick={() => setOnlyAvailable(!onlyAvailable)}>
                  <div className={`bg-white w-4 h-4 rounded-full shadow-sm transition-transform ${onlyAvailable ? '-translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </label>
            </div>

            {/* Categories */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <h4 className="font-bold text-sm text-gray-800 mb-3">دسته‌بندی‌ها</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pl-2">
                {CATEGORIES.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(cat) ? 'bg-primary-600 border-primary-600' : 'border-gray-300'}`}>
                      {selectedCategories.includes(cat) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleFilter(selectedCategories, setSelectedCategories, cat)}
                    />
                    <span className="text-sm text-gray-600">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Publishers */}
             <div className="mb-6 pb-6 border-b border-gray-100">
              <h4 className="font-bold text-sm text-gray-800 mb-3">ناشر</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto pl-2">
                {PUBLISHERS.map(pub => (
                  <label key={pub.id} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedPublishers.includes(pub.name) ? 'bg-primary-600 border-primary-600' : 'border-gray-300'}`}>
                      {selectedPublishers.includes(pub.name) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={selectedPublishers.includes(pub.name)}
                      onChange={() => toggleFilter(selectedPublishers, setSelectedPublishers, pub.name)}
                    />
                    <span className="text-sm text-gray-600">{pub.name}</span>
                  </label>
                ))}
              </div>
            </div>

             {/* Authors */}
             <div className="mb-6 pb-6 border-b border-gray-100">
              <h4 className="font-bold text-sm text-gray-800 mb-3">نویسنده</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto pl-2">
                {AUTHORS.map(author => (
                  <label key={author.id} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedAuthors.includes(author.name) ? 'bg-primary-600 border-primary-600' : 'border-gray-300'}`}>
                      {selectedAuthors.includes(author.name) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={selectedAuthors.includes(author.name)}
                      onChange={() => toggleFilter(selectedAuthors, setSelectedAuthors, author.name)}
                    />
                    <span className="text-sm text-gray-600">{author.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="font-bold text-sm text-gray-700 mb-3">محدوده قیمت</h4>
              <input 
                type="range" 
                min="0" 
                max="1000000" 
                step="50000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-primary-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0</span>
                <span>{priceRange.toLocaleString()} تومان</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Grid */}
        <div className="flex-1">
          <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100 flex justify-between items-center">
             <span className="text-gray-500 text-sm">نمایش <span className="font-bold text-gray-800">{filteredBooks.length}</span> کتاب</span>
             <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary-600">
                <span>مرتب‌سازی: محبوب‌ترین</span>
                <ChevronDown className="w-4 h-4" />
             </div>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">کتابی با این مشخصات یافت نشد.</p>
              <button onClick={() => {setSelectedCategories([]); setPriceRange(1000000); setSelectedPublishers([]); setSelectedAuthors([]);}} className="mt-4 text-primary-600 font-bold hover:underline">
                 پاک کردن فیلترها
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookList;