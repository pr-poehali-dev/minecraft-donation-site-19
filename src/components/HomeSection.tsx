import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

const HomeSection = ({ onSectionChange }: HomeSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-extrabold text-white mb-6 minecraft-shadow">
          Добро пожаловать!
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Лучший сервер Mellicemo-Craft с уникальными возможностями и дружным комьюнити
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 border-4 border-black shadow-lg"
            onClick={() => onSectionChange('donate')}
          >
            <Icon name="Zap" size={24} className="mr-2" />
            Купить привилегию
          </Button>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 border-4 border-black shadow-lg"
            onClick={() => onSectionChange('coins')}
          >
            <Icon name="Coins" size={24} className="mr-2" />
            Купить койны
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-[#3A3A3A] hover:bg-[#4A4A4A] text-white font-bold text-lg px-8 py-6 border-4 border-black"
            onClick={() => onSectionChange('rules')}
          >
            <Icon name="BookOpen" size={24} className="mr-2" />
            Правила сервера
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: 'Users', title: 'Активное сообщество', desc: 'Более 5000 игроков онлайн' },
          { icon: 'Zap', title: 'Без лагов', desc: 'Мощные сервера и оптимизация' },
          { icon: 'Shield', title: 'Защита от гриферов', desc: 'Система регионов и модерация' }
        ].map((feature, idx) => (
          <Card key={idx} className="bg-[#2C2C2C] border-4 border-black hover:scale-105 transition-transform">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center mb-4 border-2 border-black">
                <Icon name={feature.icon} size={32} className="text-white" />
              </div>
              <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              <CardDescription className="text-gray-400">{feature.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="text-center bg-gradient-to-r from-green-900/50 to-blue-900/50 p-12 border-4 border-black">
        <h3 className="text-3xl font-bold text-white mb-4 minecraft-shadow">IP сервера</h3>
        <code className="text-4xl font-bold text-yellow-400 bg-black/50 px-8 py-4 inline-block border-2 border-yellow-600">
          play.mellicemo-craft.ru
        </code>
      </div>
    </section>
  );
};

export default HomeSection;