import { useSelector } from "react-redux";

import { selectUserError } from "../../../entities/User";
import { FormAuth } from "../../../widgets/Forms";
import { TxLink, ErrorMessage } from "../../../shared";

import classes from "./SignUpPage.module.scss";

export function SignUpPage() {
  const userError = useSelector(selectUserError);

  return (
    <>
      <div>{userError && <ErrorMessage error={userError} />}</div>
      <div className={classes.SignUpPage}>
        <h2 className={classes.SignUpPage__title}>Create new account</h2>
        <FormAuth formType="sign-up" />
        <p className={classes.SignUpPage__text}>
          Already have an account?
          <TxLink to="/sign-in" content="Sign In" />
        </p>
      </div>
    </>
  );
}
