import React, { FC } from 'react';
import Layout from '../shared/components/layout';

const UsesPage: FC = () => {
  return (
    <Layout>
      Uses page
      <h1>Current Attribution Requirements:</h1>
      <ul>
        <li>
          <a href="https://iconmonstr.com/">iconmonstr</a> - Not sure if
          required
        </li>
      </ul>
    </Layout>
  );
};

export default UsesPage;
