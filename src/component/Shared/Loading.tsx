export default function Loading() {
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Oscar Statistics Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <Statistics />
          <Statistics />
        </div>
      </div>
      <div className="grid  grid-col-1 md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]  gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

function MovieCard() {
  return (
    <div className="py-3 sm:max-w-xl ">
      <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-4 flex space-x-8">
        <div className="flex animate-pulse space-x-4 w-full gap-2">
          {" "}
          <div className=" min-h-40 md:min-h-80 overflow-visible w-1/2 ">
            <div className="rounded-3xl shadow-lg bg-gray-200 h-full"></div>
          </div>
          <div className="flex flex-col w-1/2  md:space-y-4 space-y-2.5">
            <div className="flex justify-between items-center">
              <div className="flex flex-col flex-1 gap-1.5">
                <div className="col-span-1 h-2 rounded bg-gray-200 w-full"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200 w-full"></div>
              </div>
              <div className="font-bold rounded-xl p-2 min-w-10 text-center">
                <div className="col-span-1 h-10 w-10 rounded bg-gray-200"></div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className=" bg-gray-200 h-8 px-3 w-16 flex gap-2 items-center rounded-full border border-gray-100 text-gray-700"></div>
              <div className=" bg-gray-200 h-8 px-3 w-16 flex gap-2 items-center rounded-full border border-gray-100 text-gray-700"></div>
              <div className=" bg-gray-200 h-8 px-3 w-16 flex gap-2 items-center rounded-full border border-gray-100 text-gray-700"></div>
            </div>
            <div className="flex items-center flex-col gap-6 flex-1">
              <div className="flex items-center w-full gap-2">
                <div className="col-span-1 h-2 bg-gray-200 w-full"></div>
                <div className="col-span-1 h-2 bg-gray-200 w-20"></div>
              </div>
              <div className="flex items-center flex-col  w-full gap-2">
                <div className="col-span-1 h-2 bg-gray-200 w-full"></div>
                <div className="col-span-1 h-2 bg-gray-200 w-full"></div>
                <div className="col-span-1 h-2 bg-gray-200 w-full"></div>
                <div className="col-span-1 h-2 bg-gray-200 w-full"></div>
              </div>
              {/* <div className="flex items-center flex-1 gap-2">
                <div className="col-span-1 h-2 bg-gray-200 w-full"></div>
              </div>{" "} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Statistics() {
  return (
    <div className="animate-pulse flex-1 border border-gray-100 sm:rounded-xl ">
      <div className="flex space-x-4 items-baseline m-6">
        <div className="flex-1 h-24 bg-gray-200 rounded"></div>
        <div className="flex-1 h-36 bg-gray-200 rounded"></div>
        <div className="flex-1 h-48 bg-gray-200 rounded"></div>
        <div className="flex-1 h-64 bg-gray-300 rounded"></div>
        <div className="flex-1 h-72 bg-gray-200 rounded"></div>
        <div className="flex-1 h-64 bg-gray-300 rounded"></div>
        <div className="flex-1 h-48 bg-gray-200 rounded"></div>
        <div className="flex-1 h-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
