import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import './_app.scss'

function DefaultLayout({children}) {

    const [sidebar, setSidebar] = useState(false)

    const handlerToggleSideBar = () =>{
        setSidebar(value => !value)
    }
    return ( 
        <>
            <Header handlerToggleSideBar={handlerToggleSideBar}/>
            <div className="app_container">
                <SideBar sidebar= {sidebar} handlerToggleSideBar={handlerToggleSideBar}/>
                <div className="content border border-warning">
                    {children}
                </div>
            </div>
        </>
    );
}
export default DefaultLayout;