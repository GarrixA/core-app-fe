/* eslint-disable @typescript-eslint/no-explicit-any */

import baseAPI from "../../utils/config/api";

const usersApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/users/add",
        method: "POST",
        withCredentials: true,
        body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useAddUserMutation } = usersApi;
