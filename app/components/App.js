import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import '../styles/core/reset.scss';
import '../styles/App.scss';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

const App = ({ children }) =>
    <div className="AppContainer">
        { children }
        <footer className="App-footer">
            <Link to="/">Board</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default DragDropContext(HTML5Backend)(App);
