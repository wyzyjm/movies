import AuthPage from '@/components/AuthPage';
import SiteLayout from '@/components/SiteLayout';
import CategoryPage from '@/pages/CategoryPage';
import Home from '@/pages/Home';
import MovieDetailPage from '@/pages/MovieDetailPage';
import RankingPage from '@/pages/RankingPage';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'category/:slug',
        element: <CategoryPage />,
      },
      {
        path: 'movie/:movieId',
        element: <MovieDetailPage />,
      },
      {
        path: 'ranking',
        element: <RankingPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <AuthPage mode="login" />,
  },
  {
    path: '/register',
    element: <AuthPage mode="register" />,
  },
];

export default routes;
