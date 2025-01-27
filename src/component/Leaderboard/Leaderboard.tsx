import { MovieItem } from "Component/Movie/Movie.interface";
import LeaderboardCard from "./LeaderboardCard";
import { sortMovies } from "Helpers/sortMovies";

export default function Leaderboard({ movies }: { movies: MovieItem[] }) {
  const sortedDataDsc = sortMovies(movies, "rating",'dsc').splice(0, 5);

  return (
    <div className="leaderboard-container bg-white shadow-md rounded-md overflow-hidden max-w-screen mx-auto mt-16">
      <div className="bg-gray-100 py-2 px-4">
        <h2 className="text-xl font-semibold text-gray-800">Top 5 Movies</h2>
      </div>
      <ul className="leaderboard-list divide-y divide-gray-200">
        {sortedDataDsc.map((_movie, index) => (
          <LeaderboardCard item={_movie} index={index} key={_movie.id} />
        ))}
      </ul>
    </div>
  );
}
