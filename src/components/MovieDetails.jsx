import React, { useEffect, useState } from "react";
import movieCollection from "../data";
import { useParams } from "react-router-dom";
import { Card } from "antd";

const { Meta } = Card;

const MovieDetails = () => {
  const { movId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const findMovieById = () => {
    let movie = movieCollection.find((item) => item.id === Number(movId));
    setMovie(movie);
    return movie;
  };

  // useeffect to return the movie

  useEffect(() => {
    findMovieById();
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <h3>Getting Movie Info......</h3>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-2 my-10 flex justify-around items-center gap-1 py-4 shadow-xl">
      <div className="aspect-w-16 aspect-h-9">
        <h2 className="text-3xl font-bold mb-4">
          <Meta title={movie.title} />
        </h2>
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="w-[600px] mx-auto">
          {" "}
          <Meta description={movie.description} />
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
