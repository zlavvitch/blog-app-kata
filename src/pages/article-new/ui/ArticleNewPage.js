import { FormArticle } from "../../../widgets/Forms";

import classes from "./ArticleNewPage.module.scss";

export function ArticleNewPage() {
  return (
    <div className={classes.ArticleNewPage}>
      <h2 className={classes.ArticleNewPage__title}>Create new article</h2>
      <FormArticle formType="new" />
    </div>
  );
}
