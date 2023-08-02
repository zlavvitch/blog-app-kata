import { useSelector, useDispatch } from "react-redux";

import { selectUser, logoutUser } from "../../../entities/User";
import { TxLink, BtLink } from "../../../shared";
import classes from "../AppHeader.module.scss";

function UserAuthed() {
  const { username, image } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={classes.AppHeader__wrapper}>
      <BtLink to="/" title="Create article" />
      <TxLink to="/profile" typeContent="text" content={username} />
      <TxLink to="/profile" typeContent="image" image={image} />
      <BtLink to="/" title="Log Out" onClick={() => dispatch(logoutUser())} />
    </div>
  );
}

export default UserAuthed;
