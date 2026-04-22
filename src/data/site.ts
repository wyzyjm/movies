export type GenreSlug = 'plot' | 'animation' | 'science-fiction' | 'action' | 'suspense';

export type GenreConfig = {
  slug: GenreSlug;
  title: string;
  intro: string;
  highlights: string[];
};

export type RankingMovie = {
  key: string;
  rank: number;
  title: string;
  genre: string;
  region: string;
  releaseDate: string;
  score: number;
};

export const siteRecordNumber = '京ICP备20260001号-1';

export const genreConfigs: GenreConfig[] = [
  {
    slug: 'plot',
    title: '剧情',
    intro: '聚焦角色成长与情感张力的剧情电影专区, 当前内容模块预留, 后续可接入筛选和详情流.',
    highlights: ['高分口碑片单', '获奖佳作推荐', '情感主题策划'],
  },
  {
    slug: 'animation',
    title: '动画',
    intro: '面向全年龄段的动画电影频道, 当前先保留页面骨架, 方便后续补充专题和片单.',
    highlights: ['新片速递', '经典动画回顾', '亲子观影指南'],
  },
  {
    slug: 'science-fiction',
    title: '科幻',
    intro: '探索未来世界与想象边界的科幻专区, 页面内容待定, 已预留推荐与榜单扩展位.',
    highlights: ['太空冒险合集', '硬核设定精选', '视觉奇观专题'],
  },
  {
    slug: 'action',
    title: '动作',
    intro: '集合高能追逐和热血对决的动作电影页, 当前以占位内容承接导航与后续扩展.',
    highlights: ['院线热映推荐', '系列电影合集', '高燃打斗盘点'],
  },
  {
    slug: 'suspense',
    title: '悬疑',
    intro: '悬念铺陈与反转叙事主题频道, 内容区已预留, 方便后续增加推荐和专题解析.',
    highlights: ['烧脑神作精选', '反转结局专题', '推理迷必看'],
  },
];

export const primaryNavItems = [
  // { key: 'home', label: '首页', path: '/' },
  ...genreConfigs.map((genre) => ({
    key: genre.slug,
    label: genre.title,
    path: `/category/${genre.slug}`,
  })),
  { key: 'ranking', label: '电影排行榜', path: '/ranking' },
];

export const quickActions = [
  { key: 'login', label: '登录', path: '/login' },
  { key: 'register', label: '注册', path: '/register' },
];

export const homeFeatureCards = [
  {
    title: '热映推荐',
    description: '为首页内容区预留热映电影展示位, 适合后续接入后台数据源.',
  },
  {
    title: '专题策展',
    description: '将剧情, 科幻, 动画等频道内容聚合成首页专题入口.',
  },
  {
    title: '观影服务',
    description: '可扩展登录态, 收藏夹, 历史记录和会员权益等能力.',
  },
];

export const homeNews = [
  '首页已预留 Banner, 固定导航, 面包屑, 内容区和备案信息.',
  '分类页已统一收拢为通用结构, 方便后续直接填充模块内容.',
  '排行榜使用 antd Table, 可继续接接口替换静态数据.',
];

export const rankingMovies: RankingMovie[] = [
  {
    key: '1',
    rank: 1,
    title: '星际远征',
    genre: '科幻',
    region: '美国',
    releaseDate: '2026-03-18',
    score: 9.6,
  },
  {
    key: '2',
    rank: 2,
    title: '午夜谜城',
    genre: '悬疑',
    region: '中国',
    releaseDate: '2026-01-12',
    score: 9.4,
  },
  {
    key: '3',
    rank: 3,
    title: '热血边线',
    genre: '动作',
    region: '韩国',
    releaseDate: '2025-12-28',
    score: 9.2,
  },
  {
    key: '4',
    rank: 4,
    title: '纸上人生',
    genre: '剧情',
    region: '法国',
    releaseDate: '2025-11-30',
    score: 9.1,
  },
  {
    key: '5',
    rank: 5,
    title: '云海奇遇',
    genre: '动画',
    region: '日本',
    releaseDate: '2026-02-06',
    score: 8.9,
  },
  {
    key: '6',
    rank: 6,
    title: '深海追击',
    genre: '动作',
    region: '英国',
    releaseDate: '2025-10-22',
    score: 8.8,
  },
];

export const getGenreBySlug = (slug?: string) =>
  genreConfigs.find((genre) => genre.slug === slug);

export const getBreadcrumbItems = (pathname: string) => {
  if (pathname === '/') {
    return [{ title: '首页' }];
  }

  if (pathname.startsWith('/category/')) {
    const slug = pathname.split('/')[2];
    const genre = getGenreBySlug(slug);

    return [
      { title: '首页', href: '/' },
      { title: genre?.title ?? '分类页' },
    ];
  }

  if (pathname === '/ranking') {
    return [
      { title: '首页', href: '/' },
      { title: '电影排行榜' },
    ];
  }

  if (pathname === '/login') {
    return [
      { title: '首页', href: '/' },
      { title: '登录' },
    ];
  }

  if (pathname === '/register') {
    return [
      { title: '首页', href: '/' },
      { title: '注册' },
    ];
  }

  return [{ title: '首页', href: '/' }];
};

export const getSelectedNavKey = (pathname: string) => {
  if (pathname === '/') {
    return 'home';
  }

  if (pathname.startsWith('/category/')) {
    return pathname.split('/')[2] ?? 'home';
  }

  if (pathname === '/ranking') {
    return 'ranking';
  }

  return '';
};
