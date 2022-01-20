import { useEffect, useState } from "react";
import "./index.css";

function Profile() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("")

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
      <input placeholder="Search users" onChange={event => setQuery(event.target.value)} />
      {users.filter((user) => {
        if (query === "") {
          return user;
        } else if (user.name.toLowerCase().includes(query.toLowerCase()) || user.username.toLowerCase().includes(query.toLowerCase())) {
          return user
        }
      }).map((user, index) => (
        <div className="box" key={index}>
          <h3>User:</h3>
          <p>Name:{user.name}</p>
          <p>Username:{user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Profile;
