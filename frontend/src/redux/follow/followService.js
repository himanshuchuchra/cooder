// Import Section
import axios from "axios";

// API URL Declarations
const API_URL = process.env.REACT_APP_BACKEND_URL;
const USER_URL = API_URL + "users";
const FOLLOW_URL = "follows";

// API Calls Section
const userFollowRequests = async (paramsData) => {
  const response = await axios.get(`${USER_URL}/${paramsData}/${FOLLOW_URL}/`);
  return response.data;
};

const createRequest = async (paramsData) => {
  const response = await axios.get(
    `${USER_URL}/${paramsData.userid}/${FOLLOW_URL}/${paramsData.followid}/create`
  );
  return response.data;
};

const acceptRequest = async (paramsData) => {
  const response = await axios.get(
    `${USER_URL}/${paramsData.userid}/${FOLLOW_URL}/${paramsData.followid}/accept`
  );
  return response.data;
};

const rejectRequest = async (paramsData) => {
  const response = await axios.get(
    `${USER_URL}/${paramsData.userid}/${FOLLOW_URL}/${paramsData.followid}/reject`
  );
  return response.data;
};

const removeFollower = async (paramsData) => {
  const response = await axios.delete(
    `${USER_URL}/${paramsData.userid}/${FOLLOW_URL}/${paramsData.followid}/remove`
  );
  return response.data;
};

const unfollowUser = async (paramsData) => {
  const response = await axios.delete(
    `${USER_URL}/${paramsData.userid}/${FOLLOW_URL}/${paramsData.followid}/unfollow`
  );
  return response.data;
};

const getFollowers = async (paramsData) => {
  const response = await axios.get(
    `${USER_URL}/${paramsData}/${FOLLOW_URL}/followers`
  );
  return response.data;
};

const getFollowing = async (paramsData) => {
  const response = await axios.get(
    `${USER_URL}/${paramsData}/${FOLLOW_URL}/following`
  );
  return response.data;
};

const notFollowingUsers = async (paramsData) => {
  const response = await axios.get(
    `${USER_URL}/${paramsData}/${FOLLOW_URL}/details`
  );
  return response.data;
};

// Export Section
const followService = {
  userFollowRequests,
  createRequest,
  acceptRequest,
  rejectRequest,
  removeFollower,
  unfollowUser,
  getFollowers,
  getFollowing,
  notFollowingUsers,
};
export default followService;
