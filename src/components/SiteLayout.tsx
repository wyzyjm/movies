import heroBanner from '@/assets/hero.png';
import {
  getBreadcrumbItems,
  getSelectedNavKey,
  primaryNavItems,
  quickActions,
  siteRecordNumber,
} from '@/data/site';
import { Breadcrumb, Button, Layout, Menu, Typography } from 'antd';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const SiteLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const breadcrumbItems = getBreadcrumbItems(location.pathname).map((item) => ({
    title: item.href ? <Link to={item.href}>{item.title}</Link> : item.title,
  }));

  return (
    <Layout className="min-h-screen bg-slate-100">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(15, 23, 42, 0.94), rgba(3, 105, 161, 0.74)), url(${heroBanner})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto flex min-h-80 max-w-7xl items-center px-6 py-16">
          <div className="max-w-2xl">
            <Typography.Title level={1} className="mb-4! mt-3! text-white!">
              发现下一部值得收藏的电影
            </Typography.Title>
            <Typography.Paragraph className="!mb-6 !text-base !leading-8 !text-slate-200">
              用首页统一承接 Banner, 导航, 面包屑和内容区域. 分类频道, 排行榜和账号页面已经接入同一套路由体系,
              后续扩展内容时可以继续沿用现有结构.
            </Typography.Paragraph>
            <div className="flex flex-wrap gap-3">
              <Button type="primary" size="large" onClick={() => navigate('/ranking')}>
                查看排行榜
              </Button>
              <Button size="large" ghost onClick={() => navigate('/register')}>
                立即注册
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-1 top-1 flex items-center gap-3">
            {quickActions.map((item) => (
              <Button key={item.key} type={item.key === 'register' ? 'primary' : 'default'} onClick={() => navigate(item.path)}>
                {item.label}
              </Button>
            ))}
          </div>
      </section>

      <Header className="sticky top-0 z-40 h-auto border-b border-slate-200/80 bg-white/95! px-0 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4  lg:flex-row lg:items-center lg:justify-between">
          <Menu
            mode="horizontal"
            selectedKeys={[getSelectedNavKey(location.pathname)]}
            items={primaryNavItems.map((item) => ({
              key: item.key,
              label: item.label,
              onClick: () => navigate(item.path),
            }))}
            className="min-w-0 flex-1 justify-center border-none bg-transparent"
          />

          
        </div>
      </Header>

      <div className="border-b border-slate-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <Content className="mx-auto w-full max-w-7xl flex-1 px-6 py-8">
        <Outlet />
      </Content>

      <Footer className="border-t border-slate-200 bg-slate-950 px-6 py-8 text-center">
        <Typography.Text className="text-slate-500!">{siteRecordNumber}</Typography.Text>
      </Footer>
    </Layout>
  );
};

export default SiteLayout;
