'use strict';

import React, { Component }  from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import { createStorage } from 'redux'
import { connect } from 'react-redux'

const myToggler = function (state, type) {
    switch(type) {
        case 'TOGGLE': let current = state.checked; return !current;
        default : return state
    }
};

const mapStateToProps = (state) => {
    return myToggler(state, type)
};
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
        this.toggleChB = this.toggleChB.bind(this);
    }
    toggleChB(syntEvent) {
        let target = syntEvent.target;
        this.setState({checked: target.checked });
    }
    render() {
        return <input type="checkbox" onChange={this.toggleChB} checked={this.state.checked} />
    }
    componentDidUpdate() {
        console.log(this.state.checked);
    }
}

render( <Toggler />, document.getElementById('root') );




let range = {
    from: 1,
    to: 11,

    [Symbol.iterator]() {

        let current = this.from;
        let last = this.to;

        return {
            next() {

                if (current <= last) {
                    return {
                        done: false,
                        value: current++
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
};

//iterators
/*for(let num of range) {
    console.log(num);
}
console.log( Math.max(...range) );*/

/*let arr = [1,2,3,4,5];

const iterator = arr[Symbol.iterator]();

while(true) {
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value);
}*/

//generators
function* genRandom() {
    let min = 1;
    let max = 10;
    yield Math.floor(Math.random() * (max - min)) + min;
    yield Math.floor(Math.random() * (max - min)) + min;
    return Math.floor(Math.random() * (max - min)) + min;
}

let generator = genRandom();
console.log( generator.next() )
console.log( generator.next() )
console.log( generator.next() )
console.log( generator.next() )