export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export function addNewList(title = 'Type List Name') {
    return {
        type: 'ADD_NEW_LIST',
        title
    };
}

export const CHANGE_LIST_TITLE = 'CHANGE_LIST_TITLE';
export function changeListTitle(id, title) {
    return {
        type: 'CHANGE_LIST_TITLE',
        id, title
    };
}

export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export function addNewCard(listId, title = 'What is this card about? ') {
    return {
        type: 'ADD_NEW_CARD',
        listId, title
    };
}

export const MOVE_CARD = 'MOVE_CARD';
export function moveCard(cardId, newListId) {
    return {
        type: 'MOVE_CARD',
        cardId, newListId
    };
}

export const CHANGE_CARD = 'CHANGE_CARD';
export function changeCard(cardId, newTitle) {
    return {
        type: 'CHANGE_CARD',
        cardId, newTitle
    };
}

export const FILTER_CARDS = 'FILTER_CARDS';
export function filterCards(filter) {
    return {
        type: 'FILTER_CARDS',
        filter
    };
}
