import GenreItem from "./GenreItem";

export default function GenreList({ genre }: { genre: string[] }) {
  return (
    <div className="flex flex-wrap gap-1 xs:gap-0.5">
      {genre.map((title) => (
        <GenreItem title={title} key={title}/>
      ))}
    </div>
  );
}
