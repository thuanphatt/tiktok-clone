import config from '~/config';
import { HeaderOnly } from '~/layouts';

// Public routes
import Home from '~/pages/Home';
import Follwing from '~/pages/Follwing';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// Public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.follwing, component: Follwing },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
