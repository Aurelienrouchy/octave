import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import { useStore } from '../utils/store';

import './styles.scss';

import Menu from '../components/Menu/Menu';
import Panel from '../components/Panel/Panel';
import Home from '../views/Home/Home';
import Artists from '../views/Artists/Artists';
import ArtistDetails from '../views/ArtistDetails/ArtistDetails';

function PrivateRoute({ children, ...rest }) {
    const store = useStore('auth');

    return (
        <Route
            {...rest}
            render={({ location }) =>
                store.isLogin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default function AuthRoute() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <PrivateRoute >
                    <div className="dashboard">
                        <Menu />
                        <Switch>
                            <PrivateRoute path="/dashboard">
                                <Home />
                            </PrivateRoute>
                            <PrivateRoute exact path="/artists">
                                <Artists />
                            </PrivateRoute>
                            <PrivateRoute path="/artists/:id">
                                <ArtistDetails />
                            </PrivateRoute>
                        </Switch>
                        <Panel />
                    </div>
                </PrivateRoute>
                <Route path="*">
                    <div>Not found</div>
                </Route>
            </Switch>
        </Router>
    )
}