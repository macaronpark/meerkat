import axios from "@axios";

export const getMap = async () => {
  try {
    const response = await axios.get("/map");
    if (response?.data) {
      return { data: response.data, error: null };
    }
  } catch (error) {
    return { data: null, error };
  }
};
