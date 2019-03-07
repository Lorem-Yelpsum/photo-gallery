import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Carousel.css';
import Icon from './Icon.jsx';


class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            photos: [],
            close: 'unhovered',
            color: '#808080'
        }
        this.previousImage=this.previousImage.bind(this);
        this.nextImage=this.nextImage.bind(this);
        this.hoverClose = this.hoverClose.bind(this);
        this.unhoverClose = this.unhoverClose.bind(this);
    }

    componentWillReceiveProps(props) {
        const {photos, index} = props
        this.setState({
            index,
            photos
        })
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
        const {close, color, index, photos} = this.state;
        const {closeModal} = this.props
        const photoInfo = photos[index] || this.props.photos[this.props.index];
        return (
            <div styleName= 'modal-background' onClick={ closeModal}>
                <div styleName = 'modal-main'>
                    <div styleName ={close} onMouseEnter={this.hoverClose} onMouseLeave={this.unhoverClose} onClick={closeModal}>
                    Close
                    <Icon name={'24x24_close'} fill={color} width={24} height={24}></Icon>
                    </div>
                    <div styleName = 'picture-info'>
                        <div styleName ='picture-detail-grid'>
                            <div styleName='media'>
                            <img src={photoInfo.url}></img>
                            <div styleName = 'picture-footer'>
                            </div>
                            </div>
                        </div>
                        <div styleName = 'sidebar'>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(Carousel, style, {allowMultiple: true});