import { useForm } from "react-hook-form";
import "./style.css";
import * as yup from "yup";
import React, {useState} from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateRole } from "../../store/userSlice";


const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(4,"4-12 symbols").max(12,"4-12 symbols"),
});

export default function Form() {
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  const dispatch = useDispatch();

  
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "all", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
     axios.post('http://localhost:5000/auth/login', {"username":data.username,"password":data.password})
    .then((res) => {
      res.data && setToken(res.data.token)
      var decoded = jwt_decode(res.data.token)
      dispatch (updateRole(decoded.role))

      setRole(decoded.role)
      console.log(token);
      console.log(role);
    })
    reset();
  };

  
  return (
    <div className="Form">
      <h1>Log In</h1>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-small">
          <div>
            <label>Username</label>
            <input {...register("username")} />
            {errors?.username && (
              <p>{errors?.username?.message || "Error!"}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <input {...register("password")} />
            {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
          </div>
        </div>

        <input value="SUBMIT" type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}

      


