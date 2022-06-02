import styles from "./../../styles/Form.module.css";
export default function Dialog({ children, visible }) {
  return (
    <div
      className={styles.dialogContainer}
      style={visible ? { display: "block" } : { display: "none" }}
    >
      <div className={styles.dialogContent}>{children}</div>
    </div>
  );
}
