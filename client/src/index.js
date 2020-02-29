import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import SearchResult from './containers/SearchResult';



const Home = () => {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/:speaker" component={SearchResult} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </Fragment>
    )
}

ReactDOM.render(<Home />, document.getElementById('root'));

