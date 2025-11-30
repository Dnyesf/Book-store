import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Book } from '../types';
import { useStore } from '../context/StoreContext';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useStore();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden h-full">
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
        <Link to={`/book/${book.id}`}>
          <img 
            src={book.coverUrl} 
            alt={book.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        {book.isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm z-10">
            جدید
          </span>
        )}
        {book.originalPrice && (
           <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm z-10">
             %{Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}
           </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2">
            <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{book.category}</span>
        </div>
        <Link to={`/book/${book.id}`} className="block">
          <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary-700 transition-colors line-clamp-1 text-lg">
            {book.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-3">{book.author}</p>
        
        <div className="flex items-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className={`w-3.5 h-3.5 ${s <= book.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
          ))}
          <span className="text-xs text-gray-400 mr-1">({book.rating})</span>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            {book.originalPrice && (
              <span className="text-xs text-gray-400 line-through decoration-red-400">
                {book.originalPrice.toLocaleString()}
              </span>
            )}
            <div className="flex items-center gap-1">
              <span className="font-bold text-lg text-gray-900">{book.price.toLocaleString()}</span>
              <span className="text-xs text-gray-500">تومان</span>
            </div>
          </div>
          
          <button 
            onClick={() => addToCart(book)}
            className="bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 p-2.5 rounded-lg transition-all shadow-sm active:scale-95"
            title="افزودن به سبد"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;