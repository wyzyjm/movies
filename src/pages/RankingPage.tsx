import { rankingMovies } from '@/data/site';
import { Card, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

type RankingRow = (typeof rankingMovies)[number];

const columns: ColumnsType<RankingRow> = [
  {
    title: '排名',
    dataIndex: 'rank',
    key: 'rank',
    width: 100,
    render: (rank: number) => <span className="font-semibold text-slate-900">#{rank}</span>,
  },
  {
    title: '电影名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '分类',
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
          使用 antd Table 实现排行榜表格, 并在全局样式中增加斑马纹效果. 当前数据为静态示例, 后续可直接替换成接口返回.
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
