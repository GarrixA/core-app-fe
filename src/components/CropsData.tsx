/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetCropsQuery } from "../store/actions/crops";

interface CropCountry {
  crop_country: string;
  [key: string]: any;
}

const CropsData = () => {
  const { data: crops, isLoading, isError } = useGetCropsQuery();

  // Extract unique country names
  const uniqueCountries: string[] = [];
  const seen = new Set<string>();

  crops?.data?.forEach((crop: CropCountry) => {
    if (crop?.crop_country && !seen.has(crop.crop_country)) {
      seen.add(crop.crop_country);
      uniqueCountries.push(crop.crop_country);
    }
  });

  if (isLoading) {
    return <div className="text-center mt-12">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center mt-12 text-red-500">
        Error loading crops data.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 mt-12 px-[20%]">
      {uniqueCountries.length === 0 ? (
        <div className="text-center text-gray-500">No crop data available.</div>
      ) : (
        uniqueCountries.map((countryName, idx) => {
          const cropsForCountry = crops.data.filter(
            (crop: CropCountry) => crop.crop_country === countryName
          );

          return (
            <div
              key={countryName || idx}
              className="bg-white rounded-lg shadow p-6 flex items-center justify-between"
            >
              <h2 className="text-xl font-semibold mb-2">
                Data from {countryName} is available
              </h2>
              <Link
                to={`/dashboard/${countryName.toLowerCase()}`}
                state={{ crops: cropsForCountry }}
              >
                <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  View
                </button>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CropsData;
