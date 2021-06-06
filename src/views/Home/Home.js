import React from 'react';
import {
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import { capitalize } from '../../utils/string';

import MusicTab from '../MusicTab/MusicTab';
// import Favorite from '../Favorite/Favorite';
// import Search from '../Search/Search';
// import Upload from '../Upload/Upload';

import './Home.scss';

const routes = [{
      path: "",
      label: "music",
      component: MusicTab
    }, {
      path: "/podcast",
      label: "podcast",
      component: MusicTab
    }, {
      path: "/live",
      label: "live",
      component: MusicTab
    }, {
      path: "/radio",
      label: "radio",
      component: MusicTab
    }
];

const Home = () => {
    return (
        <div className="home">
            <div className="tabs-label">
                {
                    routes.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            activeClassName="active"
                            className="tab-label"
                            to={`/dashboard${path}`}
                        >
                            { capitalize(label)}
                        </NavLink>
                    ))
                }
            </div>
            <Switch>
                {
                    routes.map(route => (
                        <Route exact key={route.path} path={`/dashboard${route.path}`} render={(props) => <route.component {...props}/>} />
                    ))
                }
            </Switch>
        </div>
    );
}

export default Home;