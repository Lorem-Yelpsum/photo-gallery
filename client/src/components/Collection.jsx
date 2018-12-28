import React from 'react';
import CSSModules from 'react-css-modules';
import style from './collection.css'

class Collection extends React.Component {
    constructor (props) {
        super(props)
        this.state;
    }
    render () {
        return (
            <div styleName = "show-all" onMouseOver = {this.props.over} onMouseLeave = {this.props.leave}>
                <img src={this.props.photos[0].url}></img>
                <img src={this.props.photos[1].url}></img>
                <img src={this.props.photos[2].url}></img>
                <img src={this.props.photos[3].url}></img>
            </div>
        )
    }
}

export default CSSModules(Collection, style, {allowMultiple: true});