import React, { Component }  from 'react';
import { render } from 'react-dom'



function HelloUser() {
    return <div>Hello, User</div>
}
function SignUpIn() {
    return <div>Please Sign Up or Sign In</div>
}



class SignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }; // prevState setState()
    }
    render() {
        return (
            <form action="/">
                <Geet params={this.props} onClick={this.handleClick} />
            </form>
        )
    }
    handleClick() {
        alert(1)
    }
}

render( <SignForm logstatus={ false } data={ { name: 'John' } } />, document.getElementById('root') );
