// layouts
// import HeaderOnly from "@/components/Layout/HeaderOnly/Header";

// pages
import Home from "@/pages/Home";
import MyProduct from "@/pages/MyProduct";
import LikedList from "@/pages/LikedList";
import CreateNewProduct from "@/pages/CreateNewProduct";



// non-login
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/myProduct', component: MyProduct },
    { path: '/likedList', component: LikedList },
    { path: '/createNewProduct', component: CreateNewProduct, layout: null},

]

//request login
export const privateRoutes = []