import { AppProps } from 'next/app';
import { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../shared/styles/global';
import { lightTheme, darkTheme } from '../shared/styles/theme';
import '../shared/styles/global.css';
import DarkModeToggle from '../shared/components/layout/components/dark-mode-toggle/dark-mode-toggle';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <DarkModeToggle onToggle={handleToggle} />
      <GlobalStyles />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};

export default App;
