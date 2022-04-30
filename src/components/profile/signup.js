import { useState } from "react";
import * as service from "../../services/security-service";
import { useNavigate } from "react-router-dom";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const Signup = () => {
  const [newUser, setNewUser] = useState({roleId: 1});
  const navigate = useNavigate();

  const validateFields = () => {
    const {
      firstName,
      lastName,
      username,
      password,
      email,
      dateOfBirth,
      location,
    } = newUser;
    if (
      firstName == undefined ||
      firstName === "" ||
      lastName == undefined ||
      lastName == "" ||
      username == undefined ||
      username == "" ||
      password == undefined ||
      password == "" ||
      email == undefined ||
      email == "" ||
      dateOfBirth == undefined ||
      dateOfBirth == "" ||
      location == undefined ||
      location == ""
    ) {
      alert("Some fields are missing!");
      return false;
    }
    return true;
  };

  const signup = () => {
    if (!validateFields()) return;
    return service
      .register(newUser)
      .then(() => navigate("/home"))
      .catch((e) => alert(e));
  };
  return (
    <div className="row mt-2">
      <div className="col-3"></div>
      <div className="col-6">
        <input
          required
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
              <FormLabel id="demo-radio-buttons-group-label">What would you like to sign up as?</FormLabel>
              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={1}
                  name="radio-buttons-group"
                  onChange={event => {
                      setNewUser({...newUser, roleId: event.target.value})
                  }}
              >
                  <FormControlLabel value={0} control={<Radio />} label="Basic" />
                  <FormControlLabel value={1} control={<Radio />} label="Premium" />
                  <FormControlLabel value={2} control={<Radio />} label="Admin" />
              </RadioGroup>
        <button onClick={signup} className="btn btn-primary mb-5">
          Signup
        </button>
      </div>
      <div className="col-3"></div>
    </div>
  );
};
export default Signup;
