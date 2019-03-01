import React from 'react';
import Photos from './Photos.jsx';

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            restaurantId: this.props.restaurantId
        }
        this.grabPhotos = this.grabPhotos.bind(this);
    }

    componentDidMount() {
        this.grabPhotos()
    }

    grabPhotos () {
        fetch(`http://127.0.0.1:3001/${this.state.restaurantId}/photos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((gallery) => {
            this.setState({
                photos: gallery
            })
        })
    }

    render() {
        return (
        <div>
            <Photos photo={this.state.photos} />
        </div>
        )
    }
}

export default Gallery;