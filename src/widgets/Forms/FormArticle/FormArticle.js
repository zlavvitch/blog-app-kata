/* eslint-disable react/jsx-props-no-spreading */

import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createArticle, editArticle, selectSingleArticle } from "../../../entities/Article";
import classes from "../Form.module.scss";

import { FormArticleContent } from "./ui";

export function FormArticle({ formType }) {
  const curArticle = useSelector(selectSingleArticle);
  const { title, description, text, tags, slug } = curArticle;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const userIsAuth = useSelector(selectUserIsAuth);

  const defaultFormatTags = (arr) => {
    const newArr = [];
    arr?.map((el) => newArr.push({ name: el }));

    return newArr;
  };

  const formatTags = (data) => {
    let newData = new Set();

    // eslint-disable-next-line array-callback-return, consistent-return
    data.map(({ name }) => {
      if (name) return newData.add(name);
    });

    newData = [...newData];

    return newData;
  };

  const curFormData = {
    mode: "onTouched",
    defaultValues: { title, description, body: text, tags: defaultFormatTags(tags) },
  };
  const formData = { mode: "onTouched", defaultValues: { title: "", description: "", body: "", tags: [" "] } };
  const dataForm = formType === "edit" ? curFormData : formData;

  const {
    register,
    control,
    formState: { errors, isValid },
    // watch,
    reset,
    handleSubmit,
  } = useForm(dataForm);

  const { fields, remove, append } = useFieldArray({
    name: "tags",
    control,
  });

  const onSubmit = (data) => {
    const formatedData = {
      title: data.title,
      description: data.description,
      body: data.body,
      tagList: formatTags(fields),
    };

    const newArticle = { article: formatedData };
    const editedArticle = { slug, article: formatedData };

    reset();

    switch (formType) {
      case "edit":
        dispatch(editArticle(editedArticle));
        break;
      case "new":
        dispatch(createArticle(newArticle));
        break;

      default:
    }

    navigate("/", { replace: true });
  };

  const contentForm = FormArticleContent(register, errors, fields, remove, append);

  return (
    <form className={`${classes.Form} ${classes["Form--article"]}`} onSubmit={handleSubmit(onSubmit)}>
      {contentForm}
      <input className={classes.Form__btn} type="submit" value="Send" disabled={!isValid} />
    </form>
  );
}
