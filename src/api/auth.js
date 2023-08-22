import axios from "axios";

const signUp = async (user) => {
  const url =
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register";
  try {
    const response = await axios.post(url, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.msg);
    } else {
      throw new Error("An error occurred while making the request.");
    }
  }
};

const signIn = async (user) => {
  const url =
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login";
  try {
    const response = await axios.post(url, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.msg);
    } else {
      throw new Error("An error occurred while making the request.");
    }
  }
};
export { signUp, signIn };
