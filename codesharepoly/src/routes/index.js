// layouts
// import HeaderOnly from "@/components/Layout/HeaderOnly/Header";

// pages
import CreateUser from "@/pages/CreateUser";
import DataReport from "@/pages/DataReport";
import Home from "@/pages/Home";
import UserManage from "@/pages/UserManage";

// non-login
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/userManage', component: UserManage },
    { path: '/report', component: DataReport },
    { path: '/createUser', component: CreateUser, layout: null},
]

//request login
export const privateRoutes = []