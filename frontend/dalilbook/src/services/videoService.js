import { BASE_URL } from "../environment/config";   
import api from "../api/axios";




export const getAllVideos = async () => {
  try {
    const response = await api.get("/api/videoapi/all");
    // console.log("Videos:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
};
