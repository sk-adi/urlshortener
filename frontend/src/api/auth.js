import axios from "axios";

const userRegister = async (userData) => {

  try {
    const response = await axios.post(
      `/api/auth/register`,
      userData
    );
    return response.data;
  } catch (error) {
    console.log(`userRegister Error :${error}`);
  }
};

export { userRegister };

//login user

const userLogin = async (login) => {
  try {
    const response = await axios.post(
      `/api/auth/login`,
      login
    );
    return response.data;
  } catch (error) {
    console.log(`loginUser Error: ${error}`);
  }
};

export { userLogin };





//logout the user


const userLogOut=async()=>{
  try {
    const response=await axios.post(`/api/auth/logout`)
    return response.data
  } catch (error) {
    console.log(error)
  }

}


export { userLogOut }