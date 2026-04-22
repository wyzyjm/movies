import { genreConfigs, homeFeatureCards, homeNews } from '@/data/site';
import { Button, Card, Col, List, Row, Space, Tag, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Row gutter={[24, 24]}>
        <Col xs={24} xl={16}>
          <Card className="border-0 shadow-sm">
            <Space direction="vertical" size={16} className="w-full">
              <Tag color="gold" className="w-fit">
                首页内容区
              </Tag>
              <Typography.Title level={2} className="!mb-0">
                一站式电影内容入口
              </Typography.Title>
              <Typography.Paragraph className="!mb-0 !text-base !leading-8 !text-slate-600">
                首页已经串联起顶部 Banner, 中间固定导航栏, 面包屑, 内容区域和底部备案信息.
                目前先用静态模块承接内容, 方便后续继续接接口和业务数据.
              </Typography.Paragraph>
              <div className="flex flex-wrap gap-3">
                <Button type="primary" onClick={() => navigate('/ranking')}>
                  热门排行榜
                </Button>
                <Button onClick={() => navigate('/category/science-fiction')}>
                  进入科幻频道
                </Button>
              </div>
            </Space>
          </Card>
        </Col>

        <Col xs={24} xl={8}>
          <Card className="border-0 shadow-sm" title="最新站点更新">
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
            <Card className="h-full border-0 shadow-sm" title={card.title} extra={<span>查看更多</span>}>
              <Typography.Paragraph className="!mb-0 !leading-7 !text-slate-500">
                {card.description}
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="border-0 shadow-sm" title="分类频道导航">
        <Row gutter={[16, 16]}>
          {genreConfigs.map((genre) => (
            <Col xs={24} sm={12} lg={8} key={genre.slug}>
              <button
                type="button"
                className="flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white hover:shadow-md"
                onClick={() => navigate(`/category/${genre.slug}`)}
              >
                <span className="mb-3 text-lg font-semibold text-slate-900">{genre.title}</span>
                <span className="leading-7 text-slate-500">{genre.intro}</span>
              </button>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default Home;
