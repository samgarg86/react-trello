import React, {PropTypes} from 'react';
import * as actions from '../actions';
import CardList from '../components/CardList';
import {connect} from 'react-redux';

const CardListContainer = ({id, title, cards, filter, addNewCard, onListTitleChanged}) => {
    return <CardList id={id} title={title} cards={cards} filter={filter} addNewCard={addNewCard} onTitleChanged={onListTitleChanged} />;
};

CardListContainer.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    cards: PropTypes.array,
    filter: PropTypes.string,
    addNewCard: PropTypes.func,
    onListTitleChanged: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    const cardList = state.lists[ownProps.id];
    return {
        id: ownProps.id,
        title: cardList.title,
        cards: state.cards.filter(card => card.listId === ownProps.id),
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewCard: () => dispatch(actions.addNewCard(ownProps.id)),
        onListTitleChanged: (newTitle) => dispatch(actions.changeListTitle(ownProps.id, newTitle.title))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardListContainer);
