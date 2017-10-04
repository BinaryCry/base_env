import React  from 'react';
import { render } from 'react-dom'

console.log(React);


class News extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello, User!</h1>
            </div>
        )
    }
}

render(<News />, document.getElementById('root'));

