import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  userNickname?: string | null;
}

const Navigation = ({ activeSection, onSectionChange, userNickname }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-[#2C2C2C] border-b-4 border-black z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-2xl font-bold border-2 border-black pixelated">
                MC
              </div>
              <h1 className="text-2xl font-bold text-white minecraft-shadow">Mellicemo-Craft</h1>
            </div>
            {userNickname && (
              <div className="hidden lg:flex items-center gap-2 bg-[#3A3A3A] px-4 py-2 border-2 border-black">
                <Icon name="User" size={18} className="text-green-400" />
                <span className="text-white font-semibold">{userNickname}</span>
              </div>
            )}
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
                onClick={() => onSectionChange(item.id)}
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
  );
};

export default Navigation;