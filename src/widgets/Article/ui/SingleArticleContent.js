import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import classes from "../Article.module.scss";

export function SingleArticleContent(text) {
  return (
    <div className={[`${classes.Article__body} ${classes["Article__content--single"]}`]}>
      <ReactMarkdown className={classes.Article__markdown} remarkPlugins={[remarkGfm]}>
        {text}
      </ReactMarkdown>
    </div>
  );
}
