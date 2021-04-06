import './App.scss';
import './index.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PostListView from "./view/PostListView";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PostListView}/>
                </Switch>
            </BrowserRouter>
        );
    }
}



export default App;