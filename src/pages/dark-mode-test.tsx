import React, { FC } from 'react';
import Layout from '../shared/components/layout';
import DarkModeToggle from '../shared/components/layout/components/dark-mode-toggle/dark-mode-toggle';

const DarkModeTestPage: FC = () => {
  return (
    <Layout>
      <DarkModeToggle />
      <h1>Test out dark and light mode here!</h1>
    </Layout>
  );
};

export default DarkModeTestPage;
