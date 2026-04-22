import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

type AuthPageProps = {
  mode: 'login' | 'register';
};

const copyByMode = {
  login: {
    title: '登录账号',
    subtitle: '登录后可同步收藏, 观影记录和个性化推荐.',
    submitText: '立即登录',
    alternateText: '还没有账号',
    alternateLinkText: '去注册',
    alternatePath: '/register',
  },
  register: {
    title: '创建账号',
    subtitle: '注册后即可体验电影收藏, 订阅和榜单提醒能力.',
    submitText: '完成注册',
    alternateText: '已经有账号',
    alternateLinkText: '去登录',
    alternatePath: '/login',
  },
};

const AuthPage = ({ mode }: AuthPageProps) => {
  const copy = copyByMode[mode];

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.35),_transparent_42%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(2,6,23,1))]" />
      <Card className="relative z-10 w-full max-w-md border-0 shadow-2xl">
        <Space direction="vertical" size={8} className="mb-8 w-full">
          <Typography.Text type="secondary">Movie Space</Typography.Text>
          <Typography.Title level={2} className="!mb-0">
            {copy.title}
          </Typography.Title>
          <Typography.Paragraph className="!mb-0 !text-slate-500">
            {copy.subtitle}
          </Typography.Paragraph>
        </Space>

        <Form layout="vertical" requiredMark={false} autoComplete="off">
          {mode === 'register' ? (
            <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
              <Input size="large" placeholder="请输入用户名" />
            </Form.Item>
          ) : null}

          <Form.Item label="邮箱" name="email" rules={[{ required: true, message: '请输入邮箱' }]}>
            <Input size="large" placeholder="请输入邮箱" />
          </Form.Item>

          <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password size="large" placeholder="请输入密码" />
          </Form.Item>

          {mode === 'register' ? (
            <Form.Item
              label="确认密码"
              name="confirmPassword"
              rules={[{ required: true, message: '请再次输入密码' }]}
            >
              <Input.Password size="large" placeholder="请再次输入密码" />
            </Form.Item>
          ) : null}

          <div className="mb-6 flex items-center justify-between">
            <Checkbox>{mode === 'login' ? '记住我' : '同意服务协议'}</Checkbox>
            {mode === 'login' ? (
              <Link className="text-sm text-sky-600 transition hover:text-sky-500" to="/register">
                快速注册
              </Link>
            ) : (
              <Typography.Text type="secondary">注册后可在个人中心完善信息</Typography.Text>
            )}
          </div>

          <Button type="primary" htmlType="submit" size="large" block className="!h-11">
            {copy.submitText}
          </Button>
        </Form>

        <div className="mt-6 text-center text-sm text-slate-500">
          <span>{copy.alternateText}</span>
          <Link className="ml-2 text-sky-600 transition hover:text-sky-500" to={copy.alternatePath}>
            {copy.alternateLinkText}
          </Link>
          <Link className="ml-4 text-slate-600 transition hover:text-slate-900" to="/">
            返回首页
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default AuthPage;
