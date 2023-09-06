import { useSelector } from "react-redux";

import { selectUserError } from "../../../entities/User";
import { FormAuth } from "../../../widgets/Forms";
import { TxLink, ErrorMessage } from "../../../shared";

import classes from "./SignInPage.module.scss";

export function SignInPage() {
  const userError = useSelector(selectUserError);

  return (
    <>
      <div>{userError && <ErrorMessage error={userError} />}</div>
      <div className={classes.SignInPage}>
        <h2 className={classes.SignInPage__title}>Sign In</h2>
        <FormAuth formType="sign-in" />
        <p className={classes.SignInPage__text}>
          Don’t have an account?&nbsp;
          <TxLink to="/sign-up" content="Sign Up" />
        </p>
      </div>
    </>
  );
}
