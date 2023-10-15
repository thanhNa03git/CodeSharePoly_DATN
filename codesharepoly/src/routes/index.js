// layout
import HeaderOnly from "@/components/Layout/HeaderOnly/Header";

// pages
import Home from "@/pages/Home";
import MyProduct from "@/pages/MyProduct";
import LikedList from "@/pages/LikedList";
import CreateNewProduct from "@/pages/CreateNewProduct";



// non-loggin
const publicRoutes = [
    { path: '/', component:Home },
    { path: '/myproduct', component:MyProduct },
    { path: '/likedlist', component:LikedList },
    { path: '/createnewproduct', component:CreateNewProduct, layout: HeaderOnly },

]

//request login
const privateRoutes = [

]

export {publicRoutes, privateRoutes}