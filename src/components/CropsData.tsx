import { Link } from "react-router-dom";

const countries = [
  { label: "Rwanda", value: "rwanda" },
  { label: "Tanzania", value: "tanzania" },
  { label: "Kenya", value: "kenya" },
  { label: "Nigeria", value: "nigeria" },
];

const CropsData = () => {
  return (
    <div className="flex flex-col gap-2 mt-12 px-[20%]">
      {countries.map((country) => (
        <div
          key={country.value}
          className="bg-white rounded-lg shadow p-6 flex items-center justify-between"
        >
          <h2 className="text-xl font-semibold mb-2">
            Data from {country.label} is available
          </h2>
          <Link to={`${country.value}`}>
            <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              View
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CropsData;
