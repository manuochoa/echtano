import Dashboard from "../../pages/Dashboard";
import Account from "../../pages/Account";
import Calculator from "../../pages/Calculator";
import Swap from "../../pages/Swap";

const publicRoutes = [
    {
        id: 0,
        route: "/",
        component: <Dashboard/>,
    },
    {
        id: 1,
        route: "/account",
        component: <Account/>
    },
    {
        id: 2,
        route: "/calculator",
        component: <Calculator/>
    },
    {
        id: 3,
        route: "/swap",
        component: <Swap/>
    },
];

export default publicRoutes;