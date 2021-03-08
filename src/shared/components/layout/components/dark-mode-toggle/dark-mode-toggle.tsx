import React, { FC, useState } from 'react';
import styled from 'styled-components';
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

interface DarkModeToggleProps {
  onToggle: (isDarkMode: boolean) => void;
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({
  onToggle: handleToggle,
}) => {
  const [active, setActive] = useState(false);

  const handleChange = () => {
    const activeState = !active;

    setActive(activeState);
    handleToggle(activeState);
  };

  return (
    <ThemeSwitchWrapper>
      <ThemeSwitch htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={active}
          onChange={handleChange}
        />
        <FlashlightWrapper>
          <FlashlightSvg height={75} width={75} isOn={active} />
        </FlashlightWrapper>
      </ThemeSwitch>
    </ThemeSwitchWrapper>
  );
};

export default DarkModeToggle;
