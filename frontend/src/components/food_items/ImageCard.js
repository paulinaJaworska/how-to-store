import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // makes sure that the image loaded to be able to get it's height
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        // span equals image height divided by row height
        const spans = Math.ceil(height / 10);

        this.setState({spans})
    };

    render() {
        const {id, title, image} = this.props.item;

        return (
            <Link to={{pathname: `${id}`}} style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={title} src={image}/>
            </Link>
        );
    }
}

export default ImageCard;