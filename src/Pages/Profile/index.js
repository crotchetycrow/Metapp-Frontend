import { useEffect } from "react";
import "./index.css";

const eventURL = `https://jsonplaceholder.typicode.com/users`;

function Profile() {
  useEffect(() => {
    fetch(eventURL).then((res) => console.log(res));
  }, []);

  return (
    <div className="profile_wrapper">
      <h1>Profile Page Here</h1>
    </div>
  );
}

export default Profile;
