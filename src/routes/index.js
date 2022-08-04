import routesConfig from '~/config/routes';
import { HeaderOnly } from '~/components/Layout';

// Public routes
import Home from '~/pages/Home';
import Follwing from '~/pages/Follwing';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// Public Routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.follwing, component: Follwing },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
