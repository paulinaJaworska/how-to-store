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

const alertOptions = {
    timeout: 4000,
    position: 'top center'
};


class AppParent extends Component {

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
                                        <Route exact path="/:id" component={FoodDetails}/>
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

