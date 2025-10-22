import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const privileges = [
    {
      name: 'VIP',
      price: '299₽',
      icon: 'Gem',
      color: 'from-green-600 to-green-700',
      features: [
        'Цветной ник в чате',
        'Доступ к /kit vip',
        'Приватные регионы до 5',
        'Телепортация /home (3 точки)'
      ]
    },
    {
      name: 'PREMIUM',
      price: '599₽',
      icon: 'Crown',
      color: 'from-blue-600 to-blue-700',
      features: [
        'Все из VIP',
        'Доступ к /kit premium',
        'Приватные регионы до 10',
        'Телепортация /home (7 точек)',
        'Возможность летать в лобби',
        'Префикс [PREMIUM]'
      ]
    },
    {
      name: 'ULTIMATE',
      price: '1299₽',
      icon: 'Sparkles',
      color: 'from-yellow-500 to-amber-600',
      features: [
        'Все из PREMIUM',
        'Доступ к /kit ultimate',
        'Приватные регионы до 20',
        'Телепортация /home (15 точек)',
        'Креатив в приватном мире',
        'Префикс [ULTIMATE]',
        'Персональный саппорт'
      ]
    }
  ];

  const faqItems = [
    {
      question: 'Как активировать привилегию?',
      answer: 'После оплаты привилегия активируется автоматически в течение 5 минут. Если этого не произошло - обратитесь в поддержку.'
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Возврат средств возможен в течение 14 дней при наличии технических проблем с нашей стороны.'
    },
    {
      question: 'Сколько действует привилегия?',
      answer: 'Все привилегии выдаются навсегда. Вы покупаете один раз и пользуетесь постоянно.'
    },
    {
      question: 'Можно ли передать привилегию другому игроку?',
      answer: 'Нет, привилегии привязываются к вашему аккаунту и не могут быть переданы.'
    }
  ];

  const rules = [
    { icon: 'Ban', text: 'Запрещен любой читинг и использование модов дающих преимущество' },
    { icon: 'MessageSquareOff', text: 'Запрещены оскорбления, мат и токсичное поведение' },
    { icon: 'AlertTriangle', text: 'Запрещен спам в чате и флуд' },
    { icon: 'Home', text: 'Запрещен гриф чужих построек без разрешения' },
    { icon: 'ShieldAlert', text: 'Запрещена реклама других серверов' },
    { icon: 'Bug', text: 'Использование багов и эксплойтов карается баном' }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-[#2C2C2C] border-b-4 border-black z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-2xl font-bold border-2 border-black pixelated">
                MC
              </div>
              <h1 className="text-2xl font-bold text-white minecraft-shadow">MINE DONATE</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'donate', label: 'Донат', icon: 'ShoppingCart' },
                { id: 'privileges', label: 'Привилегии', icon: 'Award' },
                { id: 'rules', label: 'Правила', icon: 'BookOpen' },
                { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
                { id: 'contacts', label: 'Контакты', icon: 'Mail' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 font-semibold transition-all duration-200 border-2 ${
                    activeSection === item.id
                      ? 'bg-primary text-white border-black shadow-lg'
                      : 'bg-[#3A3A3A] text-gray-300 border-black hover:bg-[#4A4A4A]'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        {activeSection === 'home' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-extrabold text-white mb-6 minecraft-shadow">
                Добро пожаловать!
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Лучший сервер Minecraft с уникальными возможностями и дружным комьюнити
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 border-4 border-black shadow-lg"
                  onClick={() => setActiveSection('donate')}
                >
                  <Icon name="Zap" size={24} className="mr-2" />
                  Купить привилегию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-[#3A3A3A] hover:bg-[#4A4A4A] text-white font-bold text-lg px-8 py-6 border-4 border-black"
                  onClick={() => setActiveSection('rules')}
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
                play.minecraft-server.ru
              </code>
            </div>
          </section>
        )}

        {activeSection === 'donate' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-extrabold text-center text-white mb-12 minecraft-shadow">
              Донат привилегии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {privileges.map((priv, idx) => (
                <Card key={idx} className={`bg-gradient-to-br ${priv.color} border-4 border-black hover:scale-105 transition-transform shadow-2xl`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-3xl font-extrabold text-white minecraft-shadow">
                        {priv.name}
                      </CardTitle>
                      <div className="w-16 h-16 bg-black/30 rounded-lg flex items-center justify-center border-2 border-black">
                        <Icon name={priv.icon} size={32} className="text-white" />
                      </div>
                    </div>
                    <div className="text-5xl font-extrabold text-yellow-300 mb-6 minecraft-shadow">
                      {priv.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {priv.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-white font-medium">
                          <Icon name="Check" size={20} className="text-yellow-300 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6 border-4 border-black shadow-lg"
                    >
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Купить {priv.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'privileges' && (
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
        )}

        {activeSection === 'rules' && (
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
        )}

        {activeSection === 'faq' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-extrabold text-center text-white mb-12 minecraft-shadow">
              Часто задаваемые вопросы
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`item-${idx}`}
                    className="bg-[#2C2C2C] border-4 border-black px-6"
                  >
                    <AccordionTrigger className="text-white font-bold text-lg hover:text-yellow-400">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-extrabold text-center text-white mb-12 minecraft-shadow">
              Контакты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: 'MessageCircle', title: 'Discord', value: 'discord.gg/minecraft', color: 'from-indigo-600 to-indigo-800' },
                { icon: 'Send', title: 'Telegram', value: '@minecraft_support', color: 'from-blue-500 to-blue-700' },
                { icon: 'Mail', title: 'Email', value: 'support@minecraft.ru', color: 'from-green-600 to-green-800' }
              ].map((contact, idx) => (
                <Card key={idx} className={`bg-gradient-to-br ${contact.color} border-4 border-black hover:scale-105 transition-transform`}>
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-black/30 rounded-lg flex items-center justify-center mx-auto mb-4 border-2 border-black">
                      <Icon name={contact.icon} size={40} className="text-white" />
                    </div>
                    <CardTitle className="text-white text-2xl minecraft-shadow">{contact.title}</CardTitle>
                    <CardDescription className="text-white font-bold text-lg mt-2">
                      {contact.value}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <Card className="mt-12 max-w-2xl mx-auto bg-[#2C2C2C] border-4 border-black">
              <CardHeader>
                <CardTitle className="text-white text-2xl text-center">Написать в поддержку</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваш никнейм" 
                  className="w-full p-4 bg-[#3A3A3A] text-white border-2 border-black font-medium"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-4 bg-[#3A3A3A] text-white border-2 border-black font-medium"
                />
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows={5}
                  className="w-full p-4 bg-[#3A3A3A] text-white border-2 border-black font-medium resize-none"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 border-4 border-black">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      <footer className="bg-[#1A1A1A] border-t-4 border-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 font-medium">© 2024 Minecraft Server. Все права защищены.</p>
          <p className="text-gray-500 text-sm mt-2">Сервер не является официальным проектом Mojang Studios</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
