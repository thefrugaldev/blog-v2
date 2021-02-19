import React, { FC } from 'react';
import NavigationContainer from '../navigation/navigation-container';

const Layout: FC = ({ children }) => {
  return (
    <div className="bg-dark">
      <div className="container mx-auto flex">
        <NavigationContainer />
        <main className="flex-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
