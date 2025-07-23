/* eslint-disable @typescript-eslint/no-explicit-any */

import baseAPI from "../../utils/config/api";

const cropsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createCrop: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/crops",
        method: "POST",
        withCredentials: true,
        body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getCrops: builder.query<any, void>({
      query: () => ({
        url: "/crops",
        method: "GET",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useCreateCropMutation, useGetCropsQuery } = cropsApi;
