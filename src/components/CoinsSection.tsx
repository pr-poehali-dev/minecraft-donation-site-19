import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Server {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface CoinsSectionProps {
  servers: Server[];
  selectedServer: string;
  onServerChange: (serverId: string) => void;
  userNickname?: string | null;
}

interface CoinPackage {
  coins: number;
  price: string;
  bonus?: number;
  color: string;
}

const coinPackages: CoinPackage[] = [
  { coins: 100, price: '33₽', color: 'from-gray-600 to-gray-700' },
  { coins: 250, price: '65₽', bonus: 10, color: 'from-blue-600 to-blue-700' },
  { coins: 500, price: '130₽', bonus: 25, color: 'from-purple-600 to-purple-700' },
  { coins: 1000, price: '228₽', bonus: 100, color: 'from-orange-600 to-orange-700' },
  { coins: 2500, price: '520₽', bonus: 300, color: 'from-red-600 to-red-700' },
  { coins: 5000, price: '975₽', bonus: 750, color: 'from-yellow-500 to-amber-600' }
];

const CoinsSection = ({ servers, selectedServer, onServerChange, userNickname }: CoinsSectionProps) => {
  const [customAmount, setCustomAmount] = useState('');

  const handlePurchase = (coins: number, price: string, bonus?: number) => {
    const totalCoins = bonus ? coins + bonus : coins;
    alert(`Покупка ${coins} койнов${bonus ? ` (+${bonus} бонус)` : ''} для игрока ${userNickname}\nИтого койнов: ${totalCoins}\nЦена: ${price}\n\nВ демо-версии оплата недоступна.`);
  };

  const handleCustomPurchase = () => {
    const amount = parseInt(customAmount);
    if (amount && amount >= 10) {
      const price = Math.ceil(amount * 0.5);
      alert(`Покупка ${amount} койнов для игрока ${userNickname}\nЦена: ${price}₽\n\nВ демо-версии оплата недоступна.`);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-center text-white mb-4 minecraft-shadow">
        Покупка койнов
      </h2>
      <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
        Игровая валюта для покупки предметов, улучшений и косметики на сервере
      </p>
      
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {servers.map((server) => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
        {coinPackages.map((pkg, idx) => (
          <Card key={idx} className={`bg-gradient-to-br ${pkg.color} border-4 border-black hover:scale-105 transition-transform shadow-2xl`}>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="w-16 h-16 bg-black/30 rounded-lg flex items-center justify-center border-2 border-black">
                  <Icon name="Coins" size={32} className="text-yellow-300" />
                </div>
                {pkg.bonus && (
                  <div className="bg-yellow-400 text-black px-3 py-1 font-bold text-sm border-2 border-black">
                    +{pkg.bonus} бонус
                  </div>
                )}
              </div>
              <CardTitle className="text-4xl font-extrabold text-white minecraft-shadow">
                {pkg.coins.toLocaleString()}
                {pkg.bonus && (
                  <span className="text-yellow-300 text-2xl ml-2">+{pkg.bonus}</span>
                )}
              </CardTitle>
              <p className="text-white/80 font-medium">койнов</p>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold text-yellow-300 mb-6 minecraft-shadow text-center">
                {pkg.price}
              </div>
              <Button 
                onClick={() => handlePurchase(pkg.coins, pkg.price, pkg.bonus)}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6 border-4 border-black shadow-lg"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Купить
              </Button>
              {userNickname && (
                <p className="text-white/80 text-sm text-center mt-3 font-medium">
                  <Icon name="User" size={14} className="inline mr-1" />
                  Ник: {userNickname}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 border-4 border-black">
        <CardHeader>
          <CardTitle className="text-white text-3xl minecraft-shadow text-center">
            Свое количество койнов
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Введите количество (мин. 10)"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="flex-1 p-4 bg-[#3A3A3A] text-white text-lg border-4 border-black font-semibold placeholder-gray-500"
              min="10"
            />
            <div className="bg-black/30 px-6 flex items-center justify-center border-4 border-black min-w-[120px]">
              <span className="text-yellow-300 font-bold text-2xl minecraft-shadow">
                {customAmount && parseInt(customAmount) >= 10 
                  ? `${Math.ceil(parseInt(customAmount) * 0.5)}₽` 
                  : '—'}
              </span>
            </div>
          </div>
          <Button 
            onClick={handleCustomPurchase}
            disabled={!customAmount || parseInt(customAmount) < 10}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6 border-4 border-black shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon name="Coins" size={20} className="mr-2" />
            Купить {customAmount || '0'} койнов
          </Button>
          <p className="text-white/70 text-sm text-center">
            1 койн = 0.5₽ • Минимальная покупка: 10 койнов
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default CoinsSection;