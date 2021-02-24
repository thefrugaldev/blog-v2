import React, { FC, useState } from 'react';
import styled from 'styled-components';

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
  position: relative;
  width: 60px;

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

const Slider = styled.div`
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  &:before {
    background-color: #fff;
    bottom: 4px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
  }

  &.round {
    border-radius: 34px;

    &:before {
      border-radius: 50%;
    }
  }
`;

const DarkModeToggle: FC = () => {
  const [active, setActive] = useState(false);

  const handleChange = () => {
    setActive(!active);
    console.log(active);
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
        <Slider className="slider round"></Slider>
      </ThemeSwitch>
      <em>Enable Dark Mode!</em>
    </ThemeSwitchWrapper>
  );
};

export default DarkModeToggle;
