import Header from "./Header";
import SideBar from "./SideBar";
import './_app.scss'

function DefaultLayout({children}) {
    return ( 
        <>
            <Header/>
            <div className="app_container bg-success">
                <SideBar/>
                <div className="content border border-warning">
                    {children}
                </div>
            </div>
        </>
    );
}
export default DefaultLayout;