import { sortMovies } from "Helpers/sortMovies";
import { MovieItem } from "../Movie/Movie.interface";
import Statistics from "./Statistics";

interface Accumulator {
  nominated: { x: string; y: number; oscar: string }[];
  wins: { x: string; y: number; oscar: string }[];
}

export default function OscarStatistics({ data }: { data: MovieItem[] }) {
   const sortedDataAsc = sortMovies(data, "year");

  const result = sortedDataAsc?.reduce<Accumulator>(
    (accumulator, _movie) => {
      const year = _movie.year;
      const oscar = _movie.awards;
      const title = _movie.title;
 
      if (oscar.includes("Nominated")) {
        accumulator.nominated.push({ x: title, y: year, oscar });
      } else {
        accumulator.wins.push({ x: title, y: year, oscar });
      }

      return accumulator;
    },
    {
      nominated: [],
      wins: [],
    }
  );

  return (
    <div className="container  gap-4">
      <h1 className="statistics-title text-3xl font-bold text-center mb-8">
        Oscar Statistics Overview
      </h1>

      {/* Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="wins-chart rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-xl font-semibold text-center mb-4">
            Wins by Year
          </h2>
          <Statistics
          
            series={[
              {
                name: "Wins",
                data:result?.wins
              },
            ]}
          />
        </div>
          <div className="nominations-chart rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-xl font-semibold text-center mb-4">
          Nominations by Year
          </h2>
          <Statistics
            series={[
              {
                name: "Nominations",
                data:result?.nominated
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
