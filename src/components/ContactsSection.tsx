import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
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
  );
};

export default ContactsSection;
