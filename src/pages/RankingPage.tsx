import { rankingMovies } from '@/data/site';
import { Card, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

type RankingRow = (typeof rankingMovies)[number];

const columns: ColumnsType<RankingRow> = [
  {
    title: '排名',
    dataIndex: 'rank',
    key: 'rank',
    width: 90,
    render: (rank: number) => <span className="font-semibold text-slate-900">#{rank}</span>,
  },
  {
    title: '电影名称',
    dataIndex: 'title',
    key: 'title',
    render: (_value: string, record: RankingRow) => (
      <Link className="font-semibold text-sky-700 transition hover:text-sky-500" to={`/movie/${record.movieId}`}>
        {record.title}
      </Link>
    ),
  },
  {
    title: '栏目',
    dataIndex: 'genre',
    key: 'genre',
    render: (genre: string) => <Tag color="blue">{genre}</Tag>,
  },
  {
    title: '地区',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: '上映日期',
    dataIndex: 'releaseDate',
    key: 'releaseDate',
  },
  {
    title: '评分',
    dataIndex: 'score',
    key: 'score',
    render: (score: number) => <span className="font-semibold text-amber-500">{score.toFixed(1)}</span>,
  },
];

const RankingPage = () => {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-sm">
        <Typography.Title level={2}>电影排行榜</Typography.Title>
        <Typography.Paragraph className="!mb-0 !text-base !leading-8 !text-slate-600">
          本页参照课程要求使用 antd Table 展示排行榜. 电影名称支持点击进入对应内容页, 表格使用斑马纹样式增强可读性.
        </Typography.Paragraph>
      </Card>

      <Card className="border-0 shadow-sm">
        <Table<RankingRow>
          className="movie-ranking-table"
          columns={columns}
          dataSource={rankingMovies}
          pagination={false}
          rowKey="key"
        />
      </Card>
    </div>
  );
};

export default RankingPage;
