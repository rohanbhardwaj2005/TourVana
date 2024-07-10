import "@babel/polyfill";
import axios from "axios";
import { showAlert } from "./alerts";
import qs from "qs";

export const signUp = async (data) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: qs.stringify(data),
      withCredentials: false,
    });
    if (res.data.status === "success") {
      showAlert("success", "Saving new profile and Logging you in!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
