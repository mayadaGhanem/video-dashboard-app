import { MovieItem } from "../component/Movie/Movie.interface";

export function sortMovies(
  movies: MovieItem[],
  key: keyof MovieItem,
  sortBy: "asc" | "dsc" = "asc"
) {
  return movies.sort((a: MovieItem, b: MovieItem) => {
    const firstValue = sortBy === "asc" ? a[key] : b[key];
    const secondValue = sortBy === "asc" ? b[key] : a[key];

    if (typeof firstValue === "string" && typeof secondValue === "string") {
      return firstValue.localeCompare(secondValue); // String comparison
    }

    if (typeof firstValue === "number" && typeof secondValue === "number") {
      return firstValue - secondValue; // Numeric comparison
    }
    return 0; // If the types are not handled, no sorting
  });
}
