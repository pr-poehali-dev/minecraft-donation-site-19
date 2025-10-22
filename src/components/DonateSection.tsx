import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Privilege {
  name: string;
  price: string;
  icon: string;
  color: string;
  features: string[];
}

interface Server {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface DonateSectionProps {
  servers: Server[];
  selectedServer: string;
  onServerChange: (serverId: string) => void;
  privileges: Privilege[];
}

const DonateSection = ({ servers, selectedServer, onServerChange, privileges }: DonateSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12 minecraft-shadow">
        Донат привилегии
      </h2>
      
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
  );
};

export default DonateSection;
