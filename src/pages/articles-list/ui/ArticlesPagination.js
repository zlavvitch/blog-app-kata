import { Pagination } from "antd";

export function ArticlesPagination({ currentPage, articlesCount, onChangePage }) {
  return (
    <Pagination
      current={currentPage}
      defaultPageSize={5}
      total={articlesCount}
      onChange={(page) => onChangePage(page)}
      showSizeChanger={false}
    />
  );
}
