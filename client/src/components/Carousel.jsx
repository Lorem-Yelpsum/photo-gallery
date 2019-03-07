import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Carousel.css';
import Icon from './Icon.jsx';


class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: this.props.index,
            photos: this.props.photos,
            close: 'unhovered',
            color: '#808080'
        }
        this.previousImage=this.previousImage.bind(this);
        this.nextImage=this.nextImage.bind(this);
        this.hoverClose = this.hoverClose.bind(this);
        this.unhoverClose = this.unhoverClose.bind(this);
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

    hoverClose () {
        this.setState({
            close: 'hovered',
            color: 'white'
        })
    }

    unhoverClose () {
        this.setState({
            close: 'unhovered',
            color: '#808080'
        })
    }


    render () {
        const {close, color} = this.state
        return (
            <div styleName= 'modal-background'>
                <div styleName = 'modal-main'>
                    <div styleName ={close} onMouseEnter={this.hoverClose} onMouseLeave={this.unhoverClose}>
                    Close
                    <Icon name={'24x24_close'} fill={color} width={24} height={24}></Icon>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(Carousel, style, {allowMultiple: true});