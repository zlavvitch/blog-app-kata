/* eslint-disable import/prefer-default-export */
import { Alert } from "antd";

export function ErrorMessage() {
  const text = "У нас вознкили проблемы;(";

  return <Alert message={text} type="error" style={{ marginBottom: "10px" }} />;
}
