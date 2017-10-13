import React, { Component }  from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Geet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <p>Hello, {this.props.user}</p>
    }
    foo() {

    }
}
Geet.propTypes = {
    user: PropTypes.string,
    foo: PropTypes.func.isRequired
};

render(<Geet user={1} />, document.getElementById('root'));