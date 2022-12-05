import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import fetchSongs from "../queries/fetchSongs";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  onSubmit(event) {
    event.preventDefault();
    //passes the parameter object to the mutation below
    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query: fetchSongs, variables: {} }],
      }) //will tell graphql to run these queries after mutating
      .then((res) => {
        console.log("Saved", this.state.title);
        this.setState({ title: "" });
        hashHistory.push("/");
      });
  }

  render() {
    return (
      <div className="container">
        <Link to="/">
          <h3>Lyrical</h3>
        </Link>
        <div className="container">
          <Link to="/" className="btn red right">
            Back
          </Link>
          <h4>Create a New Song</h4>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Song Title:</label>
            <input
              onChange={(event) => this.setState({ title: event.target.value })}
              value={this.state.title}
            />
          </form>
        </div>
      </div>
    );
  }
}

//Exposes a mutation, "AddSong", that takes in a parameter title of type string that gets
//  passed to the actual graphql mutation within the function
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

//this HOC binds the mutation to the component accessible as this.props.mutate()
export default graphql(mutation)(SongCreate);
