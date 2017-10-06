import React  from 'react';
import { render } from 'react-dom'

function retElem() {
    return <div>Function which returns simple element</div>
}
function GeetBlock(props) {
    return props.name && typeof props.name === 'string' ? <h2>Hello, { props.name }</h2> : '';
}


class News extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{ React.version }</h1>
                <GeetBlock name="John" />
                { retElem() }
            </div>
        )
    }
}

render(<News />, document.getElementById('root'));

