import React, { Component }  from 'react';
import { render } from 'react-dom'

function Geet(props) {
    if (props.logstatus) return <div>Hello, user!</div>;
    return <div>Please Sign Up or Sign In</div>
}
function LoginButton(props) {
    return <button onClick={props.onClick}>Please Log In</button>
}
function LogOutButton(props) {
    return <button onClick={props.onClick}>Log Out</button>
}
/*function RegLink(props) {
    if( props.logstatus ) return null;
    return <a href="/registration">registration</a>
}*/


class RegLink extends Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        console.log('update');
    }
    componentDidMount() {
        console.log('Mount');
    }
    render() {
        if( this.props.logstatus ) return null;
        return <a href="/registration">registration</a>
    }
}

class SignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logstatus: false
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    render() {
        let logstatus = this.state.logstatus;
        let button = null;

        if (logstatus)
            button = <LogOutButton onClick={ this.logout }/>;
        else button = <LoginButton onClick={ this.login }/>;

        return (
            <div>
                <Geet logstatus={ this.state.logstatus } />
                { button }
                <br/>
                <RegLink logstatus={ this.state.logstatus } />
            </div>
        );
    }
    login() {
        this.setState( prevState => ({ logstatus: !prevState.logstatus }) );
    }
    logout() {
        this.setState( function(prevState) { return { logstatus: !prevState.logstatus } }  );
    }
}

render( <SignForm />, document.getElementById('root') );
