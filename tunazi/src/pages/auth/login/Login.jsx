import React, { useState } from "react";
import bg from "../../../assets/images/bglogin.jpg";
import { login } from "../../../axios/auth.axios";
import {useDispatch} from 'react-redux';
import "./login.css";
import Button from "../../../components/common/Button/Button";
import { toast } from 'react-toastify';


const Login = () => {
  const dispatch=useDispatch()
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const [IsAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(mobileno,password).then((res) => {
      if (res.data && res.data.token) {
        setPassword("");
        setMobileno("");
    setIsAuthenticated(true);

        dispatch({
          type: 'CREATE_USER',
          payload: res.data
        })
        toast.success("Successfully Login")
        window.location.href = "/";
      }
    });
  };
  return (
    <div className="bgcolor1">
      <div className="registersec1">
        <img src={bg} alt="Login tuniza" />
        <div className="left1">
          <div className="leftsec1">
            <h1>Login</h1>
            <form
              id="form1"
              className="formclass"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="email1">
                <input
                  type="text"
                  name="mobileno"
                  id="mobileno"
                  placeholder="Mobile number"
                  onChange={(e) => {
                    setMobileno(e.target.value);
                  }}
                />
              </div>
              <div className="email1">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <p>
                Don't have account?<a href="./register">Signup</a>
              </p>
              <Button type="submit">Login</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
