import React, { FC } from 'react';
import NavigationContainer from '../navigation/navigation-container';

const Layout: FC = ({ children }) => {
  return (
    <div className="container mx-auto flex md:text-4xl">
      <NavigationContainer />
      <main className="flex-auto">{children}</main>
    </div>
  );
};

export default Layout;
