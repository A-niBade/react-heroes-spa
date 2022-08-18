import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";

describe("Pruebas en <AppRouter />", () => {
  test("Debe de mostrar el login si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Login")).toBeTruthy();
  });

  test("Debe de mostrar el componente marvel si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC123",
        name: "Prueba",
      },
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText("Marvel Comics").length).toBeGreaterThanOrEqual(
      1
    );
  });
});
