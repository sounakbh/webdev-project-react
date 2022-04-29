import { useState } from "react";
import * as service from "../../services/security-service";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();
  const signup = () =>
    service
      .register(newUser)
      .then(() => navigate("/home"))
      .catch((e) => alert(e));
  return (
    <div className="row mt-2">
      <div className="col-3"></div>
      <div className="col-6">
        <input
          className="mb-2 form-control"
          onChange={(e) =>
            setNewUser({ ...newUser, firstName: e.target.value })
          }
          placeholder="First Name"
        />
        <input
          className="mb-2 form-control"
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          placeholder="Last Name"
        />
        <input
          className="mb-2 form-control"
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          placeholder="Username"
        />
        <input
          className="mb-2 form-control"
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          placeholder="Password"
          type="password"
        />
        <input
          className="mb-2 form-control"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          placeholder="Email"
          type="email"
        />
        <input
          className="mb-2 form-control"
          onChange={(e) =>
            setNewUser({ ...newUser, dateOfBirth: e.target.value })
          }
          placeholder="Date of Birth"
          type="date"
        />
        <input
          className="mb-2 form-control"
          onChange={(e) => setNewUser({ ...newUser, location: e.target.value })}
          placeholder="Location"
        />
        <button onClick={signup} className="btn btn-primary mb-5">
          Signup
        </button>
      </div>
      <div className="col-3"></div>
    </div>
  );
};
export default Signup;
