import { useQuery } from "react-query";
import { GET_MOVIES_URL } from "../constant/service";
import MovieList from "Component/Movie/MovieList";
import Statistics from "Component/Statistics/OscarStatistics";
import Loading from "Component/Shared/Loading";
import Leaderboard from "Component/Leaderboard/Leaderboard";
import Filter from "Component/Filters/Search";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import Error from "Component/Shared/Error";

const retrieveMovies = async (searchText: string) => {
  const response = await fetch(
    searchText ? GET_MOVIES_URL + `?search=${searchText}` : GET_MOVIES_URL
  );
  const res = await response.json();
  return res;
};

export default function Movies() {
  const [searchText, setSearchText] = useState("");
  const debouncedFilter = useDebounce(searchText, 500);
  const { data, isLoading, error } = useQuery(
    ["movies", debouncedFilter],
    () => retrieveMovies(debouncedFilter)
  );

  function onSearch(value: string) {
    setSearchText(value);
  }
  if (isLoading) {
    return <Loading />;
  }
  if (error && !isLoading) {
    return <Error />;
  }
  if (data && !isLoading && !error) {
    return (
      <div className="space-y-8 mx-auto">
        <Filter onSearch={onSearch} searchText={searchText} />
        <Statistics data={data} />
        <Leaderboard movies={data} />
        <MovieList movies={data} />
      </div>
    );
  }
}
