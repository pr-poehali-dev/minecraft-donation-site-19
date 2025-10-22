import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Server } from '@/data/privilegesData';
import { useToast } from '@/hooks/use-toast';

interface CasesSectionProps {
  servers: Server[];
  selectedServer: string;
  onServerChange: (serverId: string) => void;
  userNickname?: string | null;
}

interface Case {
  id: string;
  name: string;
  price: number;
  icon: string;
  color: string;
  description: string;
  rewards: string[];
}

const anarchyCases: Case[] = [
  {
    id: 'starter',
    name: 'Стартовый кейс',
    price: 33,
    icon: 'Package',
    color: 'from-gray-600 to-gray-800',
    description: 'Базовые ресурсы для старта',
    rewards: ['Железная броня', 'Набор инструментов', 'Еда x32', 'Факелы x64']
  },
  {
    id: 'rare',
    name: 'Редкий кейс',
    price: 98,
    icon: 'Gift',
    color: 'from-blue-600 to-blue-800',
    description: 'Ценные предметы и ресурсы',
    rewards: ['Алмазная броня', 'Зачарованные инструменты', 'Изумруды x16', 'Золотые яблоки x8']
  },
  {
    id: 'epic',
    name: 'Эпический кейс',
    price: 228,
    icon: 'Sparkles',
    color: 'from-purple-600 to-purple-800',
    description: 'Мощные артефакты',
    rewards: ['Незеритовая броня', 'Элитровы крылья', 'Тотем бессмертия x3', 'Сундук-шалкер']
  },
  {
    id: 'legendary',
    name: 'Легендарный кейс',
    price: 488,
    icon: 'Trophy',
    color: 'from-yellow-500 to-orange-600',
    description: 'Эксклюзивные награды',
    rewards: ['Полный незерит с зачарами', 'Маяк + блоки', 'Звезда незера x5', 'Уникальные зелья']
  },
  {
    id: 'mythic',
    name: 'Мифический кейс',
    price: 975,
    icon: 'Crown',
    color: 'from-red-600 to-pink-700',
    description: 'Сокровища богов',
    rewards: ['Кастомное оружие', 'Редкие питомцы', 'Креативные блоки', 'Уникальные скины']
  }
];

const survivalCases: Case[] = [
  {
    id: 'privilege_knight',
    name: 'Кейс "WARRIOR"',
    price: 130,
    icon: 'Sword',
    color: 'from-amber-600 to-amber-800',
    description: 'Шанс получить привилегию',
    rewards: ['Привилегия LITE (60%)', 'Привилегия WARRIOR (30%)', 'Привилегия ELITE (10%)', '100 койнов (бонус)']
  },
  {
    id: 'privilege_guardian',
    name: 'Кейс "ELITE"',
    price: 325,
    icon: 'Shield',
    color: 'from-blue-600 to-blue-800',
    description: 'Повышенный шанс редких привилегий',
    rewards: ['Привилегия WARRIOR (40%)', 'Привилегия ELITE (35%)', 'Привилегия TITAN (20%)', 'Привилегия MASTER (5%)']
  },
  {
    id: 'privilege_titan',
    name: 'Кейс "TITAN"',
    price: 650,
    icon: 'Mountain',
    color: 'from-cyan-600 to-cyan-800',
    description: 'Высокие привилегии',
    rewards: ['Привилегия ELITE (30%)', 'Привилегия TITAN (40%)', 'Привилегия MASTER (25%)', 'Привилегия LEGEND (5%)']
  },
  {
    id: 'privilege_master',
    name: 'Кейс "MASTER"',
    price: 1300,
    icon: 'Wand2',
    color: 'from-purple-600 to-purple-800',
    description: 'Элитные привилегии',
    rewards: ['Привилегия TITAN (25%)', 'Привилегия MASTER (40%)', 'Привилегия LEGEND (30%)', 'Привилегия OVERLORD (5%)']
  },
  {
    id: 'privilege_legend',
    name: 'Кейс "LEGEND"',
    price: 3250,
    icon: 'Crown',
    color: 'from-yellow-400 to-yellow-600',
    description: 'Легендарные привилегии',
    rewards: ['Привилегия MASTER (25%)', 'Привилегия LEGEND (35%)', 'Привилегия OVERLORD (25%)', 'Привилегия PHOENIX (12%)', 'Привилегия YOUTUBE (3%)']
  }
];

const CasesSection = ({ servers, selectedServer, onServerChange, userNickname }: CasesSectionProps) => {
  const cases = useMemo(() => {
    if (selectedServer === 'anarchy') return anarchyCases;
    if (selectedServer === 'survival') return survivalCases;
    return [];
  }, [selectedServer]);

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { toast } = useToast();

  useMemo(() => {
    setQuantities(cases.reduce((acc, c) => ({ ...acc, [c.id]: 1 }), {}));
  }, [cases]);

  const handleQuantityChange = (caseId: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [caseId]: Math.max(1, Math.min(99, (prev[caseId] || 1) + delta))
    }));
  };

  const handlePurchase = (caseItem: Case) => {
    const quantity = quantities[caseItem.id] || 1;
    const totalPrice = caseItem.price * quantity;

    if (!userNickname) {
      toast({
        title: 'Ошибка',
        description: 'Сначала укажите свой ник в игре',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Покупка кейсов',
      description: `${caseItem.name} x${quantity} для ${userNickname} - ${totalPrice}₽. Перенаправляем на оплату...`
    });
  };

  const availableServers = servers.filter(s => s.id === 'anarchy' || s.id === 'survival');

  if (selectedServer === 'skywars') {
    return (
      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <h2 className="text-5xl font-extrabold text-center text-white mb-8 minecraft-shadow">
          Покупка кейсов
        </h2>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {servers.map(server => (
            <button
              key={server.id}
              onClick={() => onServerChange(server.id)}
              className={`flex items-center gap-3 px-8 py-4 font-bold text-lg transition-all duration-200 border-4 border-black ${
                selectedServer === server.id
                  ? `bg-gradient-to-br ${server.color} text-white shadow-2xl scale-110`
                  : 'bg-[#3A3A3A] text-gray-300 hover:bg-[#4A4A4A]'
              }`}
            >
              <Icon name={server.icon} size={24} />
              {server.name}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-[#2C2C2C] border-4 border-black">
            <CardContent className="p-12">
              <Icon name="Package" size={64} className="text-gray-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Кейсы недоступны</h3>
              <p className="text-gray-400 text-lg">
                На режиме Скайварс кейсы не продаются. Выберите режим Анархия или Выживание для покупки кейсов.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-center text-white mb-8 minecraft-shadow">
        Покупка кейсов
      </h2>
      
      <div className="mb-8 max-w-3xl mx-auto bg-gradient-to-r from-red-600 to-orange-600 border-4 border-black p-6 text-center animate-pulse">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Icon name="Sparkles" size={32} className="text-yellow-300" />
          <h3 className="text-3xl font-extrabold text-white minecraft-shadow">СКИДКА 35%!</h3>
          <Icon name="Sparkles" size={32} className="text-yellow-300" />
        </div>
        <p className="text-white text-xl font-bold">
          🎉 В честь открытия сервера! 🎉
        </p>
        <p className="text-yellow-200 text-lg mt-2">
          Успей купить кейсы по выгодной цене!
        </p>
      </div>

      <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
        {selectedServer === 'anarchy' 
          ? 'Открывай кейсы и получай редкие предметы, оружие и ресурсы! Чем выше уровень кейса - тем круче награды.'
          : 'Открывай кейсы и получай привилегии со скидкой! Испытай удачу и выиграй топовую привилегию!'
        }
      </p>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {availableServers.map(server => (
          <button
            key={server.id}
            onClick={() => onServerChange(server.id)}
            className={`flex items-center gap-3 px-8 py-4 font-bold text-lg transition-all duration-200 border-4 border-black ${
              selectedServer === server.id
                ? `bg-gradient-to-br ${server.color} text-white shadow-2xl scale-110`
                : 'bg-[#3A3A3A] text-gray-300 hover:bg-[#4A4A4A]'
            }`}
          >
            <Icon name={server.icon} size={24} />
            {server.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map(caseItem => (
          <Card 
            key={caseItem.id}
            className="bg-[#2C2C2C] border-4 border-black hover:scale-105 transition-all duration-300"
          >
            <CardHeader>
              <div className={`w-20 h-20 bg-gradient-to-br ${caseItem.color} rounded-lg flex items-center justify-center mb-4 mx-auto border-4 border-black`}>
                <Icon name={caseItem.icon} size={40} className="text-white" />
              </div>
              <CardTitle className="text-white text-2xl text-center">{caseItem.name}</CardTitle>
              <CardDescription className="text-gray-400 text-center">{caseItem.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Icon name="Gift" size={18} className="text-yellow-400" />
                  Возможные награды:
                </h4>
                <ul className="space-y-2">
                  {caseItem.rewards.map((reward, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-400" />
                      {reward}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 font-medium">Количество:</span>
                  <div className="flex items-center gap-3 bg-[#1A1A1A] border-2 border-black px-3 py-2">
                    <button
                      onClick={() => handleQuantityChange(caseItem.id, -1)}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <Icon name="Minus" size={20} />
                    </button>
                    <span className="text-white font-bold text-xl min-w-[40px] text-center">
                      {quantities[caseItem.id] || 1}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(caseItem.id, 1)}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <Icon name="Plus" size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 font-medium">Цена за 1 шт:</span>
                <span className="text-white font-bold text-xl">{caseItem.price}₽</span>
              </div>

              <div className="flex items-center justify-between mb-6 p-4 bg-[#1A1A1A] border-2 border-primary">
                <span className="text-primary font-bold text-lg">Итого:</span>
                <span className="text-primary font-bold text-2xl">
                  {caseItem.price * (quantities[caseItem.id] || 1)}₽
                </span>
              </div>

              <Button
                onClick={() => handlePurchase(caseItem)}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 border-4 border-black"
              >
                <Icon name="ShoppingCart" size={24} className="mr-2" />
                Купить {quantities[caseItem.id] || 1} шт.
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-4 border-black p-8 text-center">
        <Icon name="Info" size={32} className="text-yellow-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-3">Информация о кейсах</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
          <div>
            <Icon name="Package" size={24} className="text-primary mx-auto mb-2" />
            <p className="font-semibold">Моментальная выдача</p>
            <p className="text-sm">Кейсы появятся в инвентаре сразу после оплаты</p>
          </div>
          <div>
            <Icon name="Shuffle" size={24} className="text-primary mx-auto mb-2" />
            <p className="font-semibold">Случайные награды</p>
            <p className="text-sm">
              {selectedServer === 'anarchy' 
                ? 'Каждый кейс содержит один из предметов списка'
                : 'Шанс получить привилегию выше, чем её стоимость'
              }
            </p>
          </div>
          <div>
            <Icon name="TrendingUp" size={24} className="text-primary mx-auto mb-2" />
            <p className="font-semibold">
              {selectedServer === 'anarchy' ? 'Выгодные наборы' : 'Экономия до 70%'}
            </p>
            <p className="text-sm">
              {selectedServer === 'anarchy'
                ? 'Покупка нескольких кейсов сразу экономит время'
                : 'Возможность получить дорогую привилегию за меньшую цену'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;