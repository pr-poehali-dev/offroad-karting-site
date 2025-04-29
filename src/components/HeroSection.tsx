import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-black h-[calc(100vh-72px)] min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundPosition: 'center 25%' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-slide-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Экстремальные ощущения на внедорожных картах
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Испытайте незабываемый адреналин на наших специально разработанных трассах. 
            Мощные карты и бездорожье – идеальное сочетание для экстремальных ощущений!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-6 py-6">
              Забронировать заезд
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-6 py-6">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating image of kart */}
      <div className="hidden lg:block absolute bottom-[-5%] right-[-5%] w-[600px] h-[500px] z-10 animate-fade-in">
        <img 
          src="https://cdn.poehali.dev/files/b3dbd4d5-effa-40a7-a50b-08dceabff43a.jpg" 
          alt="Внедорожный карт" 
          className="object-contain w-full h-full transform scale-75 rotate-[-5deg]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
