import { MovieItem } from "../../component/Movie/Movie.interface";
import { sortMovies } from "../sortMovies";
import { expect } from "@jest/globals";

const mockedData: MovieItem[] = [
  {
    id: 3,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: ["Drama"],
    rating: 9.3,
    actors: ["Tim Robbins", "Morgan Freeman"],
    plot: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://fakeimg.pl/220x310/ff0000",
    awards: "Nominated for 7 Oscars",
    language: "English",
  },
  {
    id: 1,
    title: "The Godfather",
    year: 1972,
    genre: ["Crime", "Drama"],
    rating: 9.2,
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster: "https://fakeimg.pl/220x310/ffff00",
    awards: "Won 3 Oscars",
    language: "English",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    rating: 9,
    actors: ["Christian Bale", "Heath Ledger", "Gary Oldman"],
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://fakeimg.pl/220x310/ff00ff",
    awards: "Won 2 Oscars",
    language: "English",
  },
];
describe("sortMovies", () => {
  test("sortMovies by id ", () => {
    expect(sortMovies(mockedData, "id")).toBe(
      mockedData.sort((a, b) => a.id - b.id)
    );
  });
  test("sortMovies year ", () => {
    expect(sortMovies(mockedData, "year")).toBe(
      mockedData.sort((a, b) => a.year - b.year)
    );
    expect(sortMovies(mockedData, "year", "dsc")).toBe(
      mockedData.sort((a, b) => b.year - a.year)
    );
  });
  test("Empty movies array", () => {
    expect(sortMovies([], "year")).toEqual([]);
  });
});
