import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_API_URL } from "./keys";
import type { RootState } from "../../store/page";

const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: async (headers, { getState }) => {
      const {
        appReducer: { token },
      } = getState() as RootState;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["categories", "items", "borrowers"],
  endpoints: () => ({}),
});

export default baseAPI;
