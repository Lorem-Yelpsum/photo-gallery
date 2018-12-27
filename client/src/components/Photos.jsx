import React from 'react';
import Collection from './Collection.jsx';

const selected = {
    current: 'current',
    not: 'not'    
}
class Photos extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        if (this.props.photo.length > 0) {
            return (
                <div>
                    <div className = 'photo1'>
                        <div>
                        <img src={this.props.photo[0].url}></img>
                        <div className = 'overlay'></div>
                        </div>
                    </div>
                    <div className= 'photo2'>
                        <div>
                        <img src={this.props.photo[1].url}></img>
                        <div className = 'overlay'></div>
                        </div>
                    </div>
                    <div className= 'photo3'>
                        <div>
                        <Collection photos={this.props.photo.slice(2)} />
                        <div className = 'overlay'></div>
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

export default Photos;