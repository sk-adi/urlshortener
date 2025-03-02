import axios from "axios";

const shortCode = async (url) => {
  
  try {
    const response = await axios.post(`/a/shortcode`, {originalUrl:url});
    return response.data;
  } catch (error) {
    console.log(error)
  }
};


export { shortCode }
