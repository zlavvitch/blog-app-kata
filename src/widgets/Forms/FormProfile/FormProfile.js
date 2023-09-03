/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateUser, selectUserLoadingStatus, selectUser } from "../../../entities/User";
import classes from "../Form.module.scss";

import { ProfileFormContent } from "./ui";

export function FormProfile() {
  const { username, email } = useSelector(selectUser);
  const user = useSelector(selectUser);
  const userLoadingStatus = useSelector(selectUserLoadingStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onTouched", defaultValues: { username, email } });

  const contentForm = ProfileFormContent(register, errors);
  const titleBtn = "Save";

  const styleBtn =
    userLoadingStatus !== "loading" ? classes.Form__btn : `${classes.Form__btn} ${classes["Form__btn--disabled"]}`;

  const onSubmit = (data) => {
    let editedUser;
    if (!data.password) {
      data.password = localStorage.getItem("password");

      editedUser = { user: { ...user, ...data } };
    } else {
      editedUser = { user: { ...user, ...data } };
    }

    dispatch(updateUser(editedUser));
    navigate("/", { replace: true });
  };

  return (
    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
      {contentForm}
      <input className={styleBtn} type="submit" value={titleBtn} />
    </form>
  );
}
