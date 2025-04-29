import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <span className="text-primary mr-1">X</span>КАРТ
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/tracks" className="text-white hover:text-primary transition-colors">
              Трассы
            </Link>
            <Link to="/rentals" className="text-white hover:text-primary transition-colors">
              Аренда
            </Link>
            <Link to="/gallery" className="text-white hover:text-primary transition-colors">
              Галерея
            </Link>
            <Link to="/contacts" className="text-white hover:text-primary transition-colors">
              Контакты
            </Link>
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
              Забронировать
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-white hover:text-primary px-4 py-2 rounded-md hover:bg-secondary-foreground/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/tracks" 
                className="text-white hover:text-primary px-4 py-2 rounded-md hover:bg-secondary-foreground/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Трассы
              </Link>
              <Link 
                to="/rentals" 
                className="text-white hover:text-primary px-4 py-2 rounded-md hover:bg-secondary-foreground/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Аренда
              </Link>
              <Link 
                to="/gallery" 
                className="text-white hover:text-primary px-4 py-2 rounded-md hover:bg-secondary-foreground/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Галерея
              </Link>
              <Link 
                to="/contacts" 
                className="text-white hover:text-primary px-4 py-2 rounded-md hover:bg-secondary-foreground/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-white w-full">
                Забронировать
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
