import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import Link from "next/link";
import { ThemeSwitch } from "./Icons/ThemeSwitch";
import { useState } from "react";
import strings from "../strings";
import { useUser } from "../contexts/UserContext";

const HeaderNav = () => {
  const { user, login, logout, signup } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const RenderNavbarItems = () => (
    <>
      {!user ? (
        <>
          <NavbarItem>
            <Button onPress={login}>{strings.login}</Button>
          </NavbarItem>
          <NavbarItem>
            <Button onPress={signup}>{strings.signup}</Button>
          </NavbarItem>
        </>
      ) : (
        <NavbarItem>
          <Button color="danger" onPress={logout}>
            {strings.logout}
          </Button>
        </NavbarItem>
      )}
    </>
  );

  const RenderMenuItems = () => (
    <>
      {!user ? (
        <>
          <NavbarMenuItem>
            <Button onPress={login}>{strings.login}</Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button onPress={signup}>{strings.signup}</Button>
          </NavbarMenuItem>
        </>
      ) : (
        <NavbarMenuItem>
          <Button color="danger" onPress={logout}>
            {strings.logout}
          </Button>
        </NavbarMenuItem>
      )}
    </>
  );

  return (
    <header>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarBrand>
            <p className="font-bold text-inherit">{strings.appName}</p>
            <ThemeSwitch />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              {strings.painting}
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <RenderNavbarItems />
        </NavbarContent>
        <NavbarMenu>
          <RenderMenuItems />
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default HeaderNav;
