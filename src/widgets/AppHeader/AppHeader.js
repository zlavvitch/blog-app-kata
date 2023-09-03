import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectUserIsAuth, getCurrentUser } from "../../entities/User";
import { TxLink } from "../../shared";

import { UserAuthed, UserNotAuthed } from "./ui";
import classes from "./AppHeader.module.scss";

export function AppHeader() {
  const userIsAuthed = useSelector(selectUserIsAuth);
  const dispatch = useDispatch();
  let headerContent;

  useEffect(() => {
    const myToken = localStorage.getItem("token");

    if (myToken) {
      dispatch(getCurrentUser(myToken));
    }
  }, [dispatch]);

  switch (userIsAuthed) {
    case false:
      headerContent = <UserNotAuthed />;
      break;

    case true:
      headerContent = <UserAuthed />;
      break;

    default:
      headerContent = <UserNotAuthed />;
  }

  return (
    <header className={classes.AppHeader}>
      <TxLink to="/" typeContent="text" content="Realworld Blog" />
      {headerContent}
    </header>
  );
}
