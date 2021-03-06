import React, {PropTypes} from 'react';
import { DropTarget } from 'react-dnd';
import { RIEInput } from 'riek';
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
        addNewCard: PropTypes.func,
        cards: PropTypes.array,
        filter: PropTypes.string,
        onTitleChanged: PropTypes.func,

        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired,
    };

    render() {
        const {title, cards, filter, addNewCard, connectDropTarget, isOver, canDrop, onTitleChanged} = this.props;

        const isActive = canDrop && isOver;

        let backgroundColor = '#E2E4E6';
        if (isActive) {
            backgroundColor = '#8ac17c';
        } else if (canDrop) {
            backgroundColor = '#f9dd4d';
        }

        let rows = [];

        cards.forEach((c, index) => {
            const titleLC = c.title.toLowerCase();
            const filterLC = filter.toLowerCase();

            if (titleLC.indexOf(filterLC) !== -1) {
                rows.push(
                    <CardContainer key={index} id={c.id}/>
                );
            }
        });

        return connectDropTarget(
            <div className="CardList" style={{backgroundColor}}>
                <div className="CardList-title">
                    <RIEInput
                        className="CardList-title-inline"
                        value={title}
                        change={onTitleChanged}
                        classEditing="editing"
                        propName="title"/>
                </div>
                { rows }
                <a href="#" className="Cardlist-addCard" onClick={addNewCard}>Add a card...</a>
            </div>
        );
    }
}

export default DropTarget(ItemTypes.CARD, cardTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(CardList);
