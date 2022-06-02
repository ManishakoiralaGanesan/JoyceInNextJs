import styles from "./../../styles/Form.module.css";
export default function TextField(props) {
  const { value, placeholder } = props;
  return (
    <div>
      <input
        type="text"
        value={value}
        className={styles.textField}
        placeholder={placeholder}
        name={value}
      ></input>
    </div>
  );
}
