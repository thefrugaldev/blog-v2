import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../../../../lib/state/dark-mode';
import FlashlightSvg from '../../../../assets/vectors/flashlight';

const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;

  em {
    margin-left: 10px;
    font-size: 1rem;
  }
`;

const ThemeSwitch = styled.label`
  display: inline-block;
  height: 34px;
  position: absolute;
  width: 60px;
  right: 75px;

  input {
    display: none;

    &:checked + .slider {
      background-color: #66bb6a;

      &:before {
        transform: translateX(26px);
      }
    }
  }
`;

const FlashlightWrapper = styled.div`
  margin: 2rem;
  cursor: pointer;
`;

const DarkModeToggle: FC = () => {
  const [active, setActive] = useState(false);
  const { setTheme, isDarkMode } = useDarkMode();

  return (
    <ThemeSwitchWrapper>
      <ThemeSwitch htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={isDarkMode}
          onChange={setTheme}
        />
        <FlashlightWrapper>
          <FlashlightSvg height={75} width={75} isOn={isDarkMode} />
        </FlashlightWrapper>
      </ThemeSwitch>
    </ThemeSwitchWrapper>
  );
};

export default DarkModeToggle;
