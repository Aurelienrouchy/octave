import React from 'react';
import { NavLink } from "react-router-dom";

import { useStore } from './../../utils/store';
import { capitalize } from './../../utils/string';
import './Menu.scss';

const Menu = () => {
    const store = useStore('app');

    return (
        <div className="menu">
            { 
                store.mainMenuCfg.map(({ id, label, subtitles }) => (
                    <div className="submenu" key={id}>
                        <div className="label">{ label.toUpperCase() }</div>
                        <div className="submenu-link">
                            {
                                subtitles.map(({ label, path, Icon, disabled }) => (
                                    <div className={`link-container ${disabled ? 'disabled' : ''}`} key={label}>
                                        <NavLink
                                            activeClassName="active"
                                            className={`link ${disabled ? 'disabled' : ''}`} 
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