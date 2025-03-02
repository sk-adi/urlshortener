import axios from "axios";

const api_url=import.meta.env.VITE_API_URL;


const redirectUser = async (theCode) => {
  try {
    const response = await axios.get(`${api_url}/api/url/${theCode}`);
    //return response.data;
    return null
  } catch (error) {
    console.log(error);
  }
};

export { redirectUser };
