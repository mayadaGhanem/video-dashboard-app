import { MovieItem } from "Component/Movie/Movie.interface";

export default function LeaderboardCard({
  item,
  index,
}: {
  item: MovieItem;
  index: number;
}) {
  return (
    <li
      className={`leaderboard-item flex items-center py-4 px-6 hover:bg-gray-200`}
      key={item.id}
    >
      <span className="text-gray-700 text-lg font-medium mr-4">
        {index + 1} .
      </span>
      <img
        className="w-12 h-12 rounded-full object-cover mr-4"
        src={item.poster}
        alt="User avatar"
      />
      <div className="flex-1">
        <div className="flex-1 flex justify-between">
          <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
          <p className="text-gray-600 text-base">{item.rating} </p>
        </div>
        <p className="text-gray-600 text-base">{item.actors.join(" , ")} </p>
      </div>
    </li>
  );
}
