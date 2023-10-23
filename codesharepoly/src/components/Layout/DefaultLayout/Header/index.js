import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "./header.scss";

function Header({ handlerToggleSideBar }) {
    return (
        <div className="header border border-danger">
        <div className="header-sidebar">
            <MenuIcon
            className="header-menu"
            fontSize="large"
            onClick={() => handlerToggleSideBar()}
            />
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/640px-FPT_Polytechnic.png"
            alt="logo"
            className="header-logo"
            />
        </div>
        <form>
            <input type="text" placeholder="searching" />
            <button type="submit">
            <SearchIcon className="header-icon" fontSize="large" />
            </button>
        </form>
        <div className="header-icons">
            <NotificationsIcon className="icon-noti" fontSize="large" />
            <AddBoxIcon className="icon-add" fontSize="large" />
            <img
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt="avatar"
            className="header-user"
            />
        </div>
        </div>
    );
}

export default Header;
