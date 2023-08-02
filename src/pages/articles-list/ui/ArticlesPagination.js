import { Pagination } from "antd";

function ArticlesPagination({ articlesCount, onChangePage }) {
  return (
    <Pagination
      currentPage={1}
      defaultPageSize={5}
      total={articlesCount}
      showSizeChanger={false}
      onChange={(event) => onChangePage(event)}
    />
  );
}

export default ArticlesPagination;
