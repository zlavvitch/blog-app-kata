import { FormAuth } from "../../../widgets/Forms";
import { TxLink } from "../../../shared";

import classes from "./SignUpPage.module.scss";

export function SignUpPage() {
  return (
    <div className={classes.SignUpPage}>
      <h2 className={classes.SignUpPage__title}>Create new account</h2>
      <FormAuth formType="sign-up" />
      <p className={classes.SignUpPage__text}>
        Already have an account?
        <TxLink to="/sign-in" content="Sign In" />
      </p>
    </div>
  );
}
