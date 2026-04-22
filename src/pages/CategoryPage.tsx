import { getGenreBySlug } from '@/data/site';
import { Card, Col, Empty, Row, Tag, Typography } from 'antd';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { slug } = useParams();
  const genre = getGenreBySlug(slug);

  if (!genre) {
    return (
      <Card className="border-0 shadow-sm">
        <Empty description="未找到对应的电影分类页面" />
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-sm">
        <Tag color="blue" className="mb-4">
          分类频道
        </Tag>
        <Typography.Title level={2}>{genre.title}</Typography.Title>
        <Typography.Paragraph className="!mb-0 !text-base !leading-8 !text-slate-600">
          {genre.intro}
        </Typography.Paragraph>
      </Card>

      <Row gutter={[24, 24]}>
        {genre.highlights.map((highlight) => (
          <Col xs={24} md={8} key={highlight}>
            <Card className="h-full border-0 shadow-sm" title={highlight}>
              <Typography.Paragraph className="!mb-0 !leading-7 !text-slate-500">
                当前为内容预留模块. 后续可在这里接入影片列表, 标签筛选, 专题推荐或分页能力.
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="border-0 shadow-sm">
        <Typography.Title level={4}>页面扩展建议</Typography.Title>
        <Typography.Paragraph className="!mb-2 !text-slate-500">
          这里适合继续接入电影海报瀑布流, 筛选条件, 详情跳转和专题编排能力.
        </Typography.Paragraph>
        <Typography.Paragraph className="!mb-0 !text-slate-500">
          当前结构已经复用公共布局和导航, 不需要再为每个分类单独维护页面壳.
        </Typography.Paragraph>
      </Card>
    </div>
  );
};

export default CategoryPage;
