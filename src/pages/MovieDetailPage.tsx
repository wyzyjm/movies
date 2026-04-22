import { getGenreBySlug, getMovieById, getRelatedMovies } from '@/data/site';
import { Button, Card, Col, Empty, Row, Space, Tag, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movie = getMovieById(movieId);

  if (!movie) {
    return (
      <Card className="border-0 shadow-sm">
        <Empty description="未找到对应的电影内容页" />
      </Card>
    );
  }

  const genre = getGenreBySlug(movie.genreSlug);
  const relatedMovies = getRelatedMovies(movie);

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-sm mb-6!">
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <Space direction="vertical" size={16} className="w-full">
              <Tag color="purple" className="w-fit">
                {genre?.title}电影内容页
              </Tag>
              <Typography.Title level={2} className="!mb-0">
                {movie.title}
              </Typography.Title>
              <Typography.Text type="secondary">
                {movie.englishTitle} | {movie.year} | {movie.region} | 评分 {movie.score.toFixed(1)}
              </Typography.Text>
              <Typography.Paragraph className="!mb-0 !text-base !leading-8 !text-slate-600">
                {movie.summary}
              </Typography.Paragraph>
              <Typography.Paragraph className="!mb-0 border-l-4 border-sky-500 pl-4 italic !text-slate-500">
                {movie.quote}
              </Typography.Paragraph>
            </Space>
          </Col>

          <Col xs={24} lg={8}>
            <Card className="border border-slate-200 bg-slate-50 shadow-none" title="影片信息">
              <Space direction="vertical" size={10} className="w-full">
                <Typography.Text>导演: {movie.director}</Typography.Text>
                <Typography.Text>主演: {movie.cast}</Typography.Text>
                <Typography.Text>片长: {movie.duration}</Typography.Text>
                <Typography.Text>所属栏目: {genre?.title}</Typography.Text>
                <div className="flex flex-wrap gap-2">
                  {movie.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </Card>

      <Row gutter={[24, 24]}>
        {movie.sections.map((section) => (
          <Col xs={24} md={8} key={section.title}>
            <Card className="h-full border-0 shadow-sm" title={section.title}>
              <Typography.Paragraph className="!mb-0 !leading-7 !text-slate-600">
                {section.content}
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="border-0 shadow-sm" title="同栏目推荐">
        <Row gutter={[24, 24]}>
          {relatedMovies.map((item) => (
            <Col xs={24} md={12} key={item.id}>
              <Card className="h-full border border-slate-200 shadow-none">
                <Space direction="vertical" size={10} className="w-full">
                  <Typography.Title level={4} className="!mb-0">
                    {item.title}
                  </Typography.Title>
                  <Typography.Paragraph className="!mb-0 !leading-7 !text-slate-600">
                    {item.summary}
                  </Typography.Paragraph>
                  <Button type="link" className="!px-0" onClick={() => navigate(`/movie/${item.id}`)}>
                    查看这部电影
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

export default MovieDetailPage;
