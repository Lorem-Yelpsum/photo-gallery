import React from 'react';
import CSSModules from 'react-css-modules';
import style from './collection.css'
import Icon from './Icon.jsx'

class Collection extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            table: 'regular',
            grid: 'normal',
            colPos: 'colPos1',
            colText: 'colText1',
            height: 24,
            width: 24
        }
    this.handleGridHover=this.handleGridHover.bind(this);
    this.handleGridLeave=this.handleGridLeave.bind(this);
    }

    handleGridHover () {
        this.setState({
            table: 'selected',
            grid: 'current',
            colPos: 'colPos2',
            colText: 'colText2',
            height: 28,
            width: 28
        })
    }

    handleGridLeave () {
        this.setState({
            table: 'regular',
            grid: 'normal',
            colPos: 'colPos1',
            colText: 'colText1',
            height: 24,
            width: 24
        })
    }

    render () {
        return (
            <table styleName = {this.state.table} onMouseEnter = {() => {this.props.over(); this.handleGridHover();}} onMouseLeave = {() => {this.props.leave(); this.handleGridLeave()}}cellPadding='0' cellSpacing='0'>
                <tr>
                    <td><img src={this.props.photos[0].url} styleName = {this.state.grid}></img></td>
                    <td><img src={this.props.photos[1].url} styleName = {this.state.grid}></img></td>
                </tr>
                <tr>
                    <td> <img src={this.props.photos[2].url} styleName = {this.state.grid}></img></td>
                    <td><img src={this.props.photos[3].url} styleName = {this.state.grid}></img></td>
                </tr>
                <div styleName = 'collectionOverlay'>
                            <span styleName= {this.state.colPos}>
                                <div><Icon name={'24x24_grid'} fill='#FFF' width={this.state.width} height={this.state.height}/></div>
                                <div styleName={this.state.colText}>See all {this.props.amount}</div>
                            </span>
                        </div>
            </table>
        )
    }
}

export default CSSModules(Collection, style, {allowMultiple: true});