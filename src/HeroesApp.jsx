import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

import "../public/styles/HeroCard.css";
import "../public/styles/LoginPage.css";
import "../public/styles/Navbar.css";
import "../public/styles/styles.css";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
