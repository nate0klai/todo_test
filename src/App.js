import React, { Component } from 'react';
import {TextField, Button} from './SimpleElems';
import Task from './Task';
import './style.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            thisTask:null,
            tasks:Object.values(localStorage).map(t=>JSON.parse(t)),
            mode:'all'
        };
    }
    closeTask(){
        this.setState({
            thisTask:null,
            tasks:Object.values(localStorage).map(t=>JSON.parse(t))
        });
    }
    render() {
        let thisComp = this, {window, tasks, mode, thisTask} = this.state;
        let task = '';
        let match = {
            'usual':'обычная',
            'impotant':'важная',
            'veryimpotant':'очень важная'
        }
        if (thisTask!=null) task = <Task task={thisTask} close={this.closeTask.bind(thisComp)}/>;
        console.log(this.state);
        console.log(new Date());
        if (mode!='all') tasks = tasks.filter(task=>task.status===mode);
        return (
            <div>
                {task}
                <select onChange={(e)=>{this.setState({mode:e.currentTarget.value});}}>
                    <option value='all'>все</option>
                    <option value='usual'>обычные</option>
                    <option value='impotant'>важные</option>
                    <option value='veryimpotant'>очень важные</option>
                </select>
                <Button value='new task' onClick={()=>{this.setState({thisTask:'newTask'})}}/>
                {
                    tasks.map((task, i)=>
                        <div key={i} className={(task.planFinish!='' && task.planFinish.replace(/[A-Z]/g,' ')<task.realFinish.replace(/[A-Z]/g,' '))?
                            'retarded':'notRetarded'}
                             onClick={(e)=>{this.setState({thisTask:tasks.filter((t)=>t.name===e.currentTarget.firstChild.innerText)[0]});}}>
                            <div className="taskProps">{task.name}</div>
                            <div className="taskProps">{task.description}</div>
                            <div className="taskProps">{task.planFinish.replace(/[A-Z]/g,' ')}</div>
                            <div className="taskProps">{task.realFinish.replace(/[A-Z]/g,' ')}</div>
                            <div className="taskProps">{match[task.status]}</div>
                        </div>)
                }
            </div>
        );
    }
}
