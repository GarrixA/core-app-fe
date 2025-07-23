import baseAPI from "../../utils/config/api";

/* eslint-disable @typescript-eslint/no-explicit-any */
const userApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/login",
        method: "POST",
        withCredentials: true,
        body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    register: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/register",
        method: "POST",
        withCredentials: true,
        body,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    verifyEmail: builder.mutation<any, { token: string }>({
      query: ({ token }) => ({
        url: `/verify?token=${encodeURIComponent(token)}`,
        method: "GET",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    createOrganization: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/organization",
        method: "POST",
        withCredentials: true,
        body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    authAccess: builder.mutation<any, { token: string }>({
      query: ({ token }) => ({
        url: "/auth_access",
        method: "POST",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useVerifyEmailMutation,
  useCreateOrganizationMutation,
  useAuthAccessMutation,
} = userApi;
