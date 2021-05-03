import "../styles.css";
import User from "./User/User";
export default function Users(props) {
  const { allUsers } = props;
  console.log(allUsers);

  return (
    <div className="users">
      {allUsers.length === 0 ? (
        <h1>NO More Users in the list</h1>
      ) : (
        allUsers.map((user) => <User {...user} />)
      )}
    </div>
  );
}
