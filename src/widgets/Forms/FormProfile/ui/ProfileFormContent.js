/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */

import classes from "../../Form.module.scss";

export function ProfileFormContent(register, errors) {
  // const { username, email, image } = user;

  return (
    <>
      <label htmlFor="username">
        Username
        <input
          {...register("username", {
            // required: "Поле обязательное к запоплению.",
            pattern: {
              value: /^[a-zA-Z0-9_-]{3,20}$/,
              message: "Некорректный юзернейм.",
            },
            minLength: { value: 3, message: "Минимум 3 символа." },
            maxLength: { value: 20, message: "Максимум 20 символов." },
          })}
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.password && <p className={classes["Form__error-text"]}>{errors?.username?.message || "Error"}</p>}
      </div>
      <label htmlFor="email">
        Email address
        <input
          {...register("email", {
            // required: "Поле обязательное к запоплению.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
              message: "Некорректный почтовый адрес",
            },
          })}
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.password && <p className={classes["Form__error-text"]}>{errors?.email?.message || "Error"}</p>}
      </div>
      <label htmlFor="password">
        New password
        <input
          {...register("password", {
            required: "",
            // pattern: {
            //   value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,40}$/,
            //   message: "Пароль слишком простой.",
            // },
            minLength: { value: 6, message: "Минимум 6 символа." },
            maxLength: { value: 40, message: "Максимум 40 символов." },
          })}
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.password && <p className={classes["Form__error-text"]}>{errors?.password?.message || "Error"}</p>}
      </div>
      <label htmlFor="image">
        Avatar image (url)
        <input
          {...register("image", {
            pattern: {
              value: new RegExp(
                "^(https?:\\/\\/)?" +
                  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
                  "((\\d{1,3}\\.){3}\\d{1,3}))" +
                  "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
                  "(\\?[;&a-z\\d%_.~+=-]*)?" +
                  "(\\#[-a-z\\d_]*)?$",
                "i"
              ),
              message: "Не верный адерс изображения",
            },
          })}
          placeholder="Add avatar image"
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.password && <p className={classes["Form__error-text"]}>{errors?.image?.message || "Error"}</p>}
      </div>
    </>
  );
}
