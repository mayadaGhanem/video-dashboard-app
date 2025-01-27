import MovieCard from "Component/Movie/MovieCard";
import { MovieItem } from "./Movie.interface";

export default function MovieList({ movies }: { movies: MovieItem[] }) {
  return (
    <div className="grid grid-col-1 md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]  gap-4">
      {movies?.map((_movie) => (
        <MovieCard data={_movie} key={_movie.id} />
      ))}
    </div>
  );
}
