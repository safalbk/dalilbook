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
  export const getVideoById = async (videoId) => {
    try {
      const response = await api.get(`/api/videoapi/${videoId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching video by ID:", error);
    }
  };

  export const createVideo = async (videoData) => {  
    try {
      const response = await api.post(`/api/videoapi/create`, videoData);
      return response.data;
    } catch (error) {
      console.error("Error updating video URL:", error);
    } 
  };