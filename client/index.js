import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import App from "./components/App";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const client = new ApolloClient({});

const Root = () => {
  return (
    // client is the apollo client
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
        </Route>
        <Route path="song/new" component={SongCreate} />
        <Route path="song/:id" component={SongDetail} />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
