import React from 'react';
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">پاراگراف</h3>
            <p className="text-sm leading-7 text-gray-400">
              ما در پاراگراف تلاش می‌کنیم تا بهترین آثار ادبیات ایران و جهان را با بالاترین کیفیت در اختیار علاقه‌مندان به کتاب قرار دهیم. هدف ما ترویج فرهنگ کتاب‌خوانی است.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">تماس با ما</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">قوانین و مقررات</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">پرسش‌های متداول</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">موضوعات</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">رمان و داستان</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">فلسفه و عرفان</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">هنر و سینما</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">روانشناسی</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">ارتباط با ما</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                <span>تهران، خیابان انقلاب، خیابان ۱۲ فروردین</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span dir="ltr">021 - 6695 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span>info@paragraph.ir</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© ۱۴۰۳ کلیه حقوق این سایت متعلق به فروشگاه اینترنتی پاراگراف می‌باشد.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;