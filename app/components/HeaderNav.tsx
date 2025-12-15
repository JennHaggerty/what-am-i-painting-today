import Link from "next/link";
import { ThemeSwitch } from "./Icons/ThemeSwitch";
import strings from "../strings";
import { useUser } from "../contexts/UserContext";

const HeaderNav = () => {
  const { user, login, logout, signup } = useUser();

  return (
    <header className="w-full flex justify-between">
      <p className="font-bold text-inherit">{strings.appName}</p>

      <Link color="foreground" href="/">
        {strings.painting}
      </Link>

      <ThemeSwitch />
    </header>
  );
};

export default HeaderNav;
