import React from 'react';
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

    &::checked + .slider {
      background-color: #66bb6a;

      &:before {
        transform: translateX(26px);
      }
    }
  }

  .slider {
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

const DarkModeToggle = () => {
  const handleChange = () => {
    console.log(`clicked`);
  };

  return (
    <ThemeSwitchWrapper>
      <ThemeSwitch htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={(e) => handleChange(e)}
        />
        <div className="slider round" onClick={handleChange}></div>
        {/* <Slider onClick={handleChange}></Slider> */}
      </ThemeSwitch>
      <em>Enable Dark Mode!</em>
    </ThemeSwitchWrapper>
  );
};

export default DarkModeToggle;
