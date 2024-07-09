import axios from "axios";
import { showAlert } from "./alerts";

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    window.location.assign(session.data.session.url);
  } catch (err) {
    // console.log(err.stack);
    showAlert("error", err);
  }
};
