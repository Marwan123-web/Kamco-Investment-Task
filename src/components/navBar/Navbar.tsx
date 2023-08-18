import "./Navbar.scss";
import logo from "../../assets/images/Kamcologo.svg";
import searchicon from "../../assets/images/searchw.svg";
import settingicon from "../../assets/images/setting.svg";
import notificationicon from "../../assets/images/notification-bing.svg";
import userLogo from "../../assets/images/userlogo.svg";
import arrowdownIcon from "../../assets/images/arrow-down.svg";

import Input from "../../shared/components/input/Input";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="item">
                <img src={logo} alt="Company Logo" />
                <span className="line"></span>
                <div className="pageLabel">Customers</div>
            </div>
            <div className="item">
                <div className="searchField">
                    <Input id="search" placeholder="Search" />
                    <img src={searchicon} alt="search icon" className="iconImg" />
                </div>
                <div className="options">
                    <img src={settingicon} alt="settings Icon" />
                    <img src={notificationicon} alt="settings Icon" />
                </div>
                <span className="line"></span>
                <div className="accDropdown">
                    <img src={userLogo} alt="settings Icon" />
                    <div className="name">Jacob Gillespie</div>
                    <div className="dropdown">
                        <img src={arrowdownIcon} alt="settings Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
