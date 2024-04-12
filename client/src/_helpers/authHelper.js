export const getAccessToken = (second) => {
  return localStorage.getItem("accessToken");
};

export const setAccessToken = (value) => {
  localStorage.setItem("accessToken", value);
};
