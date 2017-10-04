import { createStore } from 'redux';
import { add, rmv, tgl, visblFilter } from './actions';

// filters
const showAll = 'SHOW_ALL';
const showAct = 'SHOW_ACTIVE';
const showSuc = 'SHOW_SUCCESS';

// priorities
const prHigh = 'PRIORITY_HIGH';
const prMedium = 'PRIORITY_MEDIUM';
const prLow = 'PRIORITY_LOW';

let initialState = {
    visibility: showAll,
    todoList: [] // { text, priority }
};


function visibilityToggler( state, action ) {
    switch (action.type) {
        case visblFilter: return Object.assign( {},
            {
                visibility: action.filter,
                todoList: state.todoList
            }
        );
    }

}

function todoListItemHAndlers( state = [], action ) {
    switch (action.type) {
        case add: return [...state.todoList, { text: action.text, priority: action.priority ? action.priority : prMedium } ];
        case rmv:
            let tempArr = [];
            for ( let i=0; i< state.todoList.length; i++ ) {
                if( i !== action.index ) tempArr.push(state.todoList[i]);
            }
            return tempArr;
        case tgl:
            return state.todoList.map( (item, index) => {
                if( index === action.index ) {
                    item.priority = action.priority;
                    return item;
                } else return item;
            } );
        default: return state;
    }
}

function mainApp( state = initialState, action ) {
    switch (action.type) {
        case visblFilter: return visibilityToggler(state, action);
        case add:
        case rmv:
        case tgl:
            return  Object.assign( {},
            {
                visibility: state.visibility,
                todoList: todoListItemHAndlers( state, action )
            }
        );
        default: return state;
    }
}

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

