import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import * as actions from '../actions';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import CardListContainer from '../containers/CardListContainer';
import '../styles/BoardContainer.scss';


const BoardContainer = ({lists, addNewList}) => {
    return (
        <div className="BoardContainer">
            <Header onAddNewList={addNewList}/>
            <div className="CardListsContainer">
                {lists.map((value, index) => <CardListContainer id={index} key={index}/>, )}
            </div>
        </div>
    );
};

BoardContainer.propTypes = {
    lists: PropTypes.array,
    addNewList: PropTypes.func,
    addNewCard: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewList: () => dispatch(actions.addNewList())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer);
