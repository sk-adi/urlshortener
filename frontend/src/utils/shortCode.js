import axios from "axios";

const api_url=import.meta.env.VITE_API_URL

const shortCode = async (url) => {
  
  try {
    const response = await axios.post(`${api_url}/a/shortcode`, {originalUrl:url});
    return response.data;
  } catch (error) {
    console.log(error)
  }
};


export { shortCode }
