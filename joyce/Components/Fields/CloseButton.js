export default function CloseButton({ closeFunction }) {
  const style = {
    border: "none",
    backgroundColor: "white",
    color: "red",
    fontSize: "18px",
    cursor: "pointer",
  };
  return (
    <button style={style} onClick={closeFunction}>
      X
    </button>
  );
}
