import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormArticle } from "../../../widgets/Forms";
import { selectSingleArticle } from "../../../entities/Article";
import { selectUser } from "../../../entities/User";

import classes from "./ArticleEditPage.module.scss";

export function ArticleEditPage() {
  const navigate = useNavigate();
  const authUserData = useSelector(selectUser);
  const { username } = useSelector(selectSingleArticle);
  const authUsername = authUserData.username;

  let ArticleEditPageContent = (
    <div className={classes.ArticleEditPage}>
      <h2 className={classes.ArticleEditPage__title}>Edit article</h2>
      <FormArticle formType="edit" />
    </div>
  );

  if (authUsername !== username) {
    ArticleEditPageContent = null;
    navigate(-1, { replace: true });
  }

  return ArticleEditPageContent;
}
