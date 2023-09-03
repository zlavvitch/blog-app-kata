/* eslint-disable react/jsx-props-no-spreading */
import classes from "../../Form.module.scss";

export function SignInFormContent(register, errors) {
  return (
    <>
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
            // eslint-disable-next-line consistent-return
            validate: (value) => {
              if (value.trim() === "") {
                return "Введите почтовый адрес";
              }
            },
          })}
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.email && <p className={classes["Form__error-text"]}>{errors?.email?.message || "Error"}</p>}
      </div>
      <label className={classes.Form__label} htmlFor="password">
        Password
        <input
          className={`${errors?.password && classes["Form__error-input"]}`}
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Поле обязательное к запоплению.",
            minLength: { value: 6, message: "Минимум 6 символа." },
            maxLength: { value: 40, message: "Максимум 40 символов." },
            // eslint-disable-next-line consistent-return
            validate: (value) => {
              if (value.trim() === "") {
                return "Введите пароль";
              }
            },
          })}
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.password && <p className={classes["Form__error-text"]}>{errors?.password?.message || "Error"}</p>}
      </div>
    </>
  );
}
