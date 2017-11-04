import React, { Component } from 'react';

export class Button extends Component {
    render() {
        return (
            <input type="button" placeholder={this.props.placeholder} value={this.props.value} onClick={this.props.onClick}/>
        );
    }
}

export class TextField extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:this.props.value || ''
        };
    }
    onChange(e) {
        this.setState({value: e.target.value});
    }
    render() {
        return (
            <input type='text' placeholder={this.props.placeholder} value={this.state.value} onBlur={this.props.onBlur} onChange={(e) => this.onChange(e)}/>
        );
    }
}

export class BigText extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:this.props.value || ''
        };
    }
    onChange(e) {
        this.setState({value: e.target.value});
    }
    render() {
        return (
            <textarea placeholder={this.props.placeholder} cols={this.props.cols}
                      rows={this.props.rows} value={this.state.value} onBlur={this.props.onBlur} onChange={(e) => this.onChange(e)}/>
        );
    }
}

export class DateTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:this.props.value || ''
        };
    }
    onChange(e) {
        this.setState({value: e.target.value});
    }
    render() {
        return (
            <input type="datetime-local" placeholder={this.props.placeholder}
                   value={this.state.value} onBlur={this.props.onBlur} onChange={(e) => this.onChange(e)}/>
        );
    }
}