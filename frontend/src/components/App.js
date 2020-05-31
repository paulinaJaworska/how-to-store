import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from "../store";
// Using HashRouter prevents incorrect request urls after refreshing page
import {Route, Switch, HashRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";

import '../../static/css/main.css';
import NavBar from './layout/NavBar';
import FoodImagesList from './food_items/FoodImagesList';
import FoodDetails from './food_items/FoodDetails';

import {Alerts} from "./layout/Alerts";
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Register from "./accounts/Register";
import Login from "./accounts/Login";
import PrivateRoute from "./common/PrivateRoute";
import {loadUser} from "../actions/auth";
import Profile from "./accounts/Profile";

const alertOptions = {
    timeout: 3000,
    position: 'top center'
};


class AppParent extends Component {

    componentDidMount() {
        // with every load of the page update if userIsAuthenticated
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <div className="main">
                    <AlertProvider template={AlertTemplate} {...alertOptions}>
                        <Router>
                            <>
                                <NavBar />
                                <div className="page-content-container">
                                    <Alerts/>
                                    <Switch>
                                        {/*Private route to check if user is logged in*/}
                                        <PrivateRoute exact path="/profile" component={Profile}/>
                                        <Route exact path="/" component={FoodImagesList}/>
                                        <Route exact path="/register" component={Register}/>
                                        <Route exact path="/login" component={Login}/>
                                        <Route exact path="/:id" component={FoodDetails}/>
                                        {/* todo */}
                                        <PrivateRoute exact path="comments/edit/:id"/>
                                    </Switch>
                                </div>
                            </>
                        </Router>
                    </AlertProvider>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<AppParent/>, document.getElementById("app"));

