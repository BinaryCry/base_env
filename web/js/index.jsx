import React, { Component }  from 'react';
import { render } from 'react-dom'




class UppCase extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.change = this.change.bind(this);
    }

    change(event) {
        let originalValue = event.target.value.toUpperCase();
        setTimeout(function () {
            console.log(value);
        }, 250);
        this.setState( { value: originalValue } );
    }

    formSubmit(event) {
        alert(`Now in state: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form action="/" onSubmit={this.formSubmit}>
                <input type="text" onChange={this.change} value={this.state.value} />
                <input type="submit" value='Send' />
            </form>
        )
    }
}




render( <UppCase />, document.getElementById('root') );
