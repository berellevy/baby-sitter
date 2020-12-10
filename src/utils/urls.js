import { checkBackendToken } from "../auth/useBackendLogin";
import { setToken } from "../auth/useBackendLogin";

export const BackendDomain = (postfix) => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000/api/v1/" + postfix;
  } else if (process.env.NODE_ENV === "production") {
    return "https://babysitter-mendel.herokuapp.com/api/v1/" + postfix;
  }
};

export const fetcher = async ({ url, m, h, b, ...rest}) => {
  
  const options = {
    method: m || "GET",
    headers: h || {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${checkBackendToken()}`,
    },
    body: JSON.stringify(b),
  };

  const response = await fetch(url, {...options, ...rest})
  const refreshToken = response.headers.get("refreshToken")
  if (refreshToken) {
    setToken(refreshToken)
  }
  return response
};
