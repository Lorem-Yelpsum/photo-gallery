import React from 'react';
import CSSModules from 'react-css-modules';
import style from './collection.css'

class Collection extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            table: 'regular',
            grid: 'normal'
        }
    this.handleGridHover=this.handleGridHover.bind(this);
    this.handleGridLeave=this.handleGridLeave.bind(this);
    }

    handleGridHover () {
        this.setState({
            'show-all': 'selected',
            grid: 'current'
        })
    }

    handleGridLeave () {
        this.setState({
            'show-all': 'regular',
            grid: 'normal'
        })
    }

    render () {
        return (
            <table styleName = {this.state.table} onMouseOver = {() => {this.props.over(); this.handleGridHover();}} onMouseLeave = {() => {this.props.leave(); this.handleGridLeave()}}cellPadding='0' cellSpacing='0'>
                <tr>
                    <td><img src={this.props.photos[0].url} styleName = {this.state.grid}></img></td>
                    <td><img src={this.props.photos[1].url} styleName = {this.state.grid}></img></td>
                </tr>
                <tr>
                    <td> <img src={this.props.photos[2].url} styleName = {this.state.grid}></img></td>
                    <td><img src={this.props.photos[3].url} styleName = {this.state.grid}></img></td>
                </tr>
            </table>
        )
    }
}

export default CSSModules(Collection, style, {allowMultiple: true});