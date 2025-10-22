import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PrivilegesSection = () => {
  const [selectedMode, setSelectedMode] = useState<'survival' | 'anarchy' | 'skywars'>('survival');

  const survivalData = [
    ['Цветной ник', true, true, true, true, true, true],
    ['Доступ к /kit', 'vip', 'premium', 'ultimate', 'elite', 'legend', 'imperator'],
    ['Приватные регионы', '5', '10', '20', '50', '100', '∞'],
    ['Точки /home', '3', '7', '15', '30', '50', '∞'],
    ['Полет в лобби', false, true, true, true, true, true],
    ['Полет в выживании', false, false, false, '30м/д', '∞', '∞'],
    ['Креатив в приватном мире', false, false, true, true, true, true],
    ['Команда /feed', false, false, false, false, false, false],
    ['Команда /heal', false, false, false, false, '5м кд', 'без кд'],
    ['Команда /god', false, false, false, false, '10м/д', '∞'],
    ['Персональный саппорт', false, false, true, true, true, true],
    ['Личный модератор', false, false, false, false, true, true],
    ['Личная команда модераторов', false, false, false, false, false, true],
    ['Приоритетная очередь саппорта', false, false, false, true, true, true],
    ['Уникальные эффекты частиц', false, false, false, true, true, true],
    ['Доступ к эксклюзивным мирам', false, false, false, false, true, true],
    ['Создание собственных событий', false, false, false, false, false, true],
    ['Именная статуя на спавне', false, false, false, false, false, true],
    ['Эксклюзивный скин персонажа', false, false, false, false, false, true],
    ['Цена', '299₽', '599₽', '1299₽', '2499₽', '4999₽', '7777₽']
  ];

  const anarchyData = [
    ['Цветной ник', true, true, true, true, true, true],
    ['Доступ к /kit', 'vip', 'premium', 'ultimate', 'elite', 'legend', 'imperator'],
    ['Бессмертие после входа', '30с', '60с', '90с', '120с', '180с', '300с'],
    ['Дополнительные слоты', '2', '5', '10', '15', '20', '30'],
    ['Точки /home', '1', '1', '3', '5', '10', '20'],
    ['Команда /feed', false, false, false, true, true, true],
    ['Команда /heal', false, false, false, false, '5м кд', 'без кд'],
    ['Полет', false, false, false, '15м/д', '30м/д', '∞'],
    ['Команда /god', false, false, false, false, false, '10м/д'],
    ['Личный сундук', false, false, false, false, '54', '108'],
    ['Приоритетный вход', false, false, true, true, true, true],
    ['Доступ к эксклюзивным зонам', false, false, false, false, false, true],
    ['Именная статуя на спавне', false, false, false, false, false, true],
    ['Цена', '199₽', '499₽', '999₽', '1999₽', '3999₽', '7777₽']
  ];

  const skywarsData = [
    ['Цветной ник', true, true, true, true, true, true],
    ['Доступ к /kit', 'vip', 'premium', 'ultimate', 'elite', 'legend', 'imperator'],
    ['Множитель опыта', 'x2', 'x3', 'x5', 'x8', 'x12', 'x20'],
    ['Выбор карты', '1/час', '∞', '∞', '∞', '∞', '∞'],
    ['Приоритетный вход в игры', false, false, true, true, true, true],
    ['Уникальные скины', false, false, true, '5', '10', '∞'],
    ['Доступ к VIP-лобби', false, false, true, false, false, false],
    ['Доступ к Elite-лобби', false, false, false, true, false, false],
    ['Персональное лобби', false, false, false, false, true, false],
    ['Эксклюзивное лобби', false, false, false, false, false, true],
    ['Уникальные эффекты смерти', false, false, false, true, true, true],
    ['Уникальные trail-эффекты', false, false, false, false, true, true],
    ['Уникальные win-эффекты', false, false, false, false, false, true],
    ['Создание приватных игр', false, false, false, false, true, true],
    ['Модерация приватных игр', false, false, false, false, false, true],
    ['Команда /heal в лобби', false, false, false, false, true, true],
    ['Команда /fly в лобби', false, false, false, false, false, true],
    ['Выбор музыки в лобби', false, false, false, false, false, true],
    ['Именная карта на сервере', false, false, false, false, false, true],
    ['Личный саппорт команды', false, false, false, false, false, true],
    ['Цена', '249₽', '549₽', '1099₽', '2199₽', '4299₽', '7777₽']
  ];

  const data = selectedMode === 'survival' ? survivalData : selectedMode === 'anarchy' ? anarchyData : skywarsData;

  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-center text-white mb-8 minecraft-shadow">
        Сравнение привилегий
      </h2>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <button
          onClick={() => setSelectedMode('survival')}
          className={`flex items-center gap-3 px-8 py-4 font-bold text-lg transition-all duration-200 border-4 border-black ${
            selectedMode === 'survival'
              ? 'bg-gradient-to-br from-green-600 to-green-800 text-white shadow-2xl scale-110'
              : 'bg-[#3A3A3A] text-gray-300 hover:bg-[#4A4A4A]'
          }`}
        >
          <Icon name="Trees" size={24} />
          Выживание
        </button>
        <button
          onClick={() => setSelectedMode('anarchy')}
          className={`flex items-center gap-3 px-8 py-4 font-bold text-lg transition-all duration-200 border-4 border-black ${
            selectedMode === 'anarchy'
              ? 'bg-gradient-to-br from-red-600 to-red-800 text-white shadow-2xl scale-110'
              : 'bg-[#3A3A3A] text-gray-300 hover:bg-[#4A4A4A]'
          }`}
        >
          <Icon name="Flame" size={24} />
          Анархия
        </button>
        <button
          onClick={() => setSelectedMode('skywars')}
          className={`flex items-center gap-3 px-8 py-4 font-bold text-lg transition-all duration-200 border-4 border-black ${
            selectedMode === 'skywars'
              ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-2xl scale-110'
              : 'bg-[#3A3A3A] text-gray-300 hover:bg-[#4A4A4A]'
          }`}
        >
          <Icon name="Swords" size={24} />
          Скайварс
        </button>
      </div>

      <Card className="bg-[#2C2C2C] border-4 border-black">
        <CardContent className="p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-white min-w-[900px]">
              <thead>
                <tr className="border-b-4 border-black">
                  <th className="text-left py-4 px-4 font-bold text-lg sticky left-0 bg-[#2C2C2C]">Возможность</th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-orange-400">VIP</th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-red-400">PREMIUM</th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-purple-400">ULTIMATE</th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-indigo-400">ELITE</th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-cyan-400">LEGEND</th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-yellow-400">IMPERATOR</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx} className="border-b-2 border-gray-700 hover:bg-[#3A3A3A] transition-colors">
                    <td className="py-4 px-4 font-medium sticky left-0 bg-[#2C2C2C]">{row[0]}</td>
                    {[1, 2, 3, 4, 5, 6].map(col => (
                      <td key={col} className="text-center py-4 px-4">
                        {typeof row[col] === 'boolean' ? (
                          row[col] ? (
                            <Icon name="Check" size={24} className="text-green-400 mx-auto" />
                          ) : (
                            <Icon name="X" size={24} className="text-red-400 mx-auto" />
                          )
                        ) : (
                          <span className="font-bold text-lg">{row[col]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          ∞ = безлимит • м/д = минут в день • кд = кулдаун • с = секунд
        </p>
      </div>
    </section>
  );
};

export default PrivilegesSection;
