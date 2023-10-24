// layouts
// import HeaderOnly from "@/components/Layout/HeaderOnly/Header";

// pages
import CreateUser from "@/pages/CreateUser";
import DataReport from "@/pages/DataReport";
import Help from "@/pages/Help";
import LoginScreen from "@/pages/LoginScreen";
import UserManage from "@/pages/UserManage";

// non-login
export const publicRoutes = [
    { path: '/', component: UserManage },
    { path: '/login', component: LoginScreen },
    { path: '/report', component: DataReport },
    { path: '/createUser', component: CreateUser, layout: null},
    { path: '/help', component: Help },
]

//request login
export const privateRoutes = []