import React from 'react';

class Photos extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        if (this.props.photo.length > 0) {
            return (
                <div>
                    <img src={this.props.photo[4].url}></img>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Photos;