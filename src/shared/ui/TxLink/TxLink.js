import { Link } from "react-router-dom";

import { Logo } from "../Logo";

import classes from "./TxLink.module.scss";

export function TxLink({ to, content, typeContent, image }) {
  let contentTxLink;

  switch (typeContent) {
    case "image":
      contentTxLink = <Logo image={image} />;
      break;

    case "text":
      contentTxLink = <span className={classes.TxLink__content}>{content}</span>;
      break;

    default:
      contentTxLink = "";
      break;
  }

  return (
    <Link to={to} className={classes.TxLink}>
      {contentTxLink}
    </Link>
  );
}
