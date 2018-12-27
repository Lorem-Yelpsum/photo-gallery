import React from 'react';

export default class Collection extends React.Component {
    constructor (props) {
        super(props)
        this.state;
    }
    render () {
        return (
            <div>
                <img src={this.props.photos[0].url}></img>
                <img src={this.props.photos[1].url}></img>
                <img src={this.props.photos[2].url}></img>
                <img src={this.props.photos[3].url}></img>
            </div>
        )
    }
}