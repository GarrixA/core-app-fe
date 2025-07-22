import { useForm, useFieldArray } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocation } from "react-router-dom";

type CropRow = {
  crop_name: string;
  crop_variety: string;
  crop_category: string;
  crop_date: string;
  crop_country: string;
};

type CropFormData = {
  crops: CropRow[];
};

const cropSchema = yup.object({
  crop_name: yup.string().required("Crop name is required"),
  crop_variety: yup.string().required("Variety is required"),
  crop_category: yup.string().required("Category is required"),
  crop_date: yup.string().required("Date is required"),
  crop_country: yup.string().required("Country is required"),
});

const schema = yup.object({
  crops: yup.array().of(cropSchema).required().min(1),
});

const RwanaDataForm = () => {
  const location = useLocation();
  const crops = location.state?.crops ?? [];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CropFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      crops: crops.map((crop: CropRow) => ({
        crop_country: crop.crop_country || "Rwanda",
        crop_name: crop.crop_name || "",
        crop_variety: crop.crop_variety || "",
        crop_category: crop.crop_category || "",
        crop_date: crop.crop_date || "",
      })),
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "crops",
  });

  const onSubmit: SubmitHandler<CropFormData> = (data, event) => {
    // Get row index from form's dataset
    const index = Number((event?.target as HTMLFormElement).dataset.index);
    alert(
      `Submitting row ${index + 1}:\n` +
        JSON.stringify(data.crops[index], null, 2)
    );
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {crops[0]?.crop_country || "Crop"} Data
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Crop Name</th>
              <th className="py-3 px-4">Variety</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={field.id} className="border-t">
                <td className="py-2 px-4">
                  <input
                    disabled
                    type="date"
                    {...register(`crops.${index}.crop_date`)}
                    className="w-full rounded px-2 py-1"
                  />
                  {errors.crops?.[index]?.crop_date && (
                    <p className="text-red-600 text-sm">
                      {errors.crops[index]?.crop_date?.message}
                    </p>
                  )}
                </td>
                <td className="py-2 px-4">
                  <input
                    disabled
                    type="text"
                    {...register(`crops.${index}.crop_name`)}
                    className="w-full rounded px-2 py-1"
                  />
                  {errors.crops?.[index]?.crop_name && (
                    <p className="text-red-600 text-sm">
                      {errors.crops[index]?.crop_name?.message}
                    </p>
                  )}
                </td>
                <td className="py-2 px-4">
                  <input
                    disabled
                    type="text"
                    {...register(`crops.${index}.crop_variety`)}
                    className="w-full rounded px-2 py-1"
                  />
                  {errors.crops?.[index]?.crop_variety && (
                    <p className="text-red-600 text-sm">
                      {errors.crops[index]?.crop_variety?.message}
                    </p>
                  )}
                </td>
                <td className="py-2 px-4">
                  <input
                    disabled
                    type="text"
                    {...register(`crops.${index}.crop_category`)}
                    className="w-full rounded px-2 py-1"
                  />
                  {errors.crops?.[index]?.crop_category && (
                    <p className="text-red-600 text-sm">
                      {errors.crops[index]?.crop_category?.message}
                    </p>
                  )}
                </td>
                <td className="py-2 px-4 text-center">
                  <form onSubmit={handleSubmit(onSubmit)} data-index={index}>
                    <input
                      type="hidden"
                      {...register(`crops.${index}.crop_country`)}
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RwanaDataForm;
