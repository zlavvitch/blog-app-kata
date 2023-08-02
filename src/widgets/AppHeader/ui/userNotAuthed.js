import { TxLink, BtLink } from "../../../shared";
import classes from "../AppHeader.module.scss";

function UserNotAuthed() {
  return (
    <div className={classes.AppHeader__wrapper}>
      <TxLink to="/sign-in" typeContent="text" content="Sign in" />
      <BtLink to="/sign-up" title="Sign Up" />
    </div>
  );
}

export default UserNotAuthed;
