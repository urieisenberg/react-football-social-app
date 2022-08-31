import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyle";
import { useTheme } from "../hooks/useTheme";
import Toggle from "../components/Toggle/Toggle";
import Toast from "../components/Toast/Toast";
import Sidebar from "../components/Sidebar/Sidebar";
import Routes from "../features/Routes/Routes";

const Layout = ({ children }) => {
  const [themeMode, themeIcon, themeToggler] = useTheme();

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Toggle onClick={themeToggler}>{themeIcon}</Toggle>
      <AnimatePresence>
        <div className="withSidebar">
          <Sidebar />
          <div>
            <Routes />
          </div>
        </div>
      </AnimatePresence>
      {children}
      <Toast />
    </ThemeProvider>
  );
};

export default Layout;
