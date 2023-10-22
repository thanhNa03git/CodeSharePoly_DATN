import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddBoxIcon from "@mui/icons-material/AddBox";
import './header.scss'
function Header() {
    return (
        <div className="header border border-danger">
            <MenuIcon className="icon-menu" fontSize="large" />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/640px-FPT_Polytechnic.png"
                alt="sharecodefpoly"
                className="header-logo"
            />
            <form>
                <input type="text" placeholder="searching" />
                <button type="submit">
                <SearchIcon className="icon-search" fontSize="large" />
                </button>
            </form>
            <NotificationsIcon className="icon-noti" fontSize="large" />
            <AddBoxIcon className="icon-add" fontSize="large" />
        </div>
    );
}

export default Header;
