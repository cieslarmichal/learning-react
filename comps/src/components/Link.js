import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames("text-blue-500", "hover:underline", className, currentPath === to && activeClassName);

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };


  return (
    <a className={classes} href={to} onClick={handleClick}>{children}</a>
  );
}

export default Link;
