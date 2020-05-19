import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from "../store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
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

const alertOptions = {
    timeout: 4000,
    position: 'top center'
};


class AppParent extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <div className="main">
                    <AlertProvider template={AlertTemplate} {...alertOptions}>
                        <BrowserRouter>
                            <>
                                <NavBar />
                                <Alerts />
                                <div className="page-content-container">
                                    <Switch>
                                        <Route exact path="/" component={FoodImagesList}/>
                                        <Route exact path="/register" component={Register}/>
                                        <Route exact path="/login" component={Login}/>
                                        <Route exact path="/:id" component={FoodDetails}/>
                                        {/* todo */}
                                        <PrivateRoute exact path="/comments/new"/>
                                        <PrivateRoute exact path="comments/edit/:id"/>
                                    </Switch>
                                </div>
                            </>
                        </BrowserRouter>
                    </AlertProvider>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<AppParent/>, document.getElementById("app"));

