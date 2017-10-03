import fetch from 'node-fetch';
import { createStore } from 'redux';

function playlist(state = ['Kampfbereit'], action) {
    switch (action.type) {
        case 'ADD' : return [...state, action.data]; break;
        default: return state;
    }
}

let store = createStore( playlist );



store.subscribe( () => {
    console.log( store.getState() );
} );

store.dispatch( { type: 'ADD', data: 'Alle Lust Will Ewigkeit' } );


// Array.prototype.reduce
let forSumm = [1,2,3,4,5];
let summRes = forSumm.reduce( (a,b,c,d)=> {  let summ = a+b; console.log(summ); return summ;  }, 0 );
console.log(summRes);

/*
forSumm.reduce((a,b,c,d) => {
    console.log(b)
    console.log(a)
}, 0);
*/


const getUser = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await response.json();
};

/*(async () => {
    try {
        let user = await getUser(10);
        console.log(user.name);
        console.log(user.company.name);
    } catch(err) {
        throw new Error(`Can't get data from server\n--> ${err}`);
    }
})();*/
// main();


class Serv {
    constructor(url) {
        this.url = url;
    }
    async getUser(id) {
        try {
            let response = await fetch(`${this.url}${id}`);
            return await response.json();
        } catch(err){
            throw new Error(`Can't get data from server\n--> ${err}`);
        }
    }
    async main() {
        try {
            let user = await this.getUser(10);
            console.log(user.name);
            console.log(user.company.name);
        } catch(err) {
            console.log(err)
        }
    }
}

const userService = new Serv('https://jsonplaceholder.typicode.com/users/');
userService.main();

