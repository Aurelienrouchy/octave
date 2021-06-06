import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Menu from '../../components/Menu/Menu';
import Panel from '../../components/Panel/Panel';
import Home from '../Home/Home';

import './Dashboard.scss';

const Dashboard = () => {
    return (
        <Router>
            <div className="dashboard">
                <Menu />
                <Switch>
                    <Route path="/dashboard" render={Home} />
                        {/* <Home /> */}
                    {/* </Route> */}
                    {/* <Route path="/favorite">
                        <Favorite />
                    </Route>
                    <Route path="/">
                        <Search />
                    </Route> */}
                </Switch>
                <Panel />
            </div>
        </Router>
    );
}

export default Dashboard;