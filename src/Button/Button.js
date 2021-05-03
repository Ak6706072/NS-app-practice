import "../styles.css";

export default function Button(props) {
  const { handleClick, value } = props;
  return <button onClick={handleClick}>{value}</button>;
}
