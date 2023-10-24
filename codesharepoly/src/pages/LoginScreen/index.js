
import { Button } from "@mui/material";
import "./_login.scss";

function LoginScreen() {
    return (
        <div className="login">
            <div className="login-container">
                <h5>Code share poly</h5>
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
                alt="logo"
                />
                <Button className="button" variant="outlined">Log in with Google</Button>
                <p>Đăng nhập để tiếp tục</p>
            </div>
        </div>
    );
}

export default LoginScreen;
