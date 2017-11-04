import React, { Component } from 'react';
import {TextField, Button, DateTime, BigText} from './SimpleElems';
import moment from 'moment';
import './style.css';

export default class Task extends Component {
    constructor(props){
        super(props);
        this.state = (props.task!=='newTask')?props.task:{
            name:'',
            description:'',
            status:'usual',
            planFinish:'',
            realFinish:''
        };
    }
    onCheck(){
        let now = moment().format().substr(0,16);
        this.setState({realFinish:now},this.onSave.bind(this));
    }
    onSave(){
        localStorage.setItem(this.state.name, JSON.stringify(this.state));
        this.props.close();
    }
    onDelete(){
        localStorage.removeItem(this.state.name);
        this.props.close();
    }
    render() {
        console.log('lll');
        let thisComp = this, {name, description, status, planFinish, realFinish} = this.state;
        return (
            <div className='task'>
                <TextField placeholder='название задачи' onBlur={(e)=>{this.setState({name:e.currentTarget.value})}} value={name}/>
                <BigText cols='70' rows='15' placeholder='текст задачи'
                         onBlur={(e)=>{this.setState({description:e.currentTarget.value})}} value={description}/>
                <DateTime placeholder='vcxvx' onBlur={(e)=>{this.setState({planFinish:e.currentTarget.value})}} value={planFinish}/>
                <DateTime placeholder='vcxvx' onBlur={(e)=>{this.setState({realFinish:e.currentTarget.value})}} value={realFinish}/>
                <select onChange={(e)=>{this.setState({status:e.currentTarget.value});}} defaultValue={status}>
                    <option value='usual'>обычная</option>
                    <option value='impotant'>важная</option>
                    <option value='veryimpotant'>очень важная</option>
                </select>
                <Button value='пометить как выполненую' onClick={this.onCheck.bind(thisComp)}/>
                <Button value='save' onClick={this.onSave.bind(thisComp)}/>
                {this.props.task==='newTask'?'':<Button value='delete' onClick={this.onDelete.bind(thisComp)}/>}
                <div className='closeThis' onClick={this.props.close}>x</div>
            </div>
        );
    }
}