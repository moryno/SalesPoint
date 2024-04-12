import { LOGIN_API, successResponseContent } from "_constants";
import { getAccessToken } from "_helpers";
import { replaceExternalText } from "_helpers";
import axios from "axios";
import { notify } from "_helpers";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_VERSION,
  withCredentials: true,
});

const handleSuccessResponse = (response) => {
  const {
    status,
    config: { url, method },
  } = response;
  if (status === 200 || status === 201) {
    if (successResponseContent[url] && method === "post") {
      notify({
        message: "Success",
        placement: "topRight",
        success: true,
        ...successResponseContent[url],
      });
    }
  }
  return response;
};

const handleErrorResponse = (error) => {
  const {
    status,
    data,
    config: { url },
  } = error.response;
  if (status >= 400) {
    let description =
      data?.error?.message ||
      data?.error ||
      data?.message ||
      error?.message ||
      "";
    const userNotFound = status === 404 && url === LOGIN_API;

    if (status === 401) {
      // store.dispatch({ type: LOGOUT });
      description = "Session has expired. Please log in again";
    }
    if (!userNotFound) {
      notify({
        message: "Error",
        description: replaceExternalText(description),
        placement: "topRight",
        error: true,
      });
    }
  }
  return Promise.reject(error);
};

const appendPayloadToRequestData = (request) => {
  if (request.method === "post") {
    request.data = {
      ...(request.data || {}),
      //   token: getAccessToken() || null,
      // src: isDesktopDevice ? "DESKTOP" : "MOBILE_WEB",
      // app_version: version,
    };
  }
};

request.interceptors.request.use((request) => {
  request.headers["Content-Type"] = "application/json";
  appendPayloadToRequestData(request);
  return request;
});

request.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

export { request };
