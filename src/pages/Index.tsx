import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        
        {/* Tracks Preview Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши трассы</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Мы предлагаем различные трассы для внедорожного картинга, подходящие для разных уровней подготовки
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Track 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1617717790186-cdc04551eee3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Трасса "Новичок"</h3>
                  <p className="text-gray-600 mb-4">Идеальная трасса для тех, кто только начинает свой путь в мире внедорожного картинга.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">от 1500 ₽</span>
                    <Link to="/tracks">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Track 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505570554449-69ce7d4fa36a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Трасса "Адреналин"</h3>
                  <p className="text-gray-600 mb-4">Сложная трасса с множеством препятствий и крутыми поворотами для опытных гонщиков.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">от 2500 ₽</span>
                    <Link to="/tracks">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Track 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Трасса "Экстрим"</h3>
                  <p className="text-gray-600 mb-4">Экстремальная трасса для профессионалов с крутыми склонами и водными преградами.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">от 3500 ₽</span>
                    <Link to="/tracks">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/tracks">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Посмотреть все трассы
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501556466850-7c9fa1fccb4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-black/70 p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Готовы испытать адреналин?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Забронируйте свой заезд прямо сейчас и получите скидку 10% на первое посещение!
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6">
                Забронировать заезд
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
