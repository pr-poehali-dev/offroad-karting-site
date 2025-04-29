import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">О нас</h3>
            <p className="text-gray-300 mb-4">
              Мы предлагаем уникальный опыт внедорожного картинга на специально спроектированных трассах, 
              используя самые современные и мощные карты.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/tracks" className="text-gray-300 hover:text-primary transition-colors">Трассы</Link>
              </li>
              <li>
                <Link to="/rentals" className="text-gray-300 hover:text-primary transition-colors">Аренда</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">Галерея</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-primary transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-2 mt-1" />
                <span className="text-gray-300">ул. Картинговая, 123, Москва, Россия</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-300">info@xkart.ru</span>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Время работы</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Понедельник - Пятница: 10:00 - 20:00</li>
              <li className="text-gray-300">Суббота - Воскресенье: 09:00 - 22:00</li>
              <li className="text-gray-300 mt-4 font-semibold">Ночные заезды по предварительной записи</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} XКАРТ - Внедорожный картинг. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
