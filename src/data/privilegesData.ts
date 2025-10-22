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
      name: 'LITE',
      price: '77₽',
      icon: 'Footprints',
      color: 'from-gray-500 to-gray-700',
      features: [
        'Цветной ник в чате',
        'Доступ к /kit lite',
        'Бессмертие 30 секунд после входа',
        '2 дополнительных слота инвентаря'
      ]
    },
    {
      name: 'WARRIOR',
      price: '177₽',
      icon: 'Sword',
      color: 'from-slate-600 to-slate-800',
      features: [
        'Все из LITE',
        'Доступ к /kit warrior',
        'Бессмертие 60 секунд после входа',
        '5 дополнительных слотов инвентаря',
        'Возможность ставить точку /home',
        'Префикс [WARRIOR]'
      ]
    },
    {
      name: 'ELITE',
      price: '277₽',
      icon: 'Shield',
      color: 'from-blue-600 to-blue-800',
      features: [
        'Все из WARRIOR',
        'Доступ к /kit elite',
        'Бессмертие 90 секунд после входа',
        '10 дополнительных слотов',
        '3 точки /home',
        'Префикс [ELITE]',
        'Приоритетный вход на сервер'
      ]
    },
    {
      name: 'TITAN',
      price: '777₽',
      icon: 'Mountain',
      color: 'from-zinc-600 to-stone-700',
      features: [
        'Все из ELITE',
        'Доступ к /kit titan',
        'Бессмертие 120 секунд',
        '15 дополнительных слотов',
        '5 точек /home',
        'Префикс [TITAN]',
        'Команда /feed',
        'Возможность летать 15 мин/день'
      ]
    },
    {
      name: 'MASTER',
      price: '1777₽',
      icon: 'Wand2',
      color: 'from-purple-600 to-indigo-700',
      features: [
        'Все из TITAN',
        'Доступ к /kit master',
        'Бессмертие 150 секунд',
        '20 дополнительных слотов',
        '7 точек /home',
        'Префикс [MASTER]',
        'Команда /heal (5 мин кд)',
        'Полёт 25 мин/день',
        'Личный сундук 27 слотов'
      ]
    },
    {
      name: 'LEGEND',
      price: '2777₽',
      icon: 'Gem',
      color: 'from-emerald-600 to-green-700',
      features: [
        'Все из MASTER',
        'Доступ к /kit legend',
        'Бессмертие 180 секунд',
        '25 дополнительных слотов',
        '10 точек /home',
        'Префикс [LEGEND]',
        'Команда /heal (3 мин кд)',
        'Полёт 40 мин/день',
        'Личный сундук 54 слота'
      ]
    },
    {
      name: 'OVERLORD',
      price: '3777₽',
      icon: 'Skull',
      color: 'from-red-700 to-black',
      features: [
        'Все из LEGEND',
        'Доступ к /kit overlord',
        'Бессмертие 240 секунд',
        '28 дополнительных слотов',
        '15 точек /home',
        'Префикс [OVERLORD]',
        'Команда /heal (1 мин кд)',
        'Полёт 60 мин/день',
        'Команда /god (5 мин/день)',
        'Личный сундук 81 слот'
      ]
    },
    {
      name: 'PHOENIX',
      price: '4777₽',
      icon: 'Pickaxe',
      color: 'from-orange-600 to-red-700',
      features: [
        'Все из OVERLORD',
        'Доступ к /kit phoenix',
        'Бессмертие 270 секунд',
        '30 дополнительных слотов',
        '18 точек /home',
        'Префикс [PHOENIX]',
        'Команда /heal без кд',
        'Полёт 90 мин/день',
        'Команда /god (8 мин/день)',
        'Личный сундук 108 слотов',
        'Доступ к подземным эксклюзивным зонам'
      ]
    },
    {
      name: 'YOUTUBE',
      price: '7777₽',
      icon: 'Globe',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Все из PHOENIX',
        'Доступ к /kit youtube',
        'Бессмертие 300 секунд',
        '35 дополнительных слотов',
        '25 точек /home',
        'Префикс [YOUTUBE] с анимацией',
        'Команда /heal без кд',
        'Полёт безлимит',
        'Команда /god (12 мин/день)',
        'Личный сундук 135 слотов',
        'Доступ к эксклюзивным мирам',
        'Возможность создания телепортов'
      ]
    },

  ],
  survival: [
    {
      name: 'LITE',
      price: '77₽',
      icon: 'Footprints',
      color: 'from-gray-500 to-gray-700',
      features: [
        'Цветной ник в чате',
        'Доступ к /kit lite',
        'Приватные регионы до 3',
        'Телепортация /home (2 точки)'
      ]
    },
    {
      name: 'WARRIOR',
      price: '177₽',
      icon: 'Sword',
      color: 'from-slate-600 to-slate-800',
      features: [
        'Все из LITE',
        'Доступ к /kit warrior',
        'Приватные регионы до 7',
        'Телепортация /home (5 точек)',
        'Возможность летать в лобби',
        'Префикс [WARRIOR]'
      ]
    },
    {
      name: 'ELITE',
      price: '277₽',
      icon: 'Shield',
      color: 'from-blue-600 to-blue-800',
      features: [
        'Все из WARRIOR',
        'Доступ к /kit elite',
        'Приватные регионы до 15',
        'Телепортация /home (10 точек)',
        'Креатив в приватном мире',
        'Префикс [ELITE]',
        'Персональный саппорт'
      ]
    },
    {
      name: 'TITAN',
      price: '777₽',
      icon: 'Mountain',
      color: 'from-zinc-600 to-stone-700',
      features: [
        'Все из ELITE',
        'Доступ к /kit titan',
        'Приватные регионы до 30',
        'Телепортация /home (20 точек)',
        'Полёт в выживании (20 мин/день)',
        'Префикс [TITAN]',
        'Приоритетная очередь саппорта',
        'Уникальные эффекты частиц'
      ]
    },
    {
      name: 'MASTER',
      price: '1777₽',
      icon: 'Wand2',
      color: 'from-purple-600 to-indigo-700',
      features: [
        'Все из TITAN',
        'Доступ к /kit master',
        'Приватные регионы до 50',
        'Телепортация /home (35 точек)',
        'Полёт в выживании (40 мин/день)',
        'Префикс [MASTER]',
        'Личный модератор',
        'Доступ к эксклюзивным мирам',
        'Команда /feed'
      ]
    },
    {
      name: 'LEGEND',
      price: '2777₽',
      icon: 'Gem',
      color: 'from-emerald-600 to-green-700',
      features: [
        'Все из MASTER',
        'Доступ к /kit legend',
        'Приватные регионы до 75',
        'Телепортация /home (50 точек)',
        'Полёт в выживании (60 мин/день)',
        'Префикс [LEGEND]',
        'Команда /god (5 мин/день)',
        'Личный сундук 54 слота',
        'Возможность создавать варпы'
      ]
    },
    {
      name: 'OVERLORD',
      price: '3777₽',
      icon: 'Skull',
      color: 'from-red-700 to-black',
      features: [
        'Все из LEGEND',
        'Доступ к /kit overlord',
        'Приватные регионы до 100',
        'Телепортация /home (70 точек)',
        'Полёт в выживании (90 мин/день)',
        'Префикс [OVERLORD]',
        'Команда /god (8 мин/день)',
        'Личный сундук 81 слот',
        'Эксклюзивные биомы',
        'Команда /heal'
      ]
    },
    {
      name: 'PHOENIX',
      price: '4777₽',
      icon: 'Pickaxe',
      color: 'from-orange-600 to-red-700',
      features: [
        'Все из OVERLORD',
        'Доступ к /kit phoenix',
        'Приватные регионы до 150',
        'Телепортация /home (100 точек)',
        'Полёт в выживании (безлимит)',
        'Префикс [PHOENIX] с анимацией',
        'Команда /god (10 мин/день)',
        'Личный сундук 108 слотов',
        'Доступ к подземным сокровищам',
        'Создание собственных событий'
      ]
    },
    {
      name: 'YOUTUBE',
      price: '7777₽',
      icon: 'Globe',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Все из PHOENIX',
        'Доступ к /kit youtube',
        'Приватные регионы безлимит',
        'Телепортация /home безлимит',
        'Полёт везде без ограничений',
        'Префикс [YOUTUBE] с эффектами',
        'Команда /god (15 мин/день)',
        'Личный сундук 135 слотов',
        'Создание собственных миров',
        'Команда /time и /weather',
        'Эксклюзивный скин персонажа'
      ]
    },

  ],
  skywars: [
    {
      name: 'LITE',
      price: '77₽',
      icon: 'Footprints',
      color: 'from-gray-500 to-gray-700',
      features: [
        'Цветной ник в чате',
        'Доступ к /kit путник перед игрой',
        'Выбор карты (1 раз в час)',
        'x1.5 опыта за победы'
      ]
    },
    {
      name: 'WARRIOR',
      price: '177₽',
      icon: 'Sword',
      color: 'from-slate-600 to-slate-800',
      features: [
        'Все из LITE',
        'Доступ к /kit warrior',
        'Выбор карты (1 раз в 30 мин)',
        'x2 опыта за победы',
        'Доступ к режиму Solo и Team',
        'Префикс [WARRIOR]'
      ]
    },
    {
      name: 'ELITE',
      price: '277₽',
      icon: 'Shield',
      color: 'from-blue-600 to-blue-800',
      features: [
        'Все из WARRIOR',
        'Доступ к /kit elite',
        'Выбор карты без ограничений',
        'x3 опыта за победы',
        'Приоритетный вход в игры',
        'Уникальные скины для персонажа (2 шт)',
        'Префикс [ELITE]',
        'Доступ к VIP-лобби'
      ]
    },
    {
      name: 'TITAN',
      price: '777₽',
      icon: 'Mountain',
      color: 'from-zinc-600 to-stone-700',
      features: [
        'Все из ELITE',
        'Доступ к /kit titan',
        'x5 опыта за победы',
        'Выбор режима игры',
        '5 эксклюзивных скинов',
        'Префикс [TITAN]',
        'Доступ к Elite-лобби',
        'Уникальные эффекты смерти'
      ]
    },
    {
      name: 'MASTER',
      price: '1777₽',
      icon: 'Wand2',
      color: 'from-purple-600 to-indigo-700',
      features: [
        'Все из TITAN',
        'Доступ к /kit master',
        'x7 опыта за победы',
        'Создание приватных игр (до 8 игроков)',
        '8 эксклюзивных скинов',
        'Префикс [MASTER]',
        'Персональное лобби',
        'Команда /heal в лобби',
        'Уникальные trail-эффекты'
      ]
    },
    {
      name: 'LEGEND',
      price: '2777₽',
      icon: 'Gem',
      color: 'from-emerald-600 to-green-700',
      features: [
        'Все из MASTER',
        'Доступ к /kit legend',
        'x10 опыта за победы',
        'Модерация приватных игр',
        '12 эксклюзивных скинов',
        'Префикс [LEGEND]',
        'Эксклюзивное лобби',
        'Команда /fly в лобби',
        'Уникальные win-эффекты',
        'Возможность создавать турниры'
      ]
    },
    {
      name: 'OVERLORD',
      price: '3777₽',
      icon: 'Skull',
      color: 'from-red-700 to-black',
      features: [
        'Все из LEGEND',
        'Доступ к /kit overlord',
        'x13 опыта за победы',
        'Создание приватных игр (до 16 игроков)',
        '15 эксклюзивных скинов',
        'Префикс [OVERLORD]',
        'Именная карта на сервере',
        'Персонализированные kill-эффекты',
        'Доступ к бета-режимам',
        'Эксклюзивные достижения'
      ]
    },
    {
      name: 'PHOENIX',
      price: '4777₽',
      icon: 'Pickaxe',
      color: 'from-orange-600 to-red-700',
      features: [
        'Все из OVERLORD',
        'Доступ к /kit phoenix',
        'x16 опыта за победы',
        'Создание приватных игр (до 24 игроков)',
        '20 эксклюзивных скинов',
        'Префикс [PHOENIX] с анимацией',
        'Именное лобби',
        'Создание собственных карт',
        'Уникальные spawn-эффекты',
        'Доступ к закрытым режимам'
      ]
    },
    {
      name: 'YOUTUBE',
      price: '7777₽',
      icon: 'Globe',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Все из PHOENIX',
        'Доступ к /kit youtube',
        'x18 опыта за победы',
        'Создание приватных игр (безлимит)',
        '25 эксклюзивных скинов',
        'Префикс [YOUTUBE] с эффектами',
        'Полная кастомизация лобби',
        'Создание режимов игры',
        'Эксклюзивные particle-эффекты',
        'Возможность проводить турниры',
        'Личная статистика на табло'
      ]
    },

  ]
};