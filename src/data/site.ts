export type GenreSlug = 'plot' | 'science-fiction' | 'animation';

export type GenreConfig = {
  slug: GenreSlug;
  title: string;
  intro: string;
  highlights: string[];
  bannerText: string;
};

export type MovieSection = {
  title: string;
  content: string;
};

export type Movie = {
  id: string;
  title: string;
  englishTitle: string;
  genreSlug: GenreSlug;
  year: string;
  region: string;
  director: string;
  cast: string;
  duration: string;
  score: number;
  summary: string;
  quote: string;
  tags: string[];
  sections: MovieSection[];
};

export type BreadcrumbItem = {
  title: string;
  href?: string;
};

export type RankingMovie = {
  key: string;
  rank: number;
  movieId: string;
  title: string;
  genre: string;
  region: string;
  releaseDate: string;
  score: number;
};

export const siteName = '电影欣赏网站';
export const siteRecordNumber = '京ICP证20260001号-1';

export const genreConfigs: GenreConfig[] = [
  {
    slug: 'plot',
    title: '剧情',
    intro: '剧情栏目聚焦人物成长, 情感冲突和现实表达, 适合放入口碑佳作与获奖影片.',
    highlights: ['人物命运', '现实表达', '情感共鸣'],
    bannerText: '用细腻叙事呈现角色变化与生活温度.',
  },
  {
    slug: 'science-fiction',
    title: '科幻',
    intro: '科幻栏目关注未来世界, 宇宙探索与技术想象, 适合展示视觉奇观和思想实验.',
    highlights: ['未来设定', '宇宙想象', '科技命题'],
    bannerText: '用大胆想象连接未来世界与人类命运.',
  },
  {
    slug: 'animation',
    title: '动画',
    intro: '动画栏目兼顾成长主题, 冒险故事与家庭表达, 适合作为综合作品展示区.',
    highlights: ['奇幻冒险', '家庭成长', '温暖治愈'],
    bannerText: '用色彩与节奏讲述适合分享的电影故事.',
  },
];

export const movies: Movie[] = [
  {
    id: 'light-of-alley',
    title: '巷口的灯',
    englishTitle: 'Light of Alley',
    genreSlug: 'plot',
    year: '2024',
    region: '中国',
    director: '周远',
    cast: '林夏, 周鸣, 方悦',
    duration: '112分钟',
    score: 9.2,
    summary: '一位准备离开故乡的青年教师, 在老街改造前重新理解了陪伴, 责任与成长.',
    quote: '真正照亮回家路的, 从来不只是街角那盏灯.',
    tags: ['成长', '家庭', '治愈'],
    sections: [
      {
        title: '剧情简介',
        content: '青年教师许川回到老城协助社区整理旧档案, 却在街坊邻里的琐碎故事里重新看见自己的童年与母亲的坚持.',
      },
      {
        title: '影片看点',
        content: '影片节奏平稳, 以细节推进情感变化, 适合课堂作业中展示剧情片如何通过人物关系完成主题表达.',
      },
      {
        title: '欣赏提示',
        content: '观看时可以重点留意灯光意象, 它既是空间符号, 也是人物情感的转折提示.',
      },
    ],
  },
  {
    id: 'paper-plane-letters',
    title: '纸飞机来信',
    englishTitle: 'Letters by Paper Plane',
    genreSlug: 'plot',
    year: '2023',
    region: '中国',
    director: '沈知遥',
    cast: '顾宁, 谢晨, 夏禾',
    duration: '105分钟',
    score: 8.8,
    summary: '高三学生与退休邮差因为一封未寄出的旧信相识, 在追寻收信人的过程中完成对过去的和解.',
    quote: '有些信件迟到了很多年, 但心意仍旧能准时抵达.',
    tags: ['青春', '亲情', '回忆'],
    sections: [
      {
        title: '剧情简介',
        content: '临近高考的陈溪偶然发现一封没有地址的旧信, 在邮差老梁的帮助下踏上寻找收信人的旅程.',
      },
      {
        title: '影片看点',
        content: '影片将青春成长与旧城记忆结合, 通过双线叙事展现代际沟通的价值.',
      },
      {
        title: '欣赏提示',
        content: '可以关注影片中纸飞机的反复出现, 它连接着少年视角和成年人的遗憾.',
      },
    ],
  },
  {
    id: 'river-before-dawn',
    title: '天亮以前的河',
    englishTitle: 'River Before Dawn',
    genreSlug: 'plot',
    year: '2022',
    region: '中国',
    director: '韩朔',
    cast: '秦朗, 岳青, 程露',
    duration: '118分钟',
    score: 8.7,
    summary: '返乡纪录片导演在一次洪水采访中重新理解父亲, 乡土与自己的创作初心.',
    quote: '河流记住的不只是水, 还有每个人走过岸边的那一段人生.',
    tags: ['乡土', '亲情', '现实主义'],
    sections: [
      {
        title: '剧情简介',
        content: '导演陆屿回乡拍摄防汛纪实, 与担任河道管理员的父亲共同经历一场突发险情, 也共同面对多年未解开的心结.',
      },
      {
        title: '影片看点',
        content: '影片善于借助自然环境烘托人物关系, 画面沉稳, 情绪递进清晰.',
      },
      {
        title: '欣赏提示',
        content: '建议从镜头构图观察人物距离变化, 理解剧情片如何通过空间调度表现关系修复.',
      },
    ],
  },
  {
    id: 'orbit-library',
    title: '轨道图书馆',
    englishTitle: 'Orbit Library',
    genreSlug: 'science-fiction',
    year: '2025',
    region: '美国',
    director: '伊恩·柯林斯',
    cast: '莉亚·莫尔, 乔纳斯·格雷, 阿伦·贝克',
    duration: '124分钟',
    score: 9.4,
    summary: '漂浮在地球轨道上的图书馆保存人类记忆, 一场数据故障让管理员不得不在知识与伦理之间做出选择.',
    quote: '如果记忆可以被备份, 人类还需要怎样理解遗忘.',
    tags: ['太空', '人工智能', '伦理'],
    sections: [
      {
        title: '剧情简介',
        content: '空间站管理员艾拉在修复知识库时发现部分记忆被主动删除, 她不得不追查事故背后的真相.',
      },
      {
        title: '影片看点',
        content: '影片将密闭空间悬念和科技伦理讨论结合, 既有视觉奇观, 也有思想深度.',
      },
      {
        title: '欣赏提示',
        content: '可以比较片中冷色空间和温暖记忆影像的差异, 理解影片如何用色彩区分现实与记忆.',
      },
    ],
  },
  {
    id: 'mars-signal',
    title: '火星回声',
    englishTitle: 'Signal from Mars',
    genreSlug: 'science-fiction',
    year: '2024',
    region: '加拿大',
    director: '艾琳·伍德',
    cast: '米娅·罗森, 丹尼尔·哈特, 诺亚·陈',
    duration: '116分钟',
    score: 9.0,
    summary: '火星基地收到一段来自未来的求救信号, 三名宇航员必须在有限时间内修正即将发生的灾难.',
    quote: '当未来向现在发出警告时, 选择本身就会改变命运.',
    tags: ['火星', '时间悖论', '冒险'],
    sections: [
      {
        title: '剧情简介',
        content: '驻守火星基地的三名宇航员在信号站接收到一段异常通讯, 逐步发现那是来自未来自己的求救.',
      },
      {
        title: '影片看点',
        content: '影片节奏紧凑, 将时间循环与团队协作融合, 适合展示科幻片中的悬念构建方式.',
      },
      {
        title: '欣赏提示',
        content: '建议关注声音设计, 求救信号贯穿全片并推动情节层层升级.',
      },
    ],
  },
  {
    id: 'glass-city-2049',
    title: '玻璃城2049',
    englishTitle: 'Glass City 2049',
    genreSlug: 'science-fiction',
    year: '2023',
    region: '英国',
    director: '米切尔·霍普',
    cast: '艾米·李, 奥斯卡·米勒, 陈若',
    duration: '121分钟',
    score: 8.9,
    summary: '在完全透明化管理的未来都市里, 一名档案分析员发现自己的人生记录被人伪造.',
    quote: '看得见一切的城市, 未必看得见真相.',
    tags: ['未来都市', '悬疑', '科技社会'],
    sections: [
      {
        title: '剧情简介',
        content: '数据档案员林达在审查城市数据库时发现自己的童年记录存在空白, 于是开始追查被隐藏的身份秘密.',
      },
      {
        title: '影片看点',
        content: '影片以未来城市景观作为视觉核心, 同时讨论隐私, 自由与技术控制.',
      },
      {
        title: '欣赏提示',
        content: '可以从建筑玻璃反射与监控视角入手, 观察影片如何通过场景强化主题.',
      },
    ],
  },
  {
    id: 'forest-train',
    title: '森林小火车',
    englishTitle: 'Little Train in Forest',
    genreSlug: 'animation',
    year: '2024',
    region: '日本',
    director: '高桥悠',
    cast: '铃木遥, 山本拓, 小林真由',
    duration: '96分钟',
    score: 9.1,
    summary: '一辆穿行森林的旧火车重新启动, 带着失去方向的小女孩走向一场关于勇气和友谊的旅程.',
    quote: '有些路看起来绕远了, 却正好带你找到自己.',
    tags: ['冒险', '友情', '治愈'],
    sections: [
      {
        title: '剧情简介',
        content: '小学生优奈因转学而情绪低落, 偶然登上一辆只在黄昏出现的森林火车, 在旅途中结识了不同的伙伴.',
      },
      {
        title: '影片看点',
        content: '影片画风清新, 节奏轻快, 适合展示动画电影如何用童话结构表达成长主题.',
      },
      {
        title: '欣赏提示',
        content: '建议留意火车停靠站的设计, 每一站都对应主人公一个成长节点.',
      },
    ],
  },
  {
    id: 'whale-island-band',
    title: '鲸鱼岛乐队',
    englishTitle: 'Band of Whale Island',
    genreSlug: 'animation',
    year: '2023',
    region: '中国',
    director: '叶青',
    cast: '唐果, 徐朗, 李沐',
    duration: '101分钟',
    score: 8.9,
    summary: '生活在海岛上的三个孩子为了挽救即将停办的夏日音乐会, 组成了一支临时乐队.',
    quote: '当大家一起发出声音时, 海风都会为梦想让路.',
    tags: ['音乐', '海岛', '成长'],
    sections: [
      {
        title: '剧情简介',
        content: '鲸鱼岛音乐会面临停办, 少年们决定用自己的方式守住节日传统, 并在准备过程中学会合作与担当.',
      },
      {
        title: '影片看点',
        content: '影片色彩明快, 音乐段落丰富, 适合作为动画片中声音与节奏结合的案例.',
      },
      {
        title: '欣赏提示',
        content: '可以重点观察角色动作设计与配乐节拍之间的呼应关系.',
      },
    ],
  },
  {
    id: 'star-map-candy-shop',
    title: '星图糖果店',
    englishTitle: 'Star Map Candy Shop',
    genreSlug: 'animation',
    year: '2022',
    region: '法国',
    director: '露西·马丹',
    cast: '艾玛·杜邦, 雨果·勒内, 乔伊·林',
    duration: '98分钟',
    score: 8.6,
    summary: '一间只在夜晚营业的糖果店能做出记忆味道, 少女在帮助顾客时也找回了失去的勇气.',
    quote: '味道会消散, 但被认真记住的时刻不会.',
    tags: ['奇幻', '治愈', '家庭'],
    sections: [
      {
        title: '剧情简介',
        content: '少女米娅跟随外婆经营糖果店, 在为不同顾客调制糖果的过程中慢慢走出失去朋友的阴影.',
      },
      {
        title: '影片看点',
        content: '影片将色彩表现和情绪表达紧密结合, 画面具有鲜明童话气质.',
      },
      {
        title: '欣赏提示',
        content: '建议结合糖果颜色变化理解角色心理状态, 这是动画表达情绪的重要视觉方式.',
      },
    ],
  },
];

export const featuredMovieIds = ['light-of-alley', 'orbit-library', 'forest-train'];

export const primaryNavItems = [
  { key: 'home', label: '首页', path: '/' },
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
    title: '课程综合实例',
    description: '网站以电影欣赏为主题, 首页可以进入栏目页, 排行榜页, 登录页和注册页.',
  },
  {
    title: '栏目结构完整',
    description: '当前设置了剧情, 科幻, 动画 3 个栏目, 每个栏目下均包含 3 个电影内容页面.',
  },
  {
    title: '页面彼此联动',
    description: '栏目页可以进入电影详情, 排行榜标题也可跳转详情页, 整站保持统一导航和面包屑.',
  },
];

export const homeNews = [
  '首页提供课程说明, 栏目入口和精选电影推荐.',
  '电影排行榜页面使用 antd Table 实现, 并提供斑马纹表格样式.',
  '登录页和注册页均可从首页和页头进入.',
];

export const getGenreBySlug = (slug?: string) =>
  genreConfigs.find((genre) => genre.slug === slug);

export const getMoviesByGenre = (slug: GenreSlug) =>
  movies.filter((movie) => movie.genreSlug === slug);

export const getMovieById = (movieId?: string) =>
  movies.find((movie) => movie.id === movieId);

export const getRelatedMovies = (movie: Movie) =>
  getMoviesByGenre(movie.genreSlug).filter((item) => item.id !== movie.id);

export const getFeaturedMovies = () =>
  featuredMovieIds.map((movieId) => getMovieById(movieId)).filter(Boolean) as Movie[];

export const rankingMovies: RankingMovie[] = movies
  .slice()
  .sort((a, b) => b.score - a.score)
  .map((movie, index) => ({
    key: movie.id,
    rank: index + 1,
    movieId: movie.id,
    title: movie.title,
    genre: getGenreBySlug(movie.genreSlug)?.title ?? '',
    region: movie.region,
    releaseDate: `${movie.year}-07-01`,
    score: movie.score,
  }));

export const getBreadcrumbItems = (pathname: string): BreadcrumbItem[] => {
  if (pathname === '/') {
    return [{ title: '首页' }];
  }

  if (pathname.startsWith('/category/')) {
    const slug = pathname.split('/')[2];
    const genre = getGenreBySlug(slug);

    return [
      { title: '首页', href: '/' },
      { title: genre?.title ?? '栏目页' },
    ];
  }

  if (pathname.startsWith('/movie/')) {
    const movieId = pathname.split('/')[2];
    const movie = getMovieById(movieId);
    const genre = movie ? getGenreBySlug(movie.genreSlug) : undefined;

    return [
      { title: '首页', href: '/' },
      ...(genre ? [{ title: genre.title, href: `/category/${genre.slug}` }] : []),
      { title: movie?.title ?? '电影详情' },
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

  if (pathname.startsWith('/movie/')) {
    const movieId = pathname.split('/')[2];
    const movie = getMovieById(movieId);
    return movie?.genreSlug ?? '';
  }

  if (pathname === '/ranking') {
    return 'ranking';
  }

  return '';
};
