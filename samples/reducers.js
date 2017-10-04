import { add, rmv, tgl, visblFilter } from './actions';
import { showAll, showAct, showSuc } from './filters';
import { prHigh, prMedium, prLow } from './priorities';

export function visibility( state = showAll, action ) {
    switch (action.type) {
        case visblFilter: return action.filter;
        default: return state;
    }
}

export function todoList( state = [], action ) {
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