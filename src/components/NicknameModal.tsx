import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface NicknameModalProps {
  onSubmit: (nickname: string) => void;
}

const NicknameModal = ({ onSubmit }: NicknameModalProps) => {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (nickname.trim().length < 3) {
      setError('Ник должен быть минимум 3 символа');
      return;
    }
    if (nickname.trim().length > 16) {
      setError('Ник не может быть длиннее 16 символов');
      return;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(nickname.trim())) {
      setError('Ник может содержать только буквы, цифры и _');
      return;
    }
    onSubmit(nickname.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="bg-[#2C2C2C] border-4 border-black max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center mx-auto mb-4 border-4 border-black">
            <Icon name="User" size={40} className="text-white" />
          </div>
          <CardTitle className="text-white text-3xl minecraft-shadow">Добро пожаловать!</CardTitle>
          <CardDescription className="text-gray-300 text-lg mt-2">
            Введите ваш игровой ник для покупки доната
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Введите ваш ник..."
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
              className="w-full p-4 bg-[#3A3A3A] text-white text-lg border-4 border-black font-semibold placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              maxLength={16}
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-sm mt-2 font-medium flex items-center gap-1">
                <Icon name="AlertCircle" size={16} />
                {error}
              </p>
            )}
          </div>
          
          <Button
            onClick={handleSubmit}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 border-4 border-black"
          >
            <Icon name="ArrowRight" size={20} className="mr-2" />
            Продолжить
          </Button>

          <div className="bg-[#3A3A3A] border-2 border-black p-4 mt-4">
            <p className="text-gray-400 text-sm text-center">
              <Icon name="Info" size={16} className="inline mr-1" />
              Ник будет использован для активации привилегий на сервере
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NicknameModal;
