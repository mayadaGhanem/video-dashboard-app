export default function Search({
  onSearch,
  searchText,
}: {
  searchText: string;
  onSearch: (value: string) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    onSearch(newValue);
  }
  return (
    <label className="mx-auto mt-4 relative bg-white border-gray-400 min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">
      <input
        autoFocus={true}
        value={searchText}
        onChange={handleChange}
        id="search-bar"
        placeholder="your movie name"
        className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
      />
    </label>
  );
}
