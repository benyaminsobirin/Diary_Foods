import axios from "axios";

const RegisterApi = async (
  addName,
  addEmail,
  addPass,
  addConPass,
  addrole,
  addProfileUrl,
  addPhoneNumber
) => {
  try {
    const requestData = {
      name: addName,
      email: addEmail,
      password: addPass,
      confrimPassword: addConPass,
      role: addrole,
      profilePictureUrl: addProfileUrl,
      phoneNumber: addPhoneNumber,
    };

    const res = await axios.post(
      `https://api-bootcamp.do.dibimbing.id/api/v1/register`,
      requestData,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        },
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default RegisterApi;
