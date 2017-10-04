import { createStore, combineReducers } from 'redux';
import { add, rmv, tgl, visblFilter } from './actions';

// filters
const showAll = 'SHOW_ALL';
const showAct = 'SHOW_ACTIVE';
const showSuc = 'SHOW_SUCCESS';

// priorities
const prHigh = 'PRIORITY_HIGH';
const prMedium = 'PRIORITY_MEDIUM';
const prLow = 'PRIORITY_LOW';

/*let initialState = {
    visibility: showAll,
    todoList: [] // { text, priority }
};*/


function visibilityToggler( state = showAll, action ) {
    switch (action.type) {
        case visblFilter: return action.filter;
        default: return state;
    }
}

function todoListItemHAndlers( state = [], action ) {
    switch (action.type) {
        case add: return [...state, { text: action.text, priority: action.priority ? action.priority : prMedium } ];
        case rmv:
            let tempArr = [];
            for ( let i=0; i< state.length; i++ ) {
                if( i !== action.index ) tempArr.push(state[i]);
            }
            return tempArr;
        case tgl:
            return state.map( (item, index) => {
                if( index === action.index ) {
                    item.priority = action.priority;
                    return item;
                } else return item;
            } );
        default: return state;
    }
}

/*function mainApp( state = {}, action ) {
    return {
        visibility: visibilityToggler(state.visibility, action),
        todoList: todoListItemHAndlers(state.todoList, action)
    };
}*/

const mainApp = combineReducers({
    visibility: visibilityToggler, // [visibility]: visibilityToggler(state.[visibility], action) // names are that same
    todoList: todoListItemHAndlers
});


let store = createStore(mainApp);
store.subscribe( function () {
    console.log(store.getState());
} );

store.dispatch( { type: visblFilter, filter: showAct } );
store.dispatch( { type: visblFilter, filter: showSuc } );
store.dispatch( { type: add, text: 'Lift It Up!' } );
store.dispatch( { type: add, text: 'Lift It Left!', priority: prHigh } );
store.dispatch( { type: rmv, index: 0 } );
// store.dispatch( { type: rmv, index: 0 } ); // indexes will be changed after nex iteration
store.dispatch( { type: tgl, index: 0, priority: prLow } );

