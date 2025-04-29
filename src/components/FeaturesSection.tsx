import { Award, MapPin, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: 'Уникальные трассы',
    description: 'Наши трассы специально спроектированы для внедорожных картов с различными уровнями сложности.'
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Современные карты',
    description: 'Наш автопарк укомплектован мощными внедорожными картами последнего поколения.'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Гибкое расписание',
    description: 'Мы работаем каждый день, а также проводим ночные заезды по предварительной записи.'
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Для всей семьи',
    description: 'У нас есть детские и подростковые карты, а также специальные трассы для начинающих.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем уникальный опыт внедорожного картинга, который сочетает в себе скорость, адреналин и преодоление препятствий
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 group hover:border-primary"
            >
              <div className="mb-4 transition-transform group-hover:scale-110 duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
