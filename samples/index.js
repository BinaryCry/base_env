import { createStore } from 'redux';

// filters
const showAll = 'SHOW_ALL';
const showAct = 'SHOW_ACTIVE';
const showSuc = 'SHOW_SUCCESS';

// actions
const add = 'ADD_TODO_ITEM';
const rmv = 'REMOVE_TODO_ITEM';
const tgl ='TOGGLE_TODO_ITEM';
const visblFilter ='SET_VISIBILITY_FILTER';

let initialState = {
    visibility: showAll,
    todoList: [] // { text, priority }
};

function mainApp( state = initialState, action ) {

    switch (action.type) {
        case visblFilter: return Object.assign( {},
            {
                visibility: action.filter,
                todoList: state.todoList
            }
        );

        case add: return  Object.assign( {},
            {
                visibility: state.visibility,
                todoList: [...state.todoList, { text: action.text, priority: action.priority ? action.priority : 'medium' } ]
            }
        );

        case rmv:
            let tempArr = [];
            for ( let i=0; i< state.todoList.length; i++ ) {
                if( i !== action.index ) tempArr.push(state.todoList[i]);
            }
            return Object.assign( {},
            {
                visibility: state.visibility,
                todoList: tempArr
            }
        );
        case tgl:


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
store.dispatch( { type: add, text: 'Lift It Left!', priority: 'high' } );
store.dispatch( { type: rmv, index: 0 } );
store.dispatch( { type: rmv, index: 1 } ); // indexes will be changed after nex iteration

