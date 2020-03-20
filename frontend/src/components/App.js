import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import NavBar from './layout/NavBar'

class App extends Component {
    render() {
        return (
            <NavBar/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));