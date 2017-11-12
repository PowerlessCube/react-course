import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// Old way
class OldSyntax {
    constructor() {
        this.name = 'Alistair';
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
        return `Hi. My name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// New stuff
 class NewSyntax {
    name = 'Meryl';
    newGreeting = () => {
        return `Hi. My name is ${this.name}`;        
    }
 }

 const newSyntax = new NewSyntax();
 const newGreeting = newSyntax.newGreeting;
 console.log(newGreeting());

// 1. Easier to create a constructor.
// 2. Binding functions are taken care of.
