import React, {Component} from 'react';

import NavBar from './layout/NavBar';
import FoodImagesList from './food_items/FoodImagesList';
import FoodDetails from './food_items/FoodDetails';

import {Provider} from 'react-redux';
import store from "../store";
import {BrowserRouter, Route} from "react-router-dom";
import ReactDOM from "react-dom";
import {Switch} from "@material-ui/core";

class AppParent extends Component {


// ReactDOM.render(<App/>, document.getElementById("app"));

// return (
//     <Provider store={store}>
//         <div>
//             <NavBar/>
//             <BrowserRouter>
//                 <div>
//                     <Route path="/" exact component={FoodImagesList}/>
//                     <Route path="/:name" render={} exact component={FoodDetails}/>
//                 </div>
//             </BrowserRouter>
//         </div>
//     </Provider>
// );


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
        <BrowserRouter>
            <NavBar/>
            <div className="content-wrapper">
                <Route path="/" exact render={(props) => <AppParent whichPage='foodList' {...props}/>}/>
                <Route path="/:name" exact render={(props) => <AppParent whichPage='foodDetails' {...props}/>}/>
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(routing, document.getElementById("app"));

