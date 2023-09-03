/* eslint-disable react/jsx-props-no-spreading */

import classes from "../../Form.module.scss";

export function SignUpFormContent(register, errors, watch) {
  return (
    <>
      <label className={classes.Form__label} htmlFor="username">
        Username
        <input
          className={`${errors?.username && classes["Form__error-input"]}`}
          placeholder="Username"
          {...register("username", {
            required: "Поле обязательное к запоплению.",
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
        {errors?.username && <p className={classes["Form__error-text"]}>{errors?.username?.message || "Error"}</p>}
      </div>
      <label className={classes.Form__label} htmlFor="email">
        Email address
        <input
          className={`${errors?.email && classes["Form__error-input"]}`}
          placeholder="Email address"
          {...register("email", {
            required: "Поле обязательное к запоплению.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
              message: "Некорректный почтовый адрес",
            },
          })}
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.email && <p className={classes["Form__error-text"]}>{errors?.email?.message || "Error"}</p>}
      </div>
      <label className={classes.Form__label} htmlFor="password">
        New password
        <input
          className={`${errors?.password && classes["Form__error-input"]}`}
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Поле обязательное к запоплению.",
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
      <label className={classes.Form__label} htmlFor="cpassword">
        Repeat password
        <input
          placeholder="Password"
          className={`${errors?.cpassword && classes["Form__error-input"]}`}
          {...register("cpassword", {
            required: "Поле обязательное к запоплению.",
            // pattern: {
            //   value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,40}$/,
            //   message: "Пароль слишком простой.",
            // },
            minLength: { value: 6, message: "Минимум 6 символа." },
            maxLength: { value: 40, message: "Максимум 40 символов." },
            // eslint-disable-next-line consistent-return
            validate: (value) => {
              if (watch("password") !== value) {
                return "Пароли не совпадают";
              }
            },
          })}
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.cpassword && <p className={classes["Form__error-text"]}>{errors?.cpassword?.message || "Error"}</p>}
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #E8E8E8", paddingTop: "8px", marginTop: "21px" }}>
        <input type="checkbox" checked {...register("agreement", { required: "Поле обязательное к запоплению." })} />
        <label className={classes.Form__label} htmlFor="agreement">
          I agree to the processing of my personal information
        </label>
      </div>
      <div className={classes.Form__error}>
        {errors?.agreement && <p className={classes["Form__error-text"]}>{errors?.agreement?.message || "Error"}</p>}
      </div>
    </>
  );
}
