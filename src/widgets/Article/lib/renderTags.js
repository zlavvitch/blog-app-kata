import { Tag } from "antd";

// import { uniqueKey } from "../../../shared";

const sliced = (str, l) => `${str.slice(0, l)}...`;

export const renderTags = (data) => {
  const renderData = data.map((tag, index) => {
    const articleTag = tag.length < 6 ? tag : sliced(tag, 6);
    const key = `${tag}-${index}`;
    return <Tag key={key}>{articleTag}</Tag>;
  });

  const elements = data.length < 0 ? null : renderData;

  return elements;
};
