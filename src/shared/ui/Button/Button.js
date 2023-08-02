/* eslint-disable import/prefer-default-export */
import { Link } from "react-router-dom";

import classes from "./Button.module.scss";

export function Button({ title }) {
  return (
    <div className={classes.Button}>
      <Link to="/" className={classes.Button__link}>
        {title}
      </Link>
    </div>
  );
}
