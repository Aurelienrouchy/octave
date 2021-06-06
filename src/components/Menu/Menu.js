import React from 'react';
import { NavLink } from "react-router-dom";

import { useStore } from './../../utils/store';
import { capitalize } from './../../utils/string';
import './Menu.scss';

const Menu = () => {
    const store = useStore('app');

    return (
        <div className="menu">
            <div className="logo">LOGO</div>
            { 
                store.mainMenuCfg.map(({ id, label, subtitles }) => (
                    <div className="submenu" key={id}>
                        <div className="label">{ label.toUpperCase() }</div>
                        <div className="submenu-link">
                            {
                                subtitles.map(({ label, path, Icon }) => (
                                    <div className="link-container" key={label}>
                                        <NavLink
                                            activeClassName="active"
                                            className="link"
                                            to={`/${path}`}
                                        >
                                            <Icon className="icon" />
                                            { capitalize(label) }
                                        </NavLink>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Menu;