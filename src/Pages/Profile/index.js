import { useEffect, useState } from "react";
import "./index.css";

function Profile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch(console.log);
  }, []);

  console.log(users);

  return (
    <div className="profile_wrapper">
      <h1>Profile Page Here</h1>
      {users.map((user) => (
        <div>
          <h3>User:</h3>
          <p>Name:{user.name}</p>
          <p>Username:{user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Profile;
