import React, { FC, useState } from 'react';
import Layout from '../shared/components/layout';
import DarkModeToggle from '../shared/components/layout/components/dark-mode-toggle/dark-mode-toggle';

const DarkModeTestPage: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
  };

  return (
    <Layout isDarkMode={isDarkMode}>
      <DarkModeToggle onToggle={handleToggle} />
      <h1 className="text-primary">Dark Mode Test</h1>
      <p className="text-light">Test out dark and light mode here!</p>
      <div>
        <p className="text-warning">This is the warning text</p>
      </div>
      <div>
        <p className="text-info">This is the info text</p>
      </div>
      <div>
        <p className="text-success">This is the success text</p>
      </div>
    </Layout>
  );
};

export default DarkModeTestPage;
