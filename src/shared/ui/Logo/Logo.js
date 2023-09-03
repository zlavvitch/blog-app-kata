import LogoUser from "./LogoUser.svg";
import classes from "./Logo.module.scss";

export function Logo({ image }) {
  return <img className={classes.Logo} src={image || LogoUser} alt="Аватар" />;
}
