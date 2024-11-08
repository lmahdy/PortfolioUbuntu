import React from "react";

export default function Spotify() {
  return (
    <iframe
      src="https://open.spotify.com/embed/playlist/4EVYf9lKZidai6EPHDJt8I"
      frameBorder="0"
      title="Spotify"
      allow="encrypted-media"
      className="h-full w-full bg-ub-cool-grey"
    ></iframe>
  );
}

export const displaySpotify = () => {
  return <Spotify />;
};
