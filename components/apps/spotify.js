import React from "react";

export default function Spotify() {
  return (
    <iframe
      src="https://open.spotify.com/embed-legacy/playlist/0eDTiTEalJcs96uae8Neoj"
      frameBorder="0"
      title="Spotify"
      className="h-full w-full bg-ub-cool-grey"
    ></iframe>
  );
}

export const displaySpotify = () => {
  <Spotify> </Spotify>;
};
