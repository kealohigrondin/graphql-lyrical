import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongDetail from "../queries/fetchSongDetail";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

function SongDetail({ data, params }) {
  console.log(data);

  return data.song ? (
    <div className="container">
      <Link to="/">
        <h3>Lyrical</h3>
      </Link>
      <div className="container">
        <section style={{ paddingBottom: "5em" }}>
          <h4>Song Details</h4>
          <hr />
          <h5>{data.song.title}</h5>
          <h6>ID: {data.song.id}</h6>
          <LyricList lyrics={data.song.lyrics} />
        </section>
        <section>
          <h4>Add a Lyric</h4>
          <hr />
          <LyricCreate songId={params.id} />
        </section>
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
