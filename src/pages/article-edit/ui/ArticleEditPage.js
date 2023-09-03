import { FormArticle } from "../../../widgets/Forms";

import classes from "./ArticleEditPage.module.scss";

export function ArticleEditPage() {
  return (
    <div className={classes.ArticleEditPage}>
      <h2 className={classes.ArticleEditPage__title}>Edit article</h2>
      <FormArticle formType="edit" />
    </div>
  );
}
