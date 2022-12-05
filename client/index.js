import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import App from "./components/App";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const client = new ApolloClient({
  dataIdFromObject: o => o.id //o is short for object
  //takes every piece of data fetched from graphql and passes it thru this.
  //helps identify every piece of data in apollo store by id
});

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
