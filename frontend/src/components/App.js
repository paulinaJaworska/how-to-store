import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import NavBar from './layout/NavBar'
import FoodImagesList from './food_items/FoodImagesList'
import axios from "axios";

import {Provider} from 'react-redux';
import store from "../store";

class App extends Component {
    state = {food_items: []};  // use [] to avoid potential errors(e.g calling map or length on it)


    getPosts() {
        axios.get('http://127.0.0.1:8000/api/posts')
            .then(response => {
                this.setState({food_items: response.data});
            });
    }

    componentDidMount() {
        this.getPosts();
    }


    render() {
        return (
            <Provider store={}>
                <div>
                    <NavBar/>
                    <FoodImagesList food_items={this.state.food_items}/>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));