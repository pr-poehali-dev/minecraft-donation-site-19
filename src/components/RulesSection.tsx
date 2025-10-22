import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RulesSection = () => {
  const rules = [
    { icon: 'Ban', text: 'Запрещен любой читинг и использование модов дающих преимущество' },
    { icon: 'MessageSquareOff', text: 'Запрещены оскорбления, мат и токсичное поведение' },
    { icon: 'AlertTriangle', text: 'Запрещен спам в чате и флуд' },
    { icon: 'Home', text: 'Запрещен гриф чужих построек без разрешения' },
    { icon: 'ShieldAlert', text: 'Запрещена реклама других серверов' },
    { icon: 'Bug', text: 'Использование багов и эксплойтов карается баном' }
  ];

  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12 minecraft-shadow">
        Правила сервера
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {rules.map((rule, idx) => (
          <Card key={idx} className="bg-[#2C2C2C] border-4 border-red-700 hover:scale-105 transition-transform">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-black">
                <Icon name={rule.icon} size={24} className="text-white" />
              </div>
              <p className="text-white font-medium text-lg">{rule.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Card className="bg-yellow-900/50 border-4 border-yellow-600 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <Icon name="AlertTriangle" size={48} className="text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Важно!</h3>
            <p className="text-yellow-100 text-lg">
              Нарушение правил влечет за собой предупреждение, мут или бан. 
              При повторных нарушениях - перманентная блокировка аккаунта.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RulesSection;
