import "../../styles.css";

export default function User(props) {
  const { name, email, phone, location } = props;
  console.log(name);
  return (
    <div className="user">
      <h3>
        {name.title} {name.first} {name.last}
      </h3>
      <p>
        {email} <br />
        {phone}
      </p>
    </div>
  );
}
