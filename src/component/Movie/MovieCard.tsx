import ShowMore from "Component/Shared/ShowMore";
import AwardSvg from "Svg/Award";
import GenreList from "Component/Genre/GenreList";
import { MovieItem } from "Component/Movie/Movie.interface";

export default function MovieCard({ data }: { data: MovieItem }) {
  const { poster, title, genre, year, plot, rating, awards } = data;
  return (
    <div className="py-3 sm:max-w-xl">
      <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-4 flex space-x-8">
        <div className="min-h-48 overflow-visible w-1/2">
          <img className="rounded-3xl shadow-lg" src={poster} alt="" />
        </div>
        <div className="flex flex-col w-1/2  md:space-y-4 space-y-0.5">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-bold line-clamp-2">{title}</h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2 min-w-10 text-center">
              {rating}
            </div>
          </div>
          <GenreList genre={genre} />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-yellow-400">
                <AwardSvg />
              </div>
              <span className="text-grey-400 text-xs">{awards}</span>
            </div>
            <div className="text-lg text-grey-800 py-0.5">{year}</div>
          </div>
          <ShowMore className="text-grey-400 line-clamp-2 text-xs py-0.5">
            {plot}
          </ShowMore>

        </div>
      </div>
    </div>
  );
}
