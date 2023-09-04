import { Link, useNavigate } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { Logo } from "../../shared";
import { setLike, deleteLike } from "../../entities/Article";
import { selectUserIsAuth, selectUser } from "../../entities/User";

import { SingleArticleContent, ArticleBtns } from "./ui";
import { renderTags } from "./lib/renderTags";
import classes from "./Article.module.scss";

export function Article({ article, articleContent = false }) {
  const [likedLocal, setLikedLocal] = useState(article.liked);
  const [likesCountLocal, setLikesCountLocal] = useState(article.likesCount);
  const userIsAuth = useSelector(selectUserIsAuth);
  const authUserData = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { slug, username, title, tags, description, imagePath, updatedDate, text } = article;

  const sliced = (str, l) => `${str.slice(0, l)}...`;

  const authUsername = authUserData.username;
  const content = articleContent ? SingleArticleContent(text) : null;

  const btns =
    articleContent && userIsAuth && authUsername === username
      ? ArticleBtns(slug, `/articles/${slug}/edit`, dispatch, navigate)
      : null;

  const articleTitle = title.length < 20 ? title : sliced(title, 20);
  const articleDescription = description.length < 32 ? description : sliced(description, 32);
  const stlBtnLike = likedLocal ? `${classes.Article__btn} ${classes["Article__btn--liked"]}` : classes.Article__btn;

  const handleClick = () => {
    if (likedLocal) {
      dispatch(deleteLike(slug));
      setLikesCountLocal(likesCountLocal - 1);
      setLikedLocal(false);
    }

    if (!likedLocal) {
      dispatch(setLike(slug));
      setLikesCountLocal(likesCountLocal + 1);
      setLikedLocal(true);
    }
  };

  return (
    <div className={classes.Article}>
      <header className={classes.Article__header}>
        <div className={classes.Title}>
          <div className={classes.Title__wrapper}>
            <div className={classes.Title__content}>
              <Link to={`/articles/${slug}`} className={classes.Title__link}>
                {articleTitle}
              </Link>
              <button type="button" className={stlBtnLike} onClick={handleClick}>
                {likedLocal ? <HeartFilled style={{ color: "#FF0707" }} /> : <HeartOutlined />}
              </button>
              <p className={classes.Title__count}>{likesCountLocal}</p>
            </div>
            <div>{tags.length < 0 ? null : renderTags(tags)}</div>
          </div>
          <div className={classes.Title__description}>
            <p className={classes.Title__text}>{articleDescription}</p>
          </div>
        </div>
        <div className={classes["User-info"]}>
          <div className={classes["User-info__content"]}>
            <div className={classes["User-info__wrapper"]}>
              <h3>{username}</h3>
              <p className={classes["User-info__data"]}>{updatedDate}</p>
            </div>
            <Logo className={classes.Logo} image={imagePath} />
          </div>
          {btns}
        </div>
      </header>
      {content}
    </div>
  );
}

// const wrapped = (str) => str.replace(/(?![^\n]{1,32}$)([^\n]{1,32})/g, "$1\n");
