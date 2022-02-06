import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./login.css";

function LoginForm() {
  // create state variables for each input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const authenticate = () => {
    axios
      .post("http://localhost:3002/login", {
        email,
        password,
      })
      .then((res) => {
        //if the password is invalid
        if (res.data === "invalid") {
          setError("invalid");
          //if the email is invalid
        } else if (res.data === "no email") {
          setError("no email");
        } else {
          // save the access token to local storage
          localStorage.setItem("accessToken", res.data.accessToken);
          navigate("/");
          console.log(res.data);
        }
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    authenticate();
    console.log(email, password);
  };

  return (
    <div className='form-page'>
      <form onSubmit={submitHandler} className='form-container'>
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
        {error === "invalid" && (
          <p className='invalid'>
            Sorry that username or password was incorrect!
          </p>
        )}
        {error === "no email" && (
          <p className='invalid'>
            Sorry that username or password was incorrect!
          </p>
        )}
        <div className='signup-button'>
          <Button type='submit' variant='contained' color='primary'>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
