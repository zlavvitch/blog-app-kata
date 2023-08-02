// import { Link } from "react-router-dom";

import { FormProfile } from "../../../widgets/Forms";

import classes from "./ProfilePage.module.scss";

function ProfilePage() {
  return (
    <div className={classes.ProfilePage}>
      <h2 className={classes.ProfilePage__title}>Edit Profile</h2>
      <FormProfile />
    </div>
  );
}

export default ProfilePage;
