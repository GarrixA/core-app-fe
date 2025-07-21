const crops = [
  {
    id: 1,
    date: "2025-07-01",
    name: "Maize",
    variety: "Hybrid 614",
    category: "Cereal",
  },
  {
    id: 2,
    date: "2025-07-02",
    name: "Beans",
    variety: "RWR 2245",
    category: "Legume",
  },
  {
    id: 3,
    date: "2025-07-03",
    name: "Cassava",
    variety: "NASE 14",
    category: "Root",
  },
  {
    id: 4,
    date: "2025-07-04",
    name: "Potato",
    variety: "Kinigi",
    category: "Tuber",
  },
  {
    id: 5,
    date: "2025-07-05",
    name: "Rice",
    variety: "IRRI 6",
    category: "Cereal",
  },
];

const RwandaDataTable = () => {
  return (
    <div className="overflow-x-auto mt-8">
      <h1 className="text-2xl font-bold my-2">Rwanda data table</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">ID</th>
            <th className="px-4 py-2 border-b text-left">Date</th>
            <th className="px-4 py-2 border-b text-left">Name</th>
            <th className="px-4 py-2 border-b text-left">Crop Variety</th>
            <th className="px-4 py-2 border-b text-left">Category</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop) => (
            <tr key={crop.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{crop.id}</td>
              <td className="px-4 py-2 border-b">{crop.date}</td>
              <td className="px-4 py-2 border-b">{crop.name}</td>
              <td className="px-4 py-2 border-b">{crop.variety}</td>
              <td className="px-4 py-2 border-b">{crop.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RwandaDataTable;
