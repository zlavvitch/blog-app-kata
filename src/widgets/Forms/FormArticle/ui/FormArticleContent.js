/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */

import classes from "../../Form.module.scss";

export function FormArticleContent(register, errors, fields, remove, append) {
  return (
    <>
      <label className={`${classes.Form__label} ${classes["Form__label--article"]}`} htmlFor="title">
        Title
        <input
          className={`${errors?.title && classes["Form__error-input"]}`}
          placeholder="Title"
          {...register("title", {
            required: "Поле обязательное к запоплению.",
            minLength: { value: 1, message: "Минимум 1 символ." },
            maxLength: { value: 20, message: "Максимум 20 символов." },
            // eslint-disable-next-line consistent-return
            validate: (value) => {
              if (value.trim() === "") {
                return "Введите название статьи";
              }
            },
          })}
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.title && <p className={classes["Form__error-text"]}>{errors?.title?.message || "Error"}</p>}
      </div>

      <label className={`${classes.Form__label} ${classes["Form__label--article"]}`} htmlFor="description">
        Short description
        <input
          className={`${errors?.description && classes["Form__error-input"]}`}
          placeholder="Title"
          {...register("description", {
            required: "Поле обязательное к запоплению.",
            minLength: { value: 1, message: "Минимум 1 символ." },
          })}
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.description && (
          <p className={classes["Form__error-text"]}>{errors?.description?.message || "Error"}</p>
        )}
      </div>

      <label className={`${classes.Form__label} ${classes["Form__label--article"]}`} htmlFor="body">
        Text
        <textarea
          rows="5"
          cols="33"
          className={`${errors?.text && classes["Form__error-input"]}`}
          placeholder="Text"
          {...register("body", {
            required: "Поле обязательное к запоплению.",
            minLength: { value: 1, message: "Минимум 1 символ." },
          })}
        />
      </label>
      <div className={classes.Form__error}>
        {errors?.text && <p className={classes["Form__error-text"]}>{errors?.text?.message || "Error"}</p>}
      </div>
      <div className={classes.Form__tags}>
        <p>Tags</p>
        <div className={classes.Tags}>
          <ul className={classes.Tags__list}>
            {fields.map((tag, i) => {
              return (
                <li className={classes.Tags__tag} key={tag.id}>
                  <input
                    className={classes.Tags__input}
                    type="text"
                    placeholder="Tag"
                    {...register(`tags.${i}.name`)}
                  />
                  <button
                    className={`${classes.Form__btn} ${classes["Form__btn--transparent"]} ${classes.Tags__btn} ${classes["Tags__btn--delete"]}`}
                    type="button"
                    onClick={() => remove(i)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            className={`${classes.Form__btn} ${classes["Form__btn--transparent"]} ${classes.Tags__btn} ${classes["Tags__btn--add"]}`}
            type="button"
            onClick={() => append({ name: "" })}
          >
            Add tag
          </button>
        </div>
      </div>
    </>
  );
}
