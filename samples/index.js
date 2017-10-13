'use strict';

import { createStore, combineReducers } from 'redux';
import { add, rmv, tgl, visblFilter } from './actions';
import { showAll, showAct, showSuc } from './filters';
import { prHigh, prMedium, prLow } from './priorities';
import * as reducers from './reducers';


const mainApp = combineReducers(reducers);

let store = createStore(mainApp, { visibility: showAll, todoList: [] });
console.log(store.getState());
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
store.dispatch( { type: tgl, index: 0, priority: prMedium } );

export default store;