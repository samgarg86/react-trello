import React, {PropTypes} from 'react';
import * as actions from '../actions';
import Card from '../components/Card';
import {connect} from 'react-redux';

const CardContainer = ({card, onDroppedCard, onCardTitleChanged}) => {
    return <Card id={card.id} title={card.title} onDropped={onDroppedCard} onTitleChanged={onCardTitleChanged}/>;
};

CardContainer.propTypes = {
    card: PropTypes.object,
    onDroppedCard: PropTypes.func,
    onCardTitleChanged: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    return {
        card: state.cards[ownProps.id]
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDroppedCard: (cardId, listId) => dispatch(actions.moveCard(cardId, listId)),
        onCardTitleChanged: (cardId, newTitle) => dispatch(actions.changeCard(cardId, newTitle))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardContainer);
