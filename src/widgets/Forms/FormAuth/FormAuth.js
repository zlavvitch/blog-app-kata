/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser, loginUser, selectUserLoadingStatus, selectUserIsAuth } from "../../../entities/User";
import classes from "../Form.module.scss";

import { SignInFormContent, SignUpFormContent } from "./ui";

export function FormAuth({ formType }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLoadingStatus = useSelector(selectUserLoadingStatus);
  const isAuth = useSelector(selectUserIsAuth);

  let contentForm;
  let titleBtn = "";

  const {
    register,
    formState: { errors, isValid },
    watch,
    handleSubmit,
    reset,
  } = useForm({ mode: "onTouched" });

  const styleBtn =
    userLoadingStatus !== "loading" ? classes.Form__btn : `${classes.Form__btn} ${classes["Form__btn--disabled"]}`;

  useEffect(() => {
    if (isAuth) {
      navigate("/", { replace: true });
    }
  }, [isAuth, navigate]);

  const onSubmit = (data) => {
    const { username, email, password } = data;
    reset();

    if (username) {
      const newUser = { user: { username, email, password } };

      dispatch(registerUser(newUser));
    } else {
      const user = { user: { email, password } };

      dispatch(loginUser(user));
    }
  };

  switch (formType) {
    case "sign-up":
      titleBtn = "Create";
      contentForm = SignUpFormContent(register, errors, watch);
      break;

    case "sign-in":
      titleBtn = "Login";
      contentForm = SignInFormContent(register, errors);
      break;

    default:
      titleBtn = "Return to main page";
      contentForm = null;
  }

  return (
    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
      {contentForm}
      <input className={styleBtn} type="submit" value={titleBtn} disabled={!isValid} />
    </form>
  );
}
