import Input from "../../shared/components/input/Input";
import "./SideMenu.scss";
import searchicon from "../../assets/images/graysearch.svg";

import add from "../../assets/images/menu/add-square.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const SideMenu = ({ links }: { links: { id: number; name: string; image: string; hasChildren: boolean }[] }) => {
    const [favMenu, setFavMenu] = useState(false);
    return (
        <div className="sideMenu">
            <div className="item">
                <div className="searchField">
                    <Input id="search" placeholder="Search" />
                    <img src={searchicon} alt="search icon" className="iconImg" />
                </div>
            </div>
            <div className="item tabs">
                <div className={favMenu === true ? "" : "tab active"} onClick={() => setFavMenu(false)}>
                    Standard
                </div>
                <div className={favMenu === true ? "tab active" : ""} onClick={() => setFavMenu(true)}>
                    Favorite
                </div>
            </div>

            <div className="item navs">
                {links.map((item: any) => {
                    return (
                        <div className="nav" key={item.id}>
                            <div className="icon">
                                <img src={item.image} alt="item icon" />
                            </div>
                            <div>
                                <NavLink to={"/" + item.name}>{item.name}</NavLink>
                            </div>
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
