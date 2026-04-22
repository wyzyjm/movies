import { getGenreBySlug, getMoviesByGenre } from '@/data/site';
import { Button, Card, Col, Empty, Row, Space, Tag, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const genre = getGenreBySlug(slug);

  if (!genre) {
    return (
      <Card className="border-0 shadow-sm">
        <Empty description="未找到对应的电影栏目页面" />
      </Card>
    );
  }

  const movies = getMoviesByGenre(genre.slug);

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-sm mb-6!">
        <Space direction="vertical" size={12} className="w-full">
          <Tag color="blue" className="w-fit">
            {genre.title}栏目
          </Tag>
          <Typography.Title level={2} className="!mb-0">
            {genre.title}
          </Typography.Title>
          <Typography.Paragraph className="!mb-0 !text-base !leading-8 !text-slate-600">
            {genre.intro}
          </Typography.Paragraph>
          <Typography.Paragraph className="!mb-0 !text-slate-500">
            {genre.bannerText}
          </Typography.Paragraph>
        </Space>
      </Card>

      <Row gutter={[16, 16]}>
        {genre.highlights.map((highlight) => (
          <Col xs={24} md={8} key={highlight}>
            <Card className="h-full border-0 shadow-sm">
              <Typography.Title level={5}>{highlight}</Typography.Title>
              <Typography.Paragraph className="!mb-0 !leading-7 !text-slate-500">
                该栏目中的电影内容页会围绕这个主题组织素材, 方便展示栏目特色和课程网页结构设计.
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="border-0 shadow-sm" title={`${genre.title}栏目电影内容页`}>
        <Row gutter={[24, 24]}>
          {movies.map((movie) => (
            <Col xs={24} lg={8} key={movie.id}>
              <Card className="h-full border border-slate-200 shadow-none">
                <Space direction="vertical" size={12} className="w-full">
                  <Typography.Title level={4} className="!mb-0">
                    {movie.title}
                  </Typography.Title>
                  <Typography.Text type="secondary">
                    {movie.englishTitle} | {movie.year} | {movie.region}
                  </Typography.Text>
                  <Typography.Paragraph className="!mb-0 !leading-7 !text-slate-600">
                    {movie.summary}
                  </Typography.Paragraph>
                  <div className="flex flex-wrap gap-2">
                    {movie.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <Button type="primary" onClick={() => navigate(`/movie/${movie.id}`)}>
                    进入电影内容页
                  </Button>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default CategoryPage;
