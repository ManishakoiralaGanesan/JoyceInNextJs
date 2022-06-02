// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const url = `https://api.sjrsell.co.in/v1/user`;

    if (req.method == "GET") {
      const response = await fetch(url);
      const json = await response.json();
      const list = json.data.list;

      res.status(200).json(list);
    }
  } else if (req.method === "POST") {
  } /*await axios.get("https://api.sjrsell.co.in/v1/user").then((response) => {
    console.log(response.data.data.list);
  });*/
}
