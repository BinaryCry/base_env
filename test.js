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
