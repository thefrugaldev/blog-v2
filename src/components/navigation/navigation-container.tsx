import React from 'react';
import NavigationItem from './navigation-item';

const NavigationContainer = () => {
  return (
    <ul>
      <NavigationItem name={'Home'} route={'/'} />
      <NavigationItem name={'Blog'} route={'/blog'} />
      <NavigationItem name={'Uses'} route={'/uses'} />
      <NavigationItem name={'Projects'} route={'/projects'} />
      <NavigationItem name={'About'} route={'/about'} />
    </ul>
  );
};

export default NavigationContainer;
