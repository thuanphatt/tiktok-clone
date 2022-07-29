import Home from '~/pages/Home';
import Follwing from '~/pages/Follwing';
import Profile from '~/pages/Profile';
// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/follwing', component: Follwing },
    { path: '/profile', component: Profile },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
