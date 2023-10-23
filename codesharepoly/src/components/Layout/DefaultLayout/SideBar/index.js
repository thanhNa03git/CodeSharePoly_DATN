import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from '@mui/icons-material/Logout';
import "./sidebar.scss";
import { Typography } from "@mui/material";

function SideBar({sidebar,handlerToggleSideBar}) {
    return (
        <div className={sidebar?'sidebar open':'sidebar'}
        onClick={()=>{handlerToggleSideBar(false)}}>
            <div className="sidebar-account">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                    alt="avatar"
                    className="header-user"
                /><br></br>
                <Typography className="typo" variant="h5" gutterBottom>Name Account</Typography>
            </div>
            <li>
                <ManageAccountsIcon fontSize="large" />
                <span>Quản trị</span>
            </li>
            <li>
                <EqualizerIcon fontSize="large" />
                <span>Thống kê</span>
            </li>
            <li>
                <HelpOutlineIcon fontSize="large" />
                <span>Trợ giúp</span>
            </li>

            <hr/>
            <li>
                <LogoutIcon fontSize="large" />
                <span>Đăng xuất</span>
            </li>
            <hr/>
        </div>
    );
}

export default SideBar;
