import axios from "axios";
import { showAlert } from "./alerts";

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `https://87772f31-5160-484a-9683-9a8a95fd69ff-00-1w0f1vzamlbqn.riker.replit.dev/api/v1/bookings/checkout-session/${tourId}`,
    );
    window.location.assign(session.data.session.url);
  } catch (err) {
    console.log(err.stack);
    showAlert("error", err);
  }
};
