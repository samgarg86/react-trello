import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as actions from '../actions/index';


const lists = (state = [], action) => {
    let newState = state.slice();
    switch (action.type) {
        case actions.ADD_NEW_LIST:
            return [...state,
                {id: state.length, title: action.title}];
        case actions.CHANGE_LIST_TITLE:
            const listToChange = state[action.id];
            newState[action.id] = Object.assign({}, listToChange, {title: action.title});
            return newState;
        default:
            return state;
    }
};

const cards = (state = [], action) => {
    let newState = state.slice();
    switch (action.type) {
        case actions.ADD_NEW_CARD:
            return [...state, {id: state.length, title: action.title, listId: action.listId}];
        case actions.MOVE_CARD:
            const cardToMove = state[action.cardId];
            newState[action.cardId] = Object.assign({}, cardToMove, {listId: action.newListId});
            return newState;
        case actions.BEGIN_EDIT_CARD:
            const cardToEdit = state[action.cardId];
            newState[action.cardId] = Object.assign({}, cardToEdit, {title: ''});
            return newState;
        case actions.CHANGE_CARD:
            const cardToChange = state[action.cardId];
            newState[action.cardId] = Object.assign({}, cardToChange, {title: action.newTitle});
            return newState;
        default:
            return state;
    }
};

const filter = (state = '', action) => {
    switch (action.type) {
        case actions.FILTER_CARDS:
            return action.filter;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    lists,
    cards,
    filter,
    routing
});

export default rootReducer;
