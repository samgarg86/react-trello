import React, {PropTypes} from 'react';
import * as actions from '../actions';
import Filter from '../components/Filter';
import {connect} from 'react-redux';

const FilterContainer = ({onFilterChange, filter}) => {
    return <Filter onFilterChange={onFilterChange} filter={filter}/>;
};

FilterContainer.propTypes = {
    onFilterChange: PropTypes.func,
    filter: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterChange: (filterText) => dispatch(actions.filterCards(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterContainer);
