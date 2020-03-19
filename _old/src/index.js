import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'


const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                {/*<NavBar />*/}
                <Route path="/" exact component={ItemsList}/>
            </BrowserRouter>
        </div>
    )
}

export default App;