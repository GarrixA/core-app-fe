import Cookies from "js-cookie";

export const isLoggedIn = (): boolean => {
  const token = Cookies.get("access_token");
  return !!token && token.split(".").length === 3;
};
