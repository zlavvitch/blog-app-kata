import { Tag } from "antd";

const sliced = (str, l) => `${str.slice(0, l)}...`;

export const renderTags = (data) =>
  data.map((tag, index) => {
    const articleTag = tag.length < 6 ? tag : sliced(tag, 6);
    const key = `${tag}-${index}`;
    return <Tag key={key}>{articleTag}</Tag>;
  });
