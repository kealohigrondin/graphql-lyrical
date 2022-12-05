import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongDetail from "../queries/fetchSongDetail";

function SongDetail({ data }) {
  console.log(data);

  return data.song ? (
    <div className="container">
      <Link to="/">
        <h3>Lyrical</h3>
      </Link>
      <div className="container">
        <h4>Song Details</h4>
        <h5>{data.song.title}</h5>
        <h6>{data.song.id}</h6>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
}

export default graphql(fetchSongDetail, {
  options: (props) => {
    //passes param 'id' to fetchSongDetail
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
