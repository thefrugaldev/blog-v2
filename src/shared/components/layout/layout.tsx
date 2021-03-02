import React, { FC } from 'react';
import Header from './components/header/header';

interface LayoutProps {
  isDarkMode?: boolean;
}

const Layout: FC<LayoutProps> = ({ isDarkMode, children }) => {
  return (
    <div className={`${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="max-w-screen-lg m-auto h-screen">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
