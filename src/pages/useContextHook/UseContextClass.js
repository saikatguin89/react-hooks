import React,{Component} from 'react';
import {DataContext} from './DataContext'

class UseContextClass extends Component{
    static contextType=DataContext;
    render(){
        return (
            <div>
                UseContextClass : {this.context.theamColor}
            </div>
        );
    }
}
export default UseContextClass;