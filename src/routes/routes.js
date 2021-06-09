import Dashboard from "../components/Tabs/Pages/Dashboard";
import Tip from "../components/Tabs/Pages/Tip";
import Profile from "../components/Tabs/Pages/Profile";

const routes = [
    {
        path: "/",
        component: Dashboard,
        redirect: '/dashboard',
        children: [
        ]
    },
    {
        path: "/dashboard",
        component: Dashboard,
        children: [
        ]
    },
    {
        path: "/tip",
        name: "Tippen!",
        component: Tip
    },
    {
        path: "/profile",
        name: "Mein Profil",
        component: Profile
    },
];

export default routes;
