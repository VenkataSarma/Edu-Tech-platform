import React, { useState, useContext } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { UserContext } from "./UserContext"; // Import UserContext
import { database } from "./firebaseConfig";

const Reg = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext); // Get setUser from context

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const userRef = ref(db, "Authentication/" + data.email.replace(".", "_"));

    set(userRef, data)
      .then(() => {
        alert("Data posted successfully");
        setUser(data); // Set the newly registered user globally
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="regbox">
        <div className="regform">
          <center>
            <h1>Registration Page</h1>
            <form onSubmit={submitHandler}>
              <label className="reg-label">First Name:</label>
              <input
                type="text"
                required
                name="firstname"
                placeholder="Enter your first name"
                onChange={changeHandler}
              />
              <br />
              <label className="reg-label">Last Name:</label>
              <input
                type="text"
                required
                name="lastname"
                placeholder="Enter your last name"
                onChange={changeHandler}
              />
              <br />
              <label className="reg-label">Email:</label>
              <input
                type="email"
                required
                name="email"
                placeholder="Enter your Email"
                onChange={changeHandler}
              />
              <br />
              <label className="reg-label">Password:</label>
              <input
                type="password"
                required
                name="password"
                placeholder="Enter password"
                onChange={changeHandler}
              />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Reg;
