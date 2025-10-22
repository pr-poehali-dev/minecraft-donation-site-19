import { useState } from 'react';
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

const cases: Case[] = [
  {
    id: 'starter',
    name: 'Стартовый кейс',
    price: 50,
    icon: 'Package',
    color: 'from-gray-600 to-gray-800',
    description: 'Базовые ресурсы для старта',
    rewards: ['Железная броня', 'Набор инструментов', 'Еда x32', 'Факелы x64']
  },
  {
    id: 'rare',
    name: 'Редкий кейс',
    price: 150,
    icon: 'Gift',
    color: 'from-blue-600 to-blue-800',
    description: 'Ценные предметы и ресурсы',
    rewards: ['Алмазная броня', 'Зачарованные инструменты', 'Изумруды x16', 'Золотые яблоки x8']
  },
  {
    id: 'epic',
    name: 'Эпический кейс',
    price: 350,
    icon: 'Sparkles',
    color: 'from-purple-600 to-purple-800',
    description: 'Мощные артефакты',
    rewards: ['Незеритовая броня', 'Элитровы крылья', 'Тотем бессмертия x3', 'Сундук-шалкер']
  },
  {
    id: 'legendary',
    name: 'Легендарный кейс',
    price: 750,
    icon: 'Trophy',
    color: 'from-yellow-500 to-orange-600',
    description: 'Эксклюзивные награды',
    rewards: ['Полный незерит с зачарами', 'Маяк + блоки', 'Звезда незера x5', 'Уникальные зелья']
  },
  {
    id: 'mythic',
    name: 'Мифический кейс',
    price: 1500,
    icon: 'Crown',
    color: 'from-red-600 to-pink-700',
    description: 'Сокровища богов',
    rewards: ['Кастомное оружие', 'Редкие питомцы', 'Креативные блоки', 'Уникальные скины']
  }
];

const CasesSection = ({ servers, selectedServer, onServerChange, userNickname }: CasesSectionProps) => {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    cases.reduce((acc, c) => ({ ...acc, [c.id]: 1 }), {})
  );
  const { toast } = useToast();

  const handleQuantityChange = (caseId: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [caseId]: Math.max(1, Math.min(99, prev[caseId] + delta))
    }));
  };

  const handlePurchase = (caseItem: Case) => {
    const quantity = quantities[caseItem.id];
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

  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-center text-white mb-8 minecraft-shadow">
        Покупка кейсов
      </h2>
      <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
        Открывай кейсы и получай редкие предметы, оружие и ресурсы! Чем выше уровень кейса - тем круче награды.
      </p>

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
                      {quantities[caseItem.id]}
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
                  {caseItem.price * quantities[caseItem.id]}₽
                </span>
              </div>

              <Button
                onClick={() => handlePurchase(caseItem)}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 border-4 border-black"
              >
                <Icon name="ShoppingCart" size={24} className="mr-2" />
                Купить {quantities[caseItem.id]} шт.
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
            <p className="text-sm">Каждый кейс содержит один из предметов списка</p>
          </div>
          <div>
            <Icon name="TrendingUp" size={24} className="text-primary mx-auto mb-2" />
            <p className="font-semibold">Выгодные наборы</p>
            <p className="text-sm">Покупка нескольких кейсов сразу экономит время</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
