import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        return (
            <div className="detail-page">
                <div className="container">
                    <div className="row">
                        <div className="col square one">Column</div>
                        <div className="col square two">Column</div>
                        <div className="w-100"></div>
                        <div className="col three">Column</div>
                    </div>
                </div>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
