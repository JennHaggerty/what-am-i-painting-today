import { FC } from "react";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { Switch } from "@heroui/react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <div>
        <Switch onChange={onChange} isSelected={isSSR || theme === "dark"}>
          {({ isSelected }) => (
            <>
              <Switch.Control
                className={`h-[31px] w-[51px] bg-black-500 ${
                  isSelected
                    ? "bg-black-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                    : ""
                }`}
              >
                <Switch.Thumb
                  className={`size-[27px] bg-white shadow-sm ${
                    isSelected ? "ms-[22px] shadow-lg" : ""
                  }`}
                >
                  <Switch.Icon>
                    {isSelected ? <MoonIcon /> : <SunIcon />}
                  </Switch.Icon>
                </Switch.Thumb>
              </Switch.Control>
            </>
          )}
        </Switch>
      </div>
    </>
  );
};
