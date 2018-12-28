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
            photo3: 'regular'
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
            photo3: 'regular'
        })
    }

    handleHover2 () {
        this.setState({
            photo1: 'regular',
            photo2: 'selected',
            photo3: 'regular'
        })
    }

    handleHover3 () {
        this.setState({
            photo1: 'regular',
            photo2: 'regular',
            photo3: 'selected'
        })
    }

    handleLeave () {
        this.setState({
            photo1: 'regular',
            photo2: 'selected',
            photo3: 'regular'  
        })
    }

    render () {
        if (this.props.photo.length > 0) {
            return (
                <div styleName ='photo-layout'>
                    <div styleName = 'photo1'>
                        <div>
                            <img src={this.props.photo[0].url} styleName = {this.state.photo1} onMouseOver = {this.handleHover1} onMouseLeave = {this.handleLeave}></img>
                            <div styleName = 'overlay'>
                                <img src={this.props.photo[0].userPic} styleName= 'userPic'></img>
                                <div>
                                    <div>{this.props.photo[0].comments}</div>
                                    <span>by
                                        <div>{this.props.photo[0].user}</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div styleName= 'photo2'>
                        <div>
                            <img src={this.props.photo[1].url} styleName = {this.state.photo2} onMouseOver={this.handleHover2} onMouseLeave={this.handleLeave}></img>
                            <div styleName = 'overlay'>
                                <img src={this.props.photo[1].userPic} styleName= 'userPic'></img>
                                <div>
                                    <div>{this.props.photo[1].comments}</div>
                                    <span>by
                                        <div>{this.props.photo[1].user}</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div styleName= 'photo3'>
                        <div>
                        <Collection photos={this.props.photo.slice(2)} over= {this.handleHover3} leave= {this.handleLeave}/>
                        <div styleName = 'collectionOverlay'></div>
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