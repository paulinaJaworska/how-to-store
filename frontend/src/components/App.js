import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from "../store";
import {BrowserRouter, Route} from "react-router-dom";
import ReactDOM from "react-dom";

import '../../static/css/main.css';
import NavBar from './layout/NavBar';
import FoodImagesList from './food_items/FoodImagesList';
import FoodDetails from './food_items/FoodDetails';


class AppParent extends Component {
    getContent(currentPage) {
        switch (currentPage) {
            case 'foodList':
                return <FoodImagesList/>;
            case 'foodDetails':
                return <FoodDetails/>;
            default:
                return null;
        }
    }

    render() {
        const currentPage = this.props.whichPage;
        return (
            <>
                <div>{this.getContent(currentPage)}</div>
            </>
        );
    }
}

const routing = (
    <Provider store={store}>
        <div className="main">
            <NavBar/>
            <Alerts />
            <div className="page-content-container">
                <BrowserRouter>
                    <>
                        <Route path="/" exact render={(props) => <AppParent whichPage='foodList' {...props}/>}/>
                        <Route path="/:id" exact render={(props) => <FoodDetails {...props}/>}/>
                        {/*<Route path="/:id" exact render={(props) => <AppParent whichPage='foodDetails' {...props}/>}/>*/}
                    </>
                </BrowserRouter>
            </div>
        </div>
    </Provider>
);

ReactDOM.render(routing, document.getElementById("app"));

