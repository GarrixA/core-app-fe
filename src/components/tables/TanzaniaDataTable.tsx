/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
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
        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-xs">
          <thead>
            <tr>
              <th className="px-2 py-2 border-b text-left">ID</th>
              <th className="px-2 py-2 border-b text-left">Name</th>
              <th className="px-2 py-2 border-b text-left">Variety</th>
              <th className="px-2 py-2 border-b text-left">Processing Level</th>
              <th className="px-2 py-2 border-b text-left">Category</th>
              <th className="px-2 py-2 border-b text-left">Date</th>
              <th className="px-2 py-2 border-b text-left">Country</th>
              <th className="px-2 py-2 border-b text-left">Production Qty (Hist)</th>
              <th className="px-2 py-2 border-b text-left">Production Qty (Exp)</th>
              <th className="px-2 py-2 border-b text-left">Stored Qty</th>
              <th className="px-2 py-2 border-b text-left">Farmgate Price (Local)</th>
              <th className="px-2 py-2 border-b text-left">Farmgate Price (USD)</th>
              <th className="px-2 py-2 border-b text-left">Wholesale Price (Local)</th>
              <th className="px-2 py-2 border-b text-left">Wholesale Price (USD)</th>
              <th className="px-2 py-2 border-b text-left">Region</th>
              {/* <th className="px-2 py-2 border-b text-left">Created At</th>
              <th className="px-2 py-2 border-b text-left">Updated At</th> */}
            </tr>
          </thead>
          <tbody>
            {crops?.data
              ?.filter((crop: any) => crop?.country?.toLowerCase() === "tanzania")
              .slice()
              .sort((a: any, b: any) => new Date(b.crop_date).getTime() - new Date(a.crop_date).getTime())
              .map((crop: any, idx: number) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-2 py-2 border-b">{idx + 1 }</td>
                  <td className="px-2 py-2 border-b">{crop.crop_name}</td>
                  <td className="px-2 py-2 border-b">{crop.crop_variety}</td>
                  <td className="px-2 py-2 border-b">{crop.processing_level}</td>
                  <td className="px-2 py-2 border-b">{crop.crop_category}</td>
                  <td className="px-2 py-2 border-b">
                    {crop.crop_date ? moment(crop.crop_date).format("YYYY-MM-DD") : ""}
                  </td>
                  <td className="px-2 py-2 border-b">{crop.country}</td>
                  <td className="px-2 py-2 border-b">{crop.production_quantity_historical}</td>
                  <td className="px-2 py-2 border-b">{crop.production_quantity_expected}</td>
                  <td className="px-2 py-2 border-b">{crop.stored_quantity}</td>
                  <td className="px-2 py-2 border-b">{crop.price_farmgate_local}</td>
                  <td className="px-2 py-2 border-b">{crop.price_farmgate_usd}</td>
                  <td className="px-2 py-2 border-b">{crop.price_wholesale_local}</td>
                  <td className="px-2 py-2 border-b">{crop.price_wholesale_usd}</td>
                  <td className="px-2 py-2 border-b">{crop.region}</td>
                  {/* <td className="px-2 py-2 border-b">{crop.createdAt ? new Date(crop.createdAt).toLocaleString() : ""}</td>
                  <td className="px-2 py-2 border-b">{crop.updatedAt ? new Date(crop.updatedAt).toLocaleString() : ""}</td> */}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TanzaniaDataTable;
