import './App.scss';
import './index.scss';
import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";

import PostListView from "./view/PostListView";
import PostView from "./view/PostView";
import EditorView from "./view/EditorView";
import PortfolioView from "./view/PortfolioView";
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/post/:id/edit" component={EditorView}/>
                    <Route path="/post/:id" component={PostView}/>
                    <Route exact path="/" component={PostListView}/>
                    <Route exact path="/edit" component={EditorView}/>
                    <Route exact path="/portfolio" component={PortfolioView}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        );
    }
}



export default App;
