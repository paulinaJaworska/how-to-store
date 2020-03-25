import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import NavBar from './layout/NavBar'
import FoodImagesList from './food_items/FoodImagesList'
import axios from "axios";

class App extends Component {
    state = {food_items: []};  // use [] to avoid potential errors(e.g calling map or length on it)


    getPosts() {
        axios.get('http://localhost:8000/api/posts')
            .then(response => {
                this.setState({food_items: response.data});
            });
    }

    componentDidMount() {
        this.getPosts();
    }


    render() {
        return (
            <div>
                <NavBar/>
                <FoodImagesList food_items={this.state.food_items}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));