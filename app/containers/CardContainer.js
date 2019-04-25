import React, {PropTypes} from 'react';
import * as actions from '../actions';
import Card from '../components/Card';
import {connect} from 'react-redux';

const CardContainer = ({card, onDroppedCard, onCardTitleChanged, onCardBeginEdit}) => {
    return <Card {...card} onDropped={onDroppedCard} onTitleChanged={onCardTitleChanged} onCardBeginEdit={onCardBeginEdit}/>;
};

CardContainer.propTypes = {
    card: PropTypes.object,
    onDroppedCard: PropTypes.func,
    onCardTitleChanged: PropTypes.func,
    onCardBeginEdit: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    return {
        card: state.cards[ownProps.id]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDroppedCard: (cardId, listId) => dispatch(actions.moveCard(cardId, listId)),
        onCardTitleChanged: (cardId, newTitle) => dispatch(actions.changeCard(cardId, newTitle)),
        onCardBeginEdit: (cardId) => dispatch(actions.beginEditCard(cardId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardContainer);
