import React, { FC, useState } from "react";
import Layout from "../shared/components/layout";
import DarkModeToggle from "../shared/components/layout/components/dark-mode-toggle/dark-mode-toggle";

const DarkModeTestPage: FC = () => {
  return (
    <Layout>
      <h1 className="dark:text-primary">Dark Mode Test</h1>
      <h2 className="dark:text-subhead">Test your dark mode out here</h2>
      <div>
        <p className="text-warning dark:text-darkWarning">
          This is the warning text
        </p>
      </div>
      <div>
        <p className="text-info dark:text-darkInfo">This is the info text</p>
      </div>
      <div>
        <p className="text-success dark:text-darkSuccess">
          This is the success text
        </p>
      </div>
    </Layout>
  );
};

export default DarkModeTestPage;
