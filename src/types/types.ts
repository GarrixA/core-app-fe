import * as yup from "yup";

export type Crop = {
  crop_name: string;
  crop_variety: string;
  crop_category: string;
  crop_date: string;
  crop_country: string;
};

export const cropSchema = yup.object().shape({
  crop_name: yup.string().required("Crop name is required"),
  crop_variety: yup.string().required("Variety is required"),
  crop_category: yup.string().required("Category is required"),
  crop_date: yup.string().required("Date is required"),
  crop_country: yup.string().required("Country is required"),
});
