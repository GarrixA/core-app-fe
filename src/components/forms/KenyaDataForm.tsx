import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type CropFormData = {
  date: string;
  name: string;
  variety: string;
  category: string;
};

const schema = yup.object().shape({
  date: yup.string().required("Date is required"),
  name: yup.string().required("Crop name is required"),
  variety: yup.string().required("Variety is required"),
  category: yup.string().required("Category is required"),
});

const KenyaDataForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CropFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CropFormData) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white p-6 rounded shadow mt-8"
    >
      <h2 className="text-xl font-bold mb-4">Add Kenya Crop Data</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Date</label>
        <input
          type="date"
          {...register("date")}
          className="w-full border rounded px-3 py-2"
        />
        {errors.date && (
          <span className="text-red-600 text-sm">{errors.date.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Crop Name</label>
        <input
          type="text"
          {...register("name")}
          className="w-full border rounded px-3 py-2"
        />
        {errors.name && (
          <span className="text-red-600 text-sm">{errors.name.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Variety</label>
        <input
          type="text"
          {...register("variety")}
          className="w-full border rounded px-3 py-2"
        />
        {errors.variety && (
          <span className="text-red-600 text-sm">{errors.variety.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Category</label>
        <input
          type="text"
          {...register("category")}
          className="w-full border rounded px-3 py-2"
        />
        {errors.category && (
          <span className="text-red-600 text-sm">
            {errors.category.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default KenyaDataForm;
