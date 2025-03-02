import axios from "axios";


const redirectUser = async (theCode) => {
  try {
    const response = await axios.get(`/api/url/${theCode}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { redirectUser };
