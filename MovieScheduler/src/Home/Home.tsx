import React from "react";
import MovieBackground from "~/MovieBackground/MovieBackground";
import MoviePoster from "~/MoviePoster/MoviePoster";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <MovieBackground />
      <MoviePoster />
    </div>
  );
}

export default Home;
