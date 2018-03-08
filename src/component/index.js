import React, { Component } from 'react';
import Timer from './timer';
import TodoApp from './todo'
import TextareaComponent from './textarea';
import Element from './formatname';




class Person extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"DOG" }
    }
    render() { 
        return (
        <div>
            <h1>welcome ! {this.props.name}</h1> 
            <Timer name="sk"/>
            <TodoApp/>
            <TextareaComponent/>
            <Element name="jyothi"/>
        </div>
    )
    }
}
 
export default Person;