import React from 'react';
import NavigationItem from './navigation-item';

const NavigationContainer = () => {
  return (
    <ul>
      <NavigationItem name="Home Page" route={'/'} icon={`Home`} />
      <NavigationItem name="Blog" route={'/blog'} icon={`BookOpen`} />
      <NavigationItem name="Uses" route={'/uses'} icon={`Terminal`} />
      <NavigationItem name="Projects" route={'/projects'} icon={`Codepen`} />
      <NavigationItem name="About" route={'/about'} icon={`User`} />
    </ul>
  );
};

export default NavigationContainer;
