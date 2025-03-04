import axios from "axios";

const api_url=import.meta.env.VITE_API_URL;

const userRegister = async (userData) => {

  try {
    const response = await axios.post(
      `${api_url}/api/auth/register`,
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
      `${api_url}/api/auth/login`,
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
    const response=await axios.post(`${api_url}/api/auth/logout`)
    return response.data
  } catch (error) {
    console.log(error)
  }

}


export { userLogOut }



//verify token to access protected routes


const isLoggedIn=async(token)=>{

  try {
    const response=await axios.get(`${api_url}/api/auth/verify`,
      {
        headers:{Authorization:`Bearer ${token}`}
      }
    )
    return response.data
    
  } catch (error) {
    console.log(`isLoggedIn Error:`,error)
  }
}


export { isLoggedIn }