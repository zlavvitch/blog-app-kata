import { Link } from "react-router-dom";

import classes from "./BtLink.module.scss";

export function BtLink({ to, title, onClick }) {
  let styleBtLink;
  let styleTitle;

  switch (title) {
    case "Sign Up":
      styleBtLink = classes.BtLink;
      styleTitle = classes.BtLink__title;
      break;

    case "Log Out":
      styleBtLink = `${classes.BtLink} ${classes["BtLink--disactive"]}`;
      styleTitle = `${classes.BtLink__title} ${classes["BtLink__title--disactive"]}`;
      break;

    case "Create article":
      styleBtLink = `${classes.BtLink} ${classes["BtLink--special"]}`;
      styleTitle = `${classes.BtLink__title} ${classes["BtLink__title--special"]}`;
      break;

    case "Delete":
      styleBtLink = `${classes.BtLink} ${classes["BtLink--red"]} ${classes["BtLink--sm"]}`;
      styleTitle = `${classes.BtLink__title} ${classes["BtLink__title--red"]} ${classes["BtLink__title--special"]}`;
      break;

    case "Edit":
      styleBtLink = `${classes.BtLink} ${classes["BtLink--sm"]}`;
      styleTitle = `${classes.BtLink__title} ${classes["BtLink__title--special"]}`;
      break;

    default:
      styleBtLink = classes.BtLink;
      styleTitle = classes.BtLink__title;
  }

  return (
    <Link to={to} className={styleBtLink} onClick={onClick}>
      <span className={styleTitle}>{title}</span>
    </Link>
  );
}
