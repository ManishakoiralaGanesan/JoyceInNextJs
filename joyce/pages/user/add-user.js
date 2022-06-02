//import AddUserForm from "../../Components/User/AddUser";

export default function AddUser() {
  async function addNewUser(formData) {
    console.log(formData);
    const res = await fetch("https://api.sjrsell.co.in/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }
  return <div></div>;
}
