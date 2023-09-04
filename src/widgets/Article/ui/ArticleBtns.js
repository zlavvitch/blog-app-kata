import { Popconfirm } from "antd";

import { BtLink } from "../../../shared";
import { deleteArticle } from "../../../entities/Article";
import classes from "../Article.module.scss";

export function ArticleBtns(slug, to, dispatch, navigate) {
  const text = "Are you sure to delete this article?";

  const confirm = () => {
    dispatch(deleteArticle(slug));
    navigate("/", { replace: true });
  };

  return (
    <Popconfirm
      style={{
        width: 70,
        marginLeft: 304,
      }}
      placement="right"
      title={text}
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
    >
      <div className={classes["User-info__btns"]}>
        <BtLink title="Delete" />
        <BtLink title="Edit" to={to} />
      </div>
    </Popconfirm>
  );
}
