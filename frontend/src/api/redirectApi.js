import axios from "axios";

const redirectUser = async (theCode) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/url/${theCode}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { redirectUser };
