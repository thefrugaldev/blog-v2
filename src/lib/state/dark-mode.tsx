import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../shared/styles/global';
import { lightTheme, darkTheme } from '../../../theme';

interface DarkModeContextProps {
  isDarkMode: boolean;
  setTheme: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps>(null);

export const useDarkMode = (): DarkModeContextProps =>
  useContext(DarkModeContext);

const DarkModeProvider: FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(() => {
      return localStorage.getItem(`darkMode`) === 'true' || false;
    });
  }, []);

  const setTheme = () => {
    const darkMode = !isDarkMode;

    setIsDarkMode(darkMode);
    localStorage.setItem('darkMode', `${darkMode}`);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <main className={isDarkMode ? 'dark' : 'light'}>{children}</main>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
