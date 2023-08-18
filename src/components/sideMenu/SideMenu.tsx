import Input from "../../shared/components/input/Input";
import "./SideMenu.scss";
import searchicon from "../../assets/images/graysearch.svg";

import setting from "../../assets/images/menu/settinggray.svg";

import dashboard from "../../assets/images/menu/chart-square.svg";
import add from "../../assets/images/menu/add-square.svg";
import flag from "../../assets/images/menu/flag.svg";
import users from "../../assets/images/menu/profile-2user.svg";
import user from "../../assets/images/menu/user-square.svg";

const SideMenu = () => {
    let menuItems = [
        { id: 1, name: "Dashboard", image: dashboard, hasChildren: false },
        { id: 2, name: "Customers", image: users, hasChildren: true },
        { id: 3, name: "Backend users", image: user, hasChildren: true },
        { id: 4, name: "Master data", image: flag, hasChildren: true },
        { id: 5, name: "Configuration", image: setting, hasChildren: false },
    ];
    return (
        <div className="sideMenu">
            <div className="item">
                <div className="searchField">
                    <Input id="search" placeholder="Search" />
                    <img src={searchicon} alt="search icon" className="iconImg" />
                </div>
            </div>
            <div className="item tabs">
                <div className="tab ">Standard</div>
                <div className="tab active"> Favorite</div>
            </div>

            <div className="item navs">
                {menuItems.map((item: any) => {
                    return (
                        <div className="nav" key={item.id}>
                            <div className="icon">
                                <img src={item.image} alt="item icon" />
                            </div>
                            <div className="name">{item.name}</div>
                            {item.hasChildren && (
                                <div className="expand">
                                    <img src={add} alt="expand icon" />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SideMenu;
