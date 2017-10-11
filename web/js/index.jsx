import React, { Component }  from 'react';
import { render } from 'react-dom'


let posts = [
    {
        id: 765,
        title: 'Title 1',
        thumb: '/img/Doc.jpg',
    },
    {
        id: 321,
        title: 'Title 2',
        thumb: '/img/Rocky.png',
    }
];


function PostImg(props) {
    return <img src={props.src} alt=""/>
}

function Post(props) {
    return (
        <li>
            <p>{props.data.title}</p>
            <div>
                <PostImg src={props.data.thumb} />
            </div>
        </li>
    )
}

class News extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let posts = this.props.data.map( item => <Post key={ item.id } data={ item } /> );

        return (
            <ul>
                { posts }
            </ul>
        )

    }
}



render( <News data={ posts } />, document.getElementById('root') );
