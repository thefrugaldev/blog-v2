import React, { FC } from "react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { GiBedLamp } from "react-icons/gi";

// import FlashlightSvg from "../../../../assets/vectors/flashlight";

// const ThemeSwitchWrapper = styled.div`
//   display: flex;
//   align-items: center;

//   em {
//     margin-left: 10px;
//     font-size: 1rem;
//   }
// `;

// const ThemeSwitch = styled.label`
//   display: inline-block;
//   height: 34px;
//   position: absolute;
//   width: 60px;
//   right: 75px;

//   input {
//     display: none;

//     &:checked + .slider {
//       background-color: #66bb6a;

//       &:before {
//         transform: translateX(26px);
//       }
//     }
//   }
// `;

// const FlashlightWrapper = styled.div`
//   margin: 2rem;
//   cursor: pointer;
// `;

const DarkModeToggle: FC = () => {
  const colorModeValue = useColorModeValue("dark", "light");
  const { toggleColorMode } = useColorMode();
  // const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      as={GiBedLamp}
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${colorModeValue} mode`}
      color="current"
      onClick={toggleColorMode}
      bg="transparent"
    />
  );
};

export default DarkModeToggle;
