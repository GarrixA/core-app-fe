/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetCropsQuery } from "../../store/actions/crops";

const TanzaniaDataTable = () => {
  const { data: crops = [], isLoading, isError } = useGetCropsQuery();

  return (
    <div className="overflow-x-auto mt-8">
      <h1 className="text-2xl font-bold my-2">Tanzania data table</h1>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error loading crops.</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">ID</th>
              <th className="px-4 py-2 border-b text-left">Date</th>
              <th className="px-4 py-2 border-b text-left">Name</th>
              <th className="px-4 py-2 border-b text-left">Crop Variety</th>
              <th className="px-4 py-2 border-b text-left">Category</th>
              <th className="px-4 py-2 border-b text-left">Country</th>
            </tr>
          </thead>
          <tbody>
            {crops?.data
              ?.filter(
                (crop: any) => crop?.crop_country?.toLowerCase() === "tanzania"
              )
              .map((crop: any, idx: number) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{idx + 1}</td>
                  <td className="px-4 py-2 border-b">{crop?.crop_date}</td>
                  <td className="px-4 py-2 border-b">{crop?.crop_name}</td>
                  <td className="px-4 py-2 border-b">{crop?.crop_variety}</td>
                  <td className="px-4 py-2 border-b">{crop?.crop_category}</td>
                  <td className="px-4 py-2 border-b">{crop?.crop_country}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TanzaniaDataTable;
