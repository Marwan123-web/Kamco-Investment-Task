import Input from "../../shared/components/input/Input";
import "./SideMenu.scss";
import searchicon from "../../assets/images/graysearch.svg";

import add from "../../assets/images/menu/add-square.svg";

const SideMenu = ({ links }: { links: { id: number; name: string; image: string; hasChildren: boolean }[] }) => {
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
                {links.map((item: any) => {
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
