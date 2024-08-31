import axios from "axios";
const API_URL = "http://localhost:3000";

export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_URL}/api/upload`, data);
    return response.data;
  } catch (error) {
    console.error("Error while calling api " + error.message);
  }
};
