import React from "react";

function LyricList({ lyrics }) {
  const renderLyrics = () => {
    return lyrics.map(({ id, content }) => {
      return <li key={id}>{content}</li>;
    });
  };

  return <ul>{renderLyrics()}</ul>;
}
export default LyricList;
