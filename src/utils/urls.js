export const BackendDomain = (postfix) => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000/api/v1/" + postfix
  } else if (process.env.NODE_ENV === "production") {
    return "https://babysitter-mendel.herokuapp.com/api/v1/" + postfix
  }
}