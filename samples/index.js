import { createStore } from 'redux';
import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO, VisibilityFilters } from './actions';


let initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};


function todos(state = [], action) {

}

function todoApp(state = initialState, action) {

    switch (action.type) {

        case SET_VISIBILITY_FILTER: {
            return Object.assign( {},
                state,
                { visibilityFilter: action.filter }
            )
        }

        case ADD_TODO: {
            return Object.assign( {},
                state,
                {
                    todos: [ ...state.todos, { text: action.text, completed: false } ]
                }
            )
        }

        case TOGGLE_TODO: {
            return Object.assign( {}, state,
                {
                    todos: state.todos.map( (item, index) => {
                        if( index === action.index ) {
                            return Object.assign( {},
                                item,
                                {
                                    completed: !item.completed
                                }
                            )
                        }
                        return item
                    } )
                }
            )
        }

        default: return state;
    }
}

let store = createStore( todoApp );

store.subscribe( function () {
    console.log( store.getState() )
} );


store.dispatch( { type: ADD_TODO, text: 'Lift It Up!' } );
store.dispatch( { type: SET_VISIBILITY_FILTER, filter: VisibilityFilters.SHOW_ACTIVE } );
store.dispatch( { type: ADD_TODO, text: 'Bring It Up!' } );
store.dispatch( { type: TOGGLE_TODO, index: 1 } );
store.dispatch( { type: TOGGLE_TODO, index: 0 } );