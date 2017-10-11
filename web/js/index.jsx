import React, { Component }  from 'react';
import { render } from 'react-dom'




class UppCase extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.change = this.change.bind(this);
    }

    change(event) {
        let originalKeyValue = event.target.value[event.target.value.length-1];

        let originalValue = event.target.value;
        this.setState( { value: originalValue } );
        setTimeout(function () {
            this.setState( { value: originalValue.toUpperCase() } );
        }.bind(this), 250);

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
