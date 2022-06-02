//import TextField from "../Fields/TextField";
import Card from "../Fields/Card";
import styles from "./../../styles/Form.module.css";
import { useState } from "react";
import CloseButton from "../Fields/CloseButton";
import addUser from "./http/userApiMethods";
export default function AddUserForm(props) {
  const [defaultData, setDefaultData] = useState();

  const cardStyle = {
    margin: "auto",
    padding: "30px",
    transition: "0.3s",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    width: "600px",
    backgroundColor: "white",
  };

  const submitBtnStyle = {
    width: "180px",
    padding: "12px",
    backgroundColor: "green",
    color: "white",
    fontSize: "18px",
    border: "none",
    marginTop: "12px",
  };
  const handleChange = (e) => {
    setDefaultData({
      ...defaultData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await addUser(defaultData);
    props.handleClose();

    console.log(defaultData);
  };
  return (
    <Card style={cardStyle}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h2>Add User</h2>
        </div>

        <div align="right" style={{ width: "50%" }}>
          <CloseButton closeFunction={props.handleClose}></CloseButton>
        </div>
      </div>

      <div className="form-field">
        <input
          className={styles.textField}
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <input
          className={styles.textField}
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <select
          className={styles.textField}
          name="role"
          placeholder="Role"
          onChange={handleChange}
        >
          <option value="" default>
            Select
          </option>
          <option value="manager">Manager</option>
        </select>
      </div>
      <div className="form-field">
        <button type="submit" style={submitBtnStyle} onClick={handleSubmit}>
          submit
        </button>
      </div>
    </Card>
  );
}
