// Import Section
import axios from "axios";

// API URL Declarations
const API_URL = process.env.REACT_APP_BACKEND_URL;
const AUTH_URL = API_URL + "auth";

// API Call Section
const verifyNewUser = async (apiData) => {
  const response = await axios.post(AUTH_URL + "/", apiData);
  return response.data;
};

const userSignIn = async (apiData) => {
  const response = await axios.post(AUTH_URL + "/sign-in", apiData);
  return response.data;
};

const userSignOut = async () => {
  const response = await axios.get(AUTH_URL + "/sign-out");
  return response.data;
};

const generateTFAToken = async (paramData) => {
  const response = await axios.get(AUTH_URL + `/tfa/${paramData}`);
  return response.data;
};

const verifyTFAToken = async (apiData, paramData) => {
  const response = await axios.post(AUTH_URL + `/tfa/${paramData}`, apiData);
  return response.data;
};

// Export Section
const authService = {
  verifyNewUser,
  userSignIn,
  generateTFAToken,
  verifyTFAToken,
  userSignOut,
};
export default authService;