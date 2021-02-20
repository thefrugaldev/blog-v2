import React, { FC } from 'react';
import Header from './components/header/header';

const Layout: FC = ({ children }) => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
