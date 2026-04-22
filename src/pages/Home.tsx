import { Outlet } from 'react-router';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Outlet />
    </div>
  );
}

export default Home;
