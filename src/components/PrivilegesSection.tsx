import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PrivilegesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12 minecraft-shadow">
        Сравнение привилегий
      </h2>
      <Card className="bg-[#2C2C2C] border-4 border-black">
        <CardContent className="p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b-4 border-black">
                  <th className="text-left py-4 px-4 font-bold text-lg">Возможность</th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-green-400">VIP</th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-blue-400">PREMIUM</th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-yellow-400">ULTIMATE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Цветной ник', true, true, true],
                  ['Приватные регионы', '5', '10', '20'],
                  ['Точки /home', '3', '7', '15'],
                  ['Полет в лобби', false, true, true],
                  ['Креатив', false, false, true],
                  ['Персональный саппорт', false, false, true]
                ].map((row, idx) => (
                  <tr key={idx} className="border-b-2 border-gray-700">
                    <td className="py-4 px-4 font-medium">{row[0]}</td>
                    {[1, 2, 3].map(col => (
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
    </section>
  );
};

export default PrivilegesSection;
