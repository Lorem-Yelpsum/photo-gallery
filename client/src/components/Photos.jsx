import React from 'react';
import CSSModules from 'react-css-modules';
import Collection from './Collection.jsx';
import style from './Photos.css';
import Carousel from './Carousel.jsx';

class Photos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            photo1: 'regular',
            photo2: 'selected',
            photo3: 'regular',
            overlay1: 'hide',
            overlay2: 'display',
            photos: [],
            carousel0: null,
            carousel1: null
        }
        this.handleHover1 = this.handleHover1.bind(this);
        this.handleHover2 = this.handleHover2.bind(this);
        this.handleHover3 = this.handleHover3.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.openCarousel0 = this.openCarousel0.bind(this);
        this.openCarousel1 = this.openCarousel1.bind(this);
        this.closeCarousel = this.closeCarousel.bind(this);
    }

    handleHover1 () {
        this.setState({
            photo1: 'selected',
            photo2: 'regular',
            photo3: 'regular',
            overlay1: 'display',
            overlay2: 'hide'
        })
    }

    handleHover2 () {
        this.setState({
            photo1: 'regular',
            photo2: 'selected',
            photo3: 'regular',
            overlay2: 'display',
            overlay1: 'hide'
        })
    }

    handleHover3 () {
        this.setState({
            photo1: 'regular',
            photo2: 'regular',
            photo3: 'selected',
            overlay2: 'hide',
            overlay1: 'hide'
        })
    }

    handleLeave () {
        this.setState({
            photo1: 'regular',
            photo2: 'selected',
            photo3: 'regular',
            overlay2: 'display', 
            overlay1: 'hide' 
        })
    }

    openCarousel0 () {
        this.setState({
            carousel0: true
        });
    }

    openCarousel1 () {
        this.setState({
            carousel1: true
        });
    }

    closeCarousel () {
        this.setState({
            carousel0: null,
            carousel1: null
        });
    }

    render () {
        const { carousel0, carousel1} = this.state
        const {photo} = this.props
        if (photo.length > 0) {
            return (
                <div styleName ='photo-layout'>
                    { carousel0 ? <Carousel index={0} photos= {photo} closeModal={this.closeCarousel}/>: null}
                    { carousel1 ? <Carousel index={1} photos= {photo} closeModal={this.closeCarousel}/>: null}
                    <div styleName = 'photo1' onClick={this.openCarousel0} >
                        <div>
                            <img src={photo[0].url} styleName = {this.state.photo1} onMouseEnter = {this.handleHover1} onMouseLeave = {this.handleLeave}></img>
                            <div styleName = {this.state.overlay1}>
                            <img src={photo[0].userPic} styleName= 'userPic'></img>
                                <div styleName ='text-box'>
                                    <span styleName = 'text'>{photo[0].comments.slice(0, 25)} </span> <span styleName ='user'>by {photo[0].user}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div styleName= 'photo2' onClick ={this.openCarousel1}>
                        <div>
                            <img src={photo[1].url} styleName = {this.state.photo2} onMouseEnter={this.handleHover2} onMouseLeave={this.handleLeave}></img>
                            <div styleName = {this.state.overlay2}>
                                <img src={photo[1].userPic} styleName= 'userPic'></img>
                                <div styleName ='text-box'>
                                    <span styleName = 'text'>{photo[1].comments.slice(0, 25)} </span> 
                                    <span styleName ='user'>by {photo[1].user}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div styleName= 'photo3'>
                        <div>
                        <Collection photos={photo.slice(2)} over= {this.handleHover3} leave= {this.handleLeave} amount={photo.length}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default CSSModules(Photos, style, {allowMultiple: true});