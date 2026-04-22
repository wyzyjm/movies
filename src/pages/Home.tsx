import { genreConfigs, getFeaturedMovies, getGenreBySlug, homeFeatureCards, homeNews } from '@/data/site';
import { Button, Card, Col, List, Row, Space, Tag, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const featuredMovies = getFeaturedMovies();

  return (
    <div className="space-y-6">
      <Row gutter={[24, 24]}>
        <Col xs={24} xl={16}>
          <Card className="border-0 shadow-sm">
            <Space direction="vertical" size={16} className="w-full">
              <Tag color="gold" className="w-fit">
                作业说明
              </Tag>
              <Typography.Title level={2} className="!mb-0">
                从首页进入完整电影欣赏网站
              </Typography.Title>
              <Typography.Paragraph className="!mb-0 !text-base !leading-8 !text-slate-600">
                当前站点以剧情, 科幻, 动画为 3 个主要栏目. 每个栏目下均包含 3 个独立电影内容页, 并配套电影排行榜,
                登录和注册页面, 满足课程作业对整体性的要求.
              </Typography.Paragraph>
              <div className="flex flex-wrap gap-3">
                <Button type="primary" onClick={() => navigate('/category/plot')}>
                  进入剧情栏目
                </Button>
                <Button onClick={() => navigate('/ranking')}>
                  打开电影排行榜
                </Button>
                <Button onClick={() => navigate('/login')}>
                  打开登录页面
                </Button>
              </div>
            </Space>
          </Card>
        </Col>

        <Col xs={24} xl={8}>
          <Card className="border-0 shadow-sm" title="网站完成情况">
            <List
              dataSource={homeNews}
              renderItem={(item) => (
                <List.Item className="!px-0">
                  <Typography.Text className="!leading-7 !text-slate-600">{item}</Typography.Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        {homeFeatureCards.map((card) => (
          <Col xs={24} md={8} key={card.title}>
            <Card className="h-full border-0 shadow-sm" title={card.title}>
              <Typography.Paragraph className="!mb-0 !leading-7 !text-slate-500">
                {card.description}
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="border-0 shadow-sm mb-6!" title="网站栏目">
        <Row gutter={[16, 16]}>
          {genreConfigs.map((genre) => (
            <Col xs={24} md={8} key={genre.slug}>
              <button
                type="button"
                className="flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white hover:shadow-md"
                onClick={() => navigate(`/category/${genre.slug}`)}
              >
                <span className="mb-3 text-lg font-semibold text-slate-900">{genre.title}</span>
                <span className="mb-4 leading-7 text-slate-500">{genre.intro}</span>
                <span className="text-sm text-sky-600">查看栏目中的 3 部电影</span>
              </button>
            </Col>
          ))}
        </Row>
      </Card>

      <Card className="border-0 shadow-sm" title="精选电影内容页">
        <Row gutter={[24, 24]}>
          {featuredMovies.map((movie) => {
            const genre = getGenreBySlug(movie.genreSlug);

            return (
              <Col xs={24} lg={8} key={movie.id}>
                <Card className="h-full border-0 bg-slate-50 shadow-none">
                  <Space direction="vertical" size={12} className="w-full">
                    <Tag color="blue" className="w-fit">
                      {genre?.title}
                    </Tag>
                    <Typography.Title level={4} className="!mb-0">
                      {movie.title}
                    </Typography.Title>
                    <Typography.Text type="secondary">
                      {movie.englishTitle} | {movie.year} | 评分 {movie.score.toFixed(1)}
                    </Typography.Text>
                    <Typography.Paragraph className="!mb-0 !leading-7 !text-slate-600">
                      {movie.summary}
                    </Typography.Paragraph>
                    <Button type="link" className="!px-0" onClick={() => navigate(`/movie/${movie.id}`)}>
                      查看电影内容页
                    </Button>
                  </Space>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Card>
    </div>
  );
};

export default Home;
