import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import routes from './routes';

const isFileProtocol = typeof window !== 'undefined' && window.location.protocol === 'file:';

const router = isFileProtocol ? createHashRouter(routes) : createBrowserRouter(routes);

export default router;
