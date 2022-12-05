import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongs from "../queries/fetchSongs";
import deleteSong from "../queries/deleteSong";

function SongList({ data, mutate }) {
  const onSongDelete = ({ id, title }) => {
    console.log("Deleting", title, "with ID", id);
    mutate({ variables: { id } }).then(() => data.refetch());
    //use refetch when you need to reload data for associated with the
    // current component. Use refetchQueries option for refetching data
    // used in other components
    // ***** NOTE: mutate just deletes the song at the top of the list
    //             regardless of the id passed in
  };

  const renderSongs = () => {
    if (data.loading) {
      return <div>loading</div>;
    }
    return data.songs.map((song) => {
      return (
        <li
          key={song.id}
          className="collection-item"
          style={{ height: "60px" }}
        >
          {song.title}
          <button className="btn right" onClick={() => onSongDelete(song)}>
            <i className="material-icons">delete</i>
          </button>
        </li>
      );
    });
  };

  return (
    <div className="container">
      <h4>SongList</h4>
      <ul className="collection">{renderSongs()}</ul>

      <Link to="/song/new" className="btn red right">
        Add Song
      </Link>
    </div>
  );
}

export default graphql(deleteSong)(graphql(fetchSongs)(SongList));
//steps of loading:
//component renders without data
//graphql request is sent
//request returns data, component rerenders
