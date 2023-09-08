import axios from "axios";
import React from "react";

const LoginApi = async (email, password) => {
  try {
    const requestBody = {
      email: email,
      password: password,
    };
    const res = await axios.post(
      `https://api-bootcamp.do.dibimbing.id/api/v1/login`,
      requestBody,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export default LoginApi;
