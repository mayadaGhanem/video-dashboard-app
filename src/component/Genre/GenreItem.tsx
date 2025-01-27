import Chip from "Component/Shared/Chip";

export default function GenreItem({ title }: { title: string }) {
  const chipColors: { [key: string]: string } = {
    Crime: "bg-red-500",
    Drama: "bg-purple-500",
    Action: "bg-blue-500",
    Romance: "bg-pink-500",
    Adventure: "bg-yellow-500",
    "Sci-Fi": "bg-teal-500",
    Fantasy: "bg-indigo-500",
    Animation: "bg-orange-500",
    History: "bg-green-500",
    War: "bg-red-900",
    Mystery: "bg-blue-900",
    Thriller: "bg-orange-900",
  };
  
  const currentChip: string = chipColors[title];
  return (
    <Chip className={`${currentChip}`}>
      <span className="block text-sm font-medium text-white">{title}</span>
    </Chip>
  );
}
