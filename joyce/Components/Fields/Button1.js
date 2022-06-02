import styles from "../../styles/Button.module.css";
export default function Button(props) {
  const { name, clickFunction } = props;
  return (
    <button className={styles.joyceButton} onClick={clickFunction}>
      {name}
    </button>
  );
}
