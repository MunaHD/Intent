import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../login/login.css";

function RegisterForm() {
  const [user, setUser] = useState({});
  // create state variables for each input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const authenticate = () => {
    axios
      .post("http://localhost:3002/login", {
        name,
        email,
        password,
      })
      .then((res) => {
        //if the password is invalid
        if (res.data === "invalid") {
          setError("invalid password");
          //if the email is invalid
        } else if (res.date === "no email exists") {
          setError("This email does not exist");
        } else {
          // save the access token to local storage
          localStorage.setItem("accessToken", res.data.accessToken);
          navigate("/");
        }
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUser((prev) => {
      return {
        ...prev,
        name: e.target.value,
        email: e.target.value,
        password: e.target.value,
      };
    });
    authenticate();
    console.log(name, email, password);
  };

  return (
    <div className='form-page'>
      <form onSubmit={submitHandler} className='form-container'>
        <TextField
          id='form-input'
          label='Name'
          variant='filled'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id='form-input'
          label='Email'
          variant='filled'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id='form-input'
          label='Password'
          variant='filled'
          type='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='signup-button'>
          <Button type='submit' variant='contained' color='primary'>
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
