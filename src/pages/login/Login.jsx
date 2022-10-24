import { useForm } from "react-hook-form";
import "./style.css";
import * as yup from "yup";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateRole } from "../../store/userSlice";
import { updateToken } from "../../store/tokenSlice";
import { updateEvent } from "../../store/eventSlice";
import { updateContact } from "../../store/contactSlice";
import { updateSocial } from "../../store/socialSlice";


const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(4, "4-12 symbols").max(12, "4-12 symbols"),
});

export default function Form() {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "all", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    axios.post('https://dead-blue-macaw.cyclic.app/auth/login', { "username": data.username, "password": data.password })
      .then((res) => {
        dispatch(updateToken(res.data.token))
        var decoded = jwt_decode(res.data.token)
        dispatch(updateRole(decoded.role))
        const token = res.data.token;
        axios.get('https://dead-blue-macaw.cyclic.app/add/events', { headers: { 'Authorization': `Bearer ${token}` } })
          .then(res => dispatch(updateEvent(res.data)))
        axios.get('https://dead-blue-macaw.cyclic.app/add/social', { headers: { 'Authorization': `Bearer ${token}` } })
          .then(res => dispatch(updateSocial(res.data)))
        axios.get('https://dead-blue-macaw.cyclic.app/add/contact', { headers: { 'Authorization': `Bearer ${token}` } })
          .then(res => dispatch(updateContact(res.data)))
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
            <input {...register("username")} placeholder="user"/>
            {errors?.username && (
              <p>{errors?.username?.message || "Error!"}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <input {...register("password")} placeholder="user"/>
            {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
          </div>
        </div>

        <input value="SUBMIT" type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}




