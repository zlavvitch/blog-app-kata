// import { Link } from "react-router-dom";

import { Form } from "../../../widgets/Forms";
import { TxLink } from "../../../shared";

import classes from "./SignInPage.module.scss";

function SignInPage() {
  return (
    <div className={classes.SignInPage}>
      <h2 className={classes.SignInPage__title}>Sign In</h2>
      <Form formType="sign-in" />
      <p className={classes.SignInPage__text}>
        Don’t have an account?&nbsp;
        <TxLink to="/sign-up" content="Sign Up" />
      </p>
    </div>
  );
}

export default SignInPage;

/* <Link to="/sign-up" className={classes.SignInPage__link}>
          Sign Up
        </Link> */
