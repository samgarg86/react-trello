import React, {PropTypes} from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../ItemTypes';
import { RIEInput } from 'riek';
import '../styles/Card.scss';

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id
        };
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        // When dropped on a compatible target, do something
        const draggedCard = monitor.getItem();
        const dropList = monitor.getDropResult();
        props.onDropped(draggedCard.id, dropList.id);
    }
};

/**
 * Specifies the props to inject into your component.
 */
const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};

class Card extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        onDropped: PropTypes.func,
        onTitleChanged: PropTypes.func,
        onCardBeginEdit: PropTypes.func,

        // Injected by React DnD:
        isDragging: PropTypes.bool.isRequired,
        connectDragSource: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.dataChanged = this.dataChanged.bind(this);
    }

    dataChanged(data) {
        // Todo: Find a better way to do this
        this.setState({...data});
        this.props.onTitleChanged(this.props.id, data.title);
    }

    render() {
        const { title, connectDragSource, isDragging, onCardBeginEdit } = this.props;
        return connectDragSource(
            <div className="Card" style={{opacity: isDragging ? 0.5 : 1}}>
                <div className="Card-title">
                    <RIEInput
                        className="Card-title-inline"
                        value={title}
                        change={this.dataChanged}
                        beforeStart={onCardBeginEdit}
                        classEditing="editing"
                        propName="title"/>
                </div>
            </div>
        );
    }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
