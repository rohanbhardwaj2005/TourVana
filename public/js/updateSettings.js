/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === "password"
        ? "https://87772f31-5160-484a-9683-9a8a95fd69ff-00-1w0f1vzamlbqn.riker.replit.dev/api/v1/users/updateMyPassword"
        : "https://87772f31-5160-484a-9683-9a8a95fd69ff-00-1w0f1vzamlbqn.riker.replit.dev/api/v1/users/updateMe";

    const res = await axios({
      method: "PATCH",
      url,
      data,
    });

    if (res.data.status === "success") {
      showAlert("success", `${type.toUpperCase()} updated successfully!`);
      window.setTimeout(() => {
        console.log("set");
        location.reload(true);
      }, 1000);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
