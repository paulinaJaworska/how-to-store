import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    // Only authenticated user can access private route
    return (
        <Route
            {...rest}
            render={props => {
                // isLoading and isAuthenticated are state values
                if(auth.isLoading) {
                    // todo: spinner
                    return <h2>Loading...</h2>;
                } else if(!auth.isAuthenticated) {
                    return <Redirect to="/login"/>;
                } else {
                    return <Component {...props}/>;
                }
            }}
        />
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);