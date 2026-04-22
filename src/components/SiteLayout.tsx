import heroBanner from '@/assets/hero.png';
import {
  getBreadcrumbItems,
  getSelectedNavKey,
  primaryNavItems,
  quickActions,
  siteName,
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
          backgroundImage: `linear-gradient(120deg, rgba(15, 23, 42, 0.92), rgba(3, 105, 161, 0.76)), url(${heroBanner})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto flex min-h-[320px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-3xl">
          
            <Typography.Title level={1} className="!mb-4 !mt-3 !text-white">
              电影欣赏网站课程综合实例
            </Typography.Title>
            <Typography.Paragraph className="!mb-6 !text-base !leading-8 !text-slate-200">
              网站围绕电影欣赏主题进行设计, 包含首页, 3 个栏目页, 电影排行榜页, 登录页, 注册页以及 9 个电影内容页面.
              所有页面通过统一导航和面包屑组织为一个完整站点.
            </Typography.Paragraph>
            <div className="flex flex-wrap gap-3">
              <Button type="primary" size="large" onClick={() => navigate('/ranking')}>
                查看电影排行榜
              </Button>
              <Button size="large" ghost onClick={() => navigate('/register')}>
                进入注册页面
              </Button>
            </div>
          </div>

          <div className="absolute right-3 top-3 flex items-center gap-3">
            {quickActions.map((item) => (
              <Button
                key={item.key}
                type={item.key === 'register' ? 'primary' : 'default'}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </div>
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
