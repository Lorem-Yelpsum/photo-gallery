import React from 'react';
import CSSModules from 'react-css-modules';
import Collection from './Collection.jsx';
import style from './Photos.css';


class Photos extends React.Component{
    constructor(props){
        super(props)
        this.state;
    }

    render () {
        if (this.props.photo.length > 0) {
            return (
                <div>
                    <div styleName = 'photo1'>
                        <div>
                            <img src={this.props.photo[0].url}></img>
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
                        <img src={this.props.photo[1].url}></img>
                        <div styleName = 'overlay'>

                        </div>
                        </div>
                    </div>
                    <div styleName= 'photo3'>
                        <div>
                        <Collection photos={this.props.photo.slice(2)} />
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