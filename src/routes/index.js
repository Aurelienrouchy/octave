import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from '../views/Dashboard/Dashboard';
import LandingPage from "../views/LandingPage/LandingPage";
import { useStore } from '../utils/store';

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
                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <Route path="*">
                    <div>Not found</div>
                </Route>
            </Switch>
        </Router>
    )
}