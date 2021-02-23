import React, { FC } from 'react';
import Header from './components/header/header';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <div className="max-w-screen-lg m-auto h-screen">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
