import { Alert } from "antd";

export function ErrorMessage({ error }) {
  return <Alert message={error} type="error" style={{ marginBottom: "10px" }} />;
}
