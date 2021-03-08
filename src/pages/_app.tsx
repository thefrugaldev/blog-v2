import { AppProps } from 'next/app';
import { FC } from 'react';
import '../shared/styles/global.css';
import DarkModeToggle from '../shared/components/layout/components/dark-mode-toggle/dark-mode-toggle';
import DarkModeProvider from '../lib/state/dark-mode';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <DarkModeProvider>
      <DarkModeToggle />
      <Component {...pageProps} />
    </DarkModeProvider>
  );
};

export default App;
