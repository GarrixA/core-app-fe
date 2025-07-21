import { useState } from "react";
import RwandaDataTable from "../components/tables/RwandaDataTable";
import KenyaDataTable from "../components/tables/KenyaDataTable";
import NigeriaDataTable from "../components/tables/NigeriaDataTable";
import TanzaniaDataTable from "../components/tables/TanzaniaDataTable";

const countryOptions = [
  { label: "Rwanda", value: "rwanda" },
  { label: "Tanzania", value: "tanzania" },
  { label: "Kenya", value: "kenya" },
  { label: "Nigeria", value: "nigeria" },
];

const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState("rwanda");

  const renderTable = () => {
    switch (selectedCountry) {
      case "rwanda":
        return <RwandaDataTable />;
      case "tanzania":
        return <TanzaniaDataTable />;
      case "kenya":
        return <KenyaDataTable />;
      case "nigeria":
        return <NigeriaDataTable />;
      default:
        return null;
    }
  };

  return (
    <div className="px-24">
      <div className="max-w-xl mx-auto mt-16 p-8 font-sans bg-gray-50 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome to Core App
        </h1>
        <p className="text-gray-700">
          Core App empowers you to analyze agricultural data efficiently and
          intuitively. Unlock insights from your farm operations, monitor crop
          performance, and make data-driven decisions to boost productivity.
          Explore our tools designed for seamless data visualization,
          collaboration, and actionable reporting all in one place.
        </p>
      </div>
      <div className="max-w-xl mx-auto mt-8 mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Select Country
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {countryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-5 mb-10">{renderTable()}</div>
    </div>
  );
};

export default HomePage;
