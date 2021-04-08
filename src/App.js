import './App.scss';
import './index.scss';
import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";

import PostListView from "./view/PostListView";
import PostView from "./view/PostView";
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PostListView}/>
                    <Route exact path="/post/:id" component={PostListView}/>
                    <Route path="/post" component={PostView}/>
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}



export default App;