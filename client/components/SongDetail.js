import React from "react";
import fetchSongDetail from "../queries/fetchSongDetail";

function SongDetail(props) {
  return <div>Song Details</div>;
}

export default graphql(fetchSongDetail)(SongDetail);
