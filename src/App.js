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
                    <Route path="yuriacats_blog/post/:id" component={PostView}/>
                    <Route exact path="/yuriacats_blog" component={PostListView}/>
                    <Route exact path="yuriacats_blog/edit" component={EditorView}/>
                    <Redirect to="/yuriacats_blog"/>
                </Switch>
            </BrowserRouter>
        );
    }
}



export default App;
