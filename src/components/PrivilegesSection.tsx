import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PrivilegesSection = () => {
  const [selectedMode, setSelectedMode] = useState<'survival' | 'anarchy' | 'skywars'>('survival');

  const survivalData = [
    ['Цветной ник', true, true, true, true, true, true, true, true, true, true],
    ['Доступ к /kit', 'путник', 'рыцарь', 'хранитель', 'титан', 'магистр', 'властитель', 'повелитель', 'владыка', 'диоген', 'легенда'],
    ['Приватные регионы', '3', '7', '15', '30', '50', '75', '100', '150', '∞', '∞'],
    ['Точки /home', '2', '5', '10', '20', '35', '50', '70', '100', '∞', '∞'],
    ['Полет в лобби', false, true, true, true, true, true, true, true, true, true],
    ['Полет в выживании', false, false, false, '20м/д', '40м/д', '60м/д', '90м/д', '∞', '∞', '∞'],
    ['Креатив в приватном мире', false, false, true, true, true, true, true, true, true, true],
    ['Команда /feed', false, false, false, false, true, true, true, true, true, true],
    ['Команда /heal', false, false, false, false, false, false, true, true, true, true],
    ['Команда /god', false, false, false, false, false, '5м/д', '8м/д', '10м/д', '15м/д', '∞'],
    ['Персональный саппорт', false, false, true, true, true, true, true, true, true, true],
    ['Личный модератор', false, false, false, false, true, true, true, true, true, true],
    ['Личная команда модераторов', false, false, false, false, false, false, false, false, false, true],
    ['Приоритетная очередь', false, false, false, true, true, true, true, true, true, true],
    ['Уникальные эффекты частиц', false, false, false, true, true, true, true, true, true, true],
    ['Доступ к эксклюзивным мирам', false, false, false, false, true, true, true, true, true, true],
    ['Личный сундук', false, false, false, false, false, '54', '81', '108', '135', '∞'],
    ['Создание варпов', false, false, false, false, false, true, true, true, true, true],
    ['Создание своих миров', false, false, false, false, false, false, false, false, true, true],
    ['Команды /time и /weather', false, false, false, false, false, false, false, false, true, true],
    ['Создание событий', false, false, false, false, false, false, false, true, true, true],
    ['Влияние на развитие', false, false, false, false, false, false, false, false, false, true],
    ['Именная статуя на спавне', false, false, false, false, false, false, false, false, false, true],
    ['Эксклюзивный скин', false, false, false, false, false, false, false, false, true, true],
    ['Создание плагинов', false, false, false, false, false, false, false, false, false, true],
    ['Цена', '77₽', '277₽', '777₽', '1777₽', '2777₽', '3777₽', '4777₽', '5777₽', '6777₽', '7777₽']
  ];

  const anarchyData = [
    ['Цветной ник', true, true, true, true, true, true, true, true, true, true],
    ['Доступ к /kit', 'путник', 'рыцарь', 'хранитель', 'титан', 'магистр', 'властитель', 'повелитель', 'владыка', 'диоген', 'легенда'],
    ['Бессмертие после входа', '30с', '60с', '90с', '120с', '150с', '180с', '240с', '270с', '300с', '360с'],
    ['Дополнительные слоты', '2', '5', '10', '15', '20', '25', '28', '30', '35', '∞'],
    ['Точки /home', false, '1', '3', '5', '7', '10', '15', '18', '25', '∞'],
    ['Команда /feed', false, false, false, true, true, true, true, true, true, true],
    ['Команда /heal', false, false, false, false, '5м кд', '3м кд', '1м кд', 'без кд', 'без кд', 'без кд'],
    ['Полет', false, false, false, '15м/д', '25м/д', '40м/д', '60м/д', '90м/д', '∞', '∞'],
    ['Команда /god', false, false, false, false, false, false, '5м/д', '8м/д', '12м/д', '∞'],
    ['Личный сундук', false, false, false, false, '27', '54', '81', '108', '135', '∞'],
    ['Приоритетный вход', false, false, true, true, true, true, true, true, true, true],
    ['Подземные зоны', false, false, false, false, false, false, false, true, true, true],
    ['Эксклюзивные миры', false, false, false, false, false, false, false, false, true, true],
    ['Создание телепортов', false, false, false, false, false, false, false, false, true, true],
    ['Личная команда модераторов', false, false, false, false, false, false, false, false, false, true],
    ['Проведение ивентов', false, false, false, false, false, false, false, false, false, true],
    ['Именная статуя на спавне', false, false, false, false, false, false, false, false, false, true],
    ['Цена', '77₽', '277₽', '777₽', '1777₽', '2777₽', '3777₽', '4777₽', '5777₽', '6777₽', '7777₽']
  ];

  const skywarsData = [
    ['Цветной ник', true, true, true, true, true, true, true, true, true, true],
    ['Доступ к /kit', 'путник', 'рыцарь', 'хранитель', 'титан', 'магистр', 'властитель', 'повелитель', 'владыка', 'диоген', 'легенда'],
    ['Множитель опыта', 'x1.5', 'x2', 'x3', 'x5', 'x7', 'x10', 'x13', 'x16', 'x18', 'x20'],
    ['Выбор карты', '1/час', '30мин', '∞', '∞', '∞', '∞', '∞', '∞', '∞', '∞'],
    ['Приоритетный вход', false, false, true, true, true, true, true, true, true, true],
    ['Уникальные скины', false, false, '2', '5', '8', '12', '15', '20', '25', '∞'],
    ['Доступ к VIP-лобби', false, false, true, true, true, true, true, true, true, true],
    ['Доступ к Elite-лобби', false, false, false, true, true, true, true, true, true, true],
    ['Персональное лобби', false, false, false, false, true, true, true, true, true, true],
    ['Эксклюзивное лобби', false, false, false, false, false, true, true, true, true, true],
    ['Именное лобби', false, false, false, false, false, false, false, true, true, true],
    ['Лобби с памятником', false, false, false, false, false, false, false, false, false, true],
    ['Эффекты смерти', false, false, false, true, true, true, true, true, true, true],
    ['Trail-эффекты', false, false, false, false, true, true, true, true, true, true],
    ['Win-эффекты', false, false, false, false, false, true, true, true, true, true],
    ['Spawn-эффекты', false, false, false, false, false, false, false, true, true, true],
    ['Particle-эффекты', false, false, false, false, false, false, false, false, true, true],
    ['Kill-эффекты', false, false, false, false, false, false, true, true, true, true],
    ['Приватные игры (игроков)', false, false, false, false, '8', '12', '16', '24', '∞', '∞'],
    ['Модерация игр', false, false, false, false, false, true, true, true, true, true],
    ['Команда /heal в лобби', false, false, false, false, true, true, true, true, true, true],
    ['Команда /fly в лобби', false, false, false, false, false, true, true, true, true, true],
    ['Создание карт', false, false, false, false, false, false, false, true, true, true],
    ['Создание режимов', false, false, false, false, false, false, false, false, true, true],
    ['Проведение турниров', false, false, false, false, false, true, true, true, true, true],
    ['Организация ивентов', false, false, false, false, false, false, false, false, false, true],
    ['Именная карта', false, false, false, false, false, false, true, true, true, true],
    ['Статуя в главном лобби', false, false, false, false, false, false, false, false, false, true],
    ['Влияние на развитие', false, false, false, false, false, false, false, false, false, true],
    ['Цена', '77₽', '277₽', '777₽', '1777₽', '2777₽', '3777₽', '4777₽', '5777₽', '6777₽', '7777₽']
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
                  <th className="text-center py-4 px-4 font-bold text-sm text-gray-400">LITE</th>
                  <th className="text-center py-4 px-4 font-bold text-sm text-slate-400">ELITE</th>
                  <th className="text-center py-4 px-4 font-bold text-sm text-blue-400">TITAN</th>
                  <th className="text-center py-4 px-4 font-bold text-sm text-stone-400">MASTER</th>
                  <th className="text-center py-4 px-4 font-bold text-sm text-purple-400">LEGEND</th>
                  <th className="text-center py-4 px-4 font-bold text-sm text-emerald-400">OVERLORD</th>
                  <th className="text-center py-4 px-4 font-bold text-sm text-red-400">PHOENIX</th>
                  <th className="text-center py-4 px-4 font-bold text-sm text-orange-400">PHOENIX+</th>
                  <th className="text-center py-4 px-4 font-bold text-sm text-cyan-400">PHOENIX++</th>
                  <th className="text-center py-4 px-4 font-bold text-sm text-yellow-400">PHOENIX+++</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx} className="border-b-2 border-gray-700 hover:bg-[#3A3A3A] transition-colors">
                    <td className="py-4 px-4 font-medium sticky left-0 bg-[#2C2C2C]">{row[0]}</td>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(col => (
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