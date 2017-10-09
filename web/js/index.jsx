import React  from 'react';
import { render } from 'react-dom'

function retElem() {
    return <div>Function which returns simple element</div>
}
function GeetBlock(props) {
    return props.name && typeof props.name === 'string' ? <h2 onClick={props.handler}>Hello, { props.name }</h2> : '';
}


class News extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {
        alert('handlerClick');
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1>{ React.version }</h1>
                <GeetBlock name="John" handler={this.handlerClick} />
                { retElem() }
            </div>
        )
    }
}

render(<News />, document.getElementById('root'));

