import React from 'react';
import CSSModules from 'react-css-modules';


class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: this.props.index,
            photos: this.props.photos
        }
        this.previousImage=this.previousImage.bind(this);
        this.nextImage=this.nextImage.bind(this);
    }

    previousImage() {
        if (this.state.index === 0) {
            return
        }
        let current = this.state.index
        this.setState({
            index: current--
        })
    }

    nextImage () {
        if (this.state.index === this.state.photos.length-1) {
            return
        }
        let current = this.state.index
        this.setState({
            index: current++
        })
    }


    render () {
        if (this.props.open === false) {
            return null;
        }
        return (

        )
    }
}