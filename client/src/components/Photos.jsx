import React from 'react';
import CSSModules from 'react-css-modules';
import Collection from './Collection.jsx';
import style from './Photos.css';


class Photos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            photo1: 'regular',
            photo2: 'selected',
            photo3: 'regular',
            overlay1: 'hide',
            overlay2: 'display',
        }
        this.handleHover1 = this.handleHover1.bind(this);
        this.handleHover2 = this.handleHover2.bind(this);
        this.handleHover3 = this.handleHover3.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
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
        console.log('you did it')
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

    render () {
        if (this.props.photo.length > 0) {
            return (
                <div styleName ='photo-layout'>
                    <div styleName = 'photo1'>
                        <div>
                            <img src={this.props.photo[0].url} styleName = {this.state.photo1} onMouseEnter = {this.handleHover1} onMouseLeave = {this.handleLeave}></img>
                            <div styleName = {this.state.overlay1}>
                            <img src={this.props.photo[0].userPic} styleName= 'userPic'></img>
                                <div styleName ='text-box'>
                                    <span styleName = 'text'>{this.props.photo[0].comments} </span> <span styleName ='user'>by {this.props.photo[0].user}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div styleName= 'photo2'>
                        <div>
                            <img src={this.props.photo[1].url} styleName = {this.state.photo2} onMouseEnter={this.handleHover2} onMouseLeave={this.handleLeave}></img>
                            <div styleName = {this.state.overlay2}>
                                <img src={this.props.photo[1].userPic} styleName= 'userPic'></img>
                                <div styleName ='text-box'>
                                    <span styleName = 'text'>{this.props.photo[1].comments} </span> <span styleName ='user'>by {this.props.photo[1].user}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div styleName= 'photo3'>
                        <div>
                        <Collection photos={this.props.photo.slice(2)} over= {this.handleHover3} leave= {this.handleLeave} amount={this.props.photo.length}/>
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