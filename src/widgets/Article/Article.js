import { Link } from "react-router-dom";
// import { Tag } from "antd";
import HeartOutlined from "@ant-design/icons/HeartOutlined";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Logo } from "../../shared";
// import UniqueKey from "../../shared/lib/uniqueKey";

import classes from "./Article.module.scss";

function SingleArticleContent(text) {
  return (
    <div className={[`${classes.Article__content} ${classes["Article__content--single"]}`]}>
      <ReactMarkdown className={classes.Article__markdown} remarkPlugins={[remarkGfm]}>
        {text}
      </ReactMarkdown>
    </div>
  );
}

function ArticlesListContent(description) {
  return (
    <div className={classes.Article__content}>
      <p className={classes.Article__text}>{description}</p>
    </div>
  );
}

function Article({ article, content = true }) {
  const { slug, username, title, likesCount, description, imagePath, updatedDate, text } = article;

  // tags,

  const sliced = (str, l) => `${str.slice(0, l)}...`;
  // const wraped = (str) => str.replace(/(?![^\n]{1,32}$)([^\n]{1,32})/g, "$1\n");

  // const renderTags = (data) => {
  //   const TEST = ["wow", "wow", "wow", "wow", "wow"];

  //   const uniqueTags = [...TEST.join(" ").matchAll(/(\w+)\s+\1+/g)];

  //   // .replace(/\b(\w+)\s+\1+\b/g)

  //   console.log(uniqueTags, data.tag);

  //   const rendreData = data.map((tag) => {
  //     const articleTag = tag.length < 6 ? tag : sliced(tag, 6);
  //     return <Tag key={UniqueKey()}>{articleTag}</Tag>;
  //   });
  //   const elements = data.length < 0 ? null : rendreData;

  //   return elements;
  // };

  const articleTitle = title.length < 20 ? title : sliced(title, 20);
  const articleDescription = description.length < 32 ? description : sliced(description, 32);

  // ???
  // const articleText = text.length < 32 ? text : wraped(text);
  const articleText = text;

  // const articleTags = tags.length < 3 ? renderTags(tags) : wraped(tags);

  // console.log(articleText);

  const articleContent = content ? ArticlesListContent(articleDescription) : SingleArticleContent(articleText);

  return (
    <div className={classes.Article}>
      <header className={classes.Article__header}>
        <div className={classes.Title}>
          <div className={classes.Title__wrapper}>
            <Link to={`/articles/${slug}`} className={classes.Title__link}>
              {articleTitle}
            </Link>
            <HeartOutlined />
            <p className={classes.Title__count}>{likesCount}</p>
          </div>
          {/* <Tag>Tag1</Tag> */}
          {/* {renderTags(tags)} */}
        </div>
        <div className={classes["User-info"]}>
          <div className={classes["User-info__wrapper"]}>
            <h3>{username}</h3>
            <p className={classes["User-info__data"]}>{updatedDate}</p>
          </div>
        </div>
        <Logo className={classes.Logo} image={imagePath} />
      </header>
      {articleContent}
    </div>
  );
}

export default Article;
