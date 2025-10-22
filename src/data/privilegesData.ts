export interface Privilege {
  name: string;
  price: string;
  icon: string;
  color: string;
  features: string[];
}

export interface Server {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const servers: Server[] = [
  { id: 'anarchy', name: 'Анархия', icon: 'Flame', color: 'from-red-600 to-red-800' },
  { id: 'survival', name: 'Выживание', icon: 'Trees', color: 'from-green-600 to-green-800' },
  { id: 'skywars', name: 'Скайварс', icon: 'Swords', color: 'from-purple-600 to-purple-800' }
];

export const privilegesByServer: Record<string, Privilege[]> = {
  anarchy: [
    {
      name: 'VIP',
      price: '199₽',
      icon: 'Flame',
      color: 'from-orange-600 to-red-700',
      features: [
        'Цветной ник в чате',
        'Доступ к /kit vip',
        'Бессмертие 30 секунд после входа',
        '2 дополнительных слота инвентаря'
      ]
    },
    {
      name: 'PREMIUM',
      price: '499₽',
      icon: 'Sword',
      color: 'from-red-600 to-red-800',
      features: [
        'Все из VIP',
        'Доступ к /kit premium',
        'Бессмертие 60 секунд после входа',
        '5 дополнительных слотов инвентаря',
        'Возможность ставить точку /home',
        'Префикс [PREMIUM]'
      ]
    },
    {
      name: 'ULTIMATE',
      price: '999₽',
      icon: 'Skull',
      color: 'from-red-700 to-black',
      features: [
        'Все из PREMIUM',
        'Доступ к /kit ultimate',
        'Бессмертие 90 секунд после входа',
        '10 дополнительных слотов',
        '3 точки /home',
        'Уникальный префикс [АНАРХ]',
        'Приоритетный вход на сервер'
      ]
    }
  ],
  survival: [
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
    },
    {
      name: 'ELITE',
      price: '2499₽',
      icon: 'Star',
      color: 'from-purple-600 to-indigo-700',
      features: [
        'Все из ULTIMATE',
        'Доступ к /kit elite',
        'Приватные регионы до 50',
        'Телепортация /home (30 точек)',
        'Полёт в выживании (30 мин/день)',
        'Префикс [ELITE]',
        'Приоритетная очередь саппорта',
        'Уникальные эффекты частиц'
      ]
    },
    {
      name: 'LEGEND',
      price: '4999₽',
      icon: 'Award',
      color: 'from-orange-500 to-red-600',
      features: [
        'Все из ELITE',
        'Доступ к /kit legend',
        'Приватные регионы до 100',
        'Телепортация /home (50 точек)',
        'Полёт в выживании (безлимит)',
        'Префикс [LEGEND] с анимацией',
        'Личный модератор',
        'Доступ к эксклюзивным мирам',
        'Команда /god (10 мин/день)'
      ]
    },
    {
      name: 'IMPERATOR',
      price: '7777₽',
      icon: 'Crown',
      color: 'from-yellow-400 via-amber-500 to-orange-600',
      features: [
        'Все из LEGEND',
        'Доступ к /kit imperator',
        'Приватные регионы безлимит',
        'Телепортация /home безлимит',
        'Полёт везде без ограничений',
        'Префикс [IMPERATOR] с эффектами',
        'Личная команда модераторов',
        'Создание собственных событий',
        'Команда /god безлимит',
        'Именная статуя на спавне',
        'Эксклюзивный скин персонажа'
      ]
    }
  ],
  skywars: [
    {
      name: 'VIP',
      price: '249₽',
      icon: 'Feather',
      color: 'from-cyan-600 to-blue-700',
      features: [
        'Цветной ник в чате',
        'Доступ к /kit vip перед игрой',
        'Выбор карты (1 раз в час)',
        'x2 опыта за победы'
      ]
    },
    {
      name: 'PREMIUM',
      price: '549₽',
      icon: 'Zap',
      color: 'from-purple-600 to-purple-800',
      features: [
        'Все из VIP',
        'Доступ к /kit premium',
        'Выбор карты без ограничений',
        'x3 опыта за победы',
        'Доступ к режиму Solo и Team',
        'Префикс [PRO]'
      ]
    },
    {
      name: 'ULTIMATE',
      price: '1099₽',
      icon: 'Trophy',
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Все из PREMIUM',
        'Доступ к /kit ultimate',
        'x5 опыта за победы',
        'Приоритетный вход в игры',
        'Уникальные скины для персонажа',
        'Префикс [ЛЕГЕНДА]',
        'Доступ к VIP-лобби'
      ]
    }
  ]
};
