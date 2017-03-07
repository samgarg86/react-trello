import React, {PropTypes} from 'react';
import { DropTarget } from 'react-dnd';
import InlineEdit from 'react-edit-inline';
import ItemTypes from '../ItemTypes';
import CardContainer from '../containers/CardContainer';
import '../styles/CardList.scss';

const cardTarget = {
    drop(props) {
        return { id: props.id };
    },
};

class CardList extends React.Component  {
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        onAddCard: PropTypes.func,
        cards: PropTypes.array,
        onTitleChanged: PropTypes.func,

        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        this.dataChanged = this.dataChanged.bind(this);
    }

    dataChanged(data) {
        this.setState({...data});
        this.props.onTitleChanged(this.props.id, data.title);
    }

    render() {
        const {title, cards, onAddCard, connectDropTarget, isOver, canDrop} = this.props;

        const isActive = canDrop && isOver;

        let backgroundColor = '#E2E4E6';
        if (isActive) {
            backgroundColor = '#8fc14d';
        } else if (canDrop) {
            backgroundColor = '#f9e43f';
        }
        return connectDropTarget(
            <div className="CardList" style={{backgroundColor}}>
                <div className="CardList-title">
                    <InlineEdit
                        className="CardList-title-inline"
                        activeClassName="editing"
                        editing
                        stopPropagation
                        text={title}
                        paramName="title"
                        change={this.dataChanged}
                    />
                </div>
                { cards.map((card, index) => <CardContainer key={index} id={card.id}/>, ) }
                <a href="#" className="Cardlist-addCard" onClick={onAddCard}>Add a card...</a>
            </div>
        );
    }
}

export default DropTarget(ItemTypes.CARD, cardTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(CardList);