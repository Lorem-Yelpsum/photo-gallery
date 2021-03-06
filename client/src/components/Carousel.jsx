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
            color: '#808080',
            browse: '#999',
            share: '#999',
            compliment: '#999',
            elite: 0
        }
        this.previousImage=this.previousImage.bind(this);
        this.nextImage=this.nextImage.bind(this);
        this.hoverClose = this.hoverClose.bind(this);
        this.unhoverClose = this.unhoverClose.bind(this);
        this.hoverBrowse = this.hoverBrowse.bind(this);
        this.unhoverBrowse = this.unhoverBrowse.bind(this);
    }

    componentWillReceiveProps(props) {
        const {photos, index} = props

        this.setState({
            index,
            photos,
            elite: props.photos[index].elite
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

    hoverBrowse (e) {
        let change = {};
        let name = e.target.getAttribute('name');
        change[name] = 'white';
        this.setState(change);
    }

    unhoverBrowse (e) {
        let change = {};
        let name = e.target.getAttribute('name')
        change[name] = '#999';
        this.setState(change);
    }

    render () {
        const {close, color, index, photos, elite, browse, share, compliment} = this.state;
        const {closeModal} = this.props
        const photoInfo = photos[index] || this.props.photos[this.props.index];
        console.log(photoInfo);
        return (
            <div styleName= 'modal-background' onClick={ closeModal}>
                <div styleName = 'modal-main'>
                    <div styleName ={close} 
                    onMouseEnter={this.hoverClose} 
                    onMouseLeave={this.unhoverClose} 
                    onClick={closeModal}>
                    Close
                        <Icon name={'24x24_close'} 
                        fill={color} 
                        width={24} 
                        height={24}></Icon>
                    </div>
                    <div styleName = 'picture-info'>
                        <div styleName ='picture-detail-grid'>
                            <div styleName='media'>
                                <img src={photoInfo.url} styleName ='picture'></img>
                                <div styleName = 'picture-footer'>
                                    <span>
                                        <div styleName = 'browse' 
                                        onMouseEnter = {(e) => {this.hoverBrowse(e)}}
                                        onMouseLeave = {(e)=> {this.unhoverBrowse(e)}} 
                                        name ='browse'>
                                            <Icon name={'18x18_grid'} 
                                            fill={browse} 
                                            width={18} 
                                            height={18}/>
                                            Browse all
                                        </div>
                                        <div styleName='current-photo'>{index +1} of {photos.length}</div>
                                        <div styleName = 'share' 
                                        onMouseEnter = {(e) => {this.hoverBrowse(e)}}
                                        onMouseLeave = {(e)=> {this.unhoverBrowse(e)}} name ='share'>
                                            <Icon name={'18x18_share'} 
                                            fill={share} 
                                            width={18} 
                                            height={18}/>
                                            Share
                                        </div>
                                        <div styleName = 'compliment' 
                                        onMouseEnter = {(e) => {this.hoverBrowse(e)}}
                                        onMouseLeave = {(e)=> {this.unhoverBrowse(e)}} 
                                        name ='compliment'>
                                            <Icon name={'18x18_compliment'} 
                                            fill={compliment} 
                                            width={18} 
                                            height={18}/>
                                            Compliment
                                        </div>
                                        <div styleName='flag'
                                        onMouseEnter = {(e) => {this.hoverBrowse(e)}}
                                        onMouseLeave = {(e)=> {this.unhoverBrowse(e)}}>
                                            <Icon name={'18x18_flag'} 
                                            fill={'#FFFFFF'} 
                                            width={18} 
                                            height={18}/>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div styleName = 'sidebar'>
                            <div styleName = 'user-info'>
                                <img styleName = 'user-avatar' src={photoInfo.userPic}></img>
                                <div styleName = 'name'>{photoInfo.user}</div>
                                <div styleName ='user-stats'>
                                    <span>
                                        <div styleName='friend-count'>
                                            <span>
                                                <Icon name={'18x18_friends'}  
                                                fill = {'#f15c00'}
                                                width={18} 
                                                height={18}/>
                                                <div styleName ='stat-color'>{photoInfo.friends}</div>
                                            </span>
                                        </div>
                                        <div styleName ='review-count'>
                                        <span>
                                        <Icon name={'18x18_review'}  
                                        fill = {'#f15c00'}
                                        width={18} 
                                        height={18}/>
                                                <div styleName ='stat-color'>{photoInfo.reviews}</div>
                                            </span>
                                        </div>
                                        {elite === 1 ? 
                                        <div>
                                            <div styleName='elite'>Elite '19</div>
                                        </div> : null}
                                    </span>
                                </div>
                            </div>
                            <div styleName='comment'>{photoInfo.comments}</div>
                            <div styleName='date'>{photoInfo.day}</div>
                            <div styleName='helpful'>Was this photo ...?</div>
                            <span>
                                <div styleName='helpful-button'>
                                  <Icon name={'18x18_arrow_up'} width={18} height={18} fill={'#666'}/>
                                  Helpful
                                </div>
                                <div styleName='helpful-button'>
                                <Icon name={'18x18_arrow_down'} width={18} height={18} fill={'#666'}/>
                                  Not Helpful
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(Carousel, style, {allowMultiple: true});