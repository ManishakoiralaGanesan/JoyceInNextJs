import axios from "axios";

export default async function addUser(body) {
  let url = `https://api.sjrsell.co.in/v1/user`;
  await axios
    .post(url, body)
    .then((response) => {
      if (response.status) {
        return response;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
