import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import NavBar from './layout/NavBar'
import FoodImagesList from './food_items/FoodImagesList'

import {Provider} from 'react-redux';
import store from "../store";

class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <div>
                    <NavBar/>
                    <FoodImagesList/>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));