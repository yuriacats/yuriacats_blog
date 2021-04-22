import './App.scss';
import './index.scss';
import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";

import PostListView from "./view/PostListView";
import PostView from "./view/PostView";
import EditorView from "./view/EditorView";
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/post/:id" component={PostView}/>
                    <Route exact path="/" component={PostListView}/>
                    <Route exact path="/edit" component={EditorView}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        );
    }
}



export default App;