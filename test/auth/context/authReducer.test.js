import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const newState = authReducer({ logged: false }, {});

    expect(newState).toEqual({ logged: false });
  });

  test("Login debe de llamar la autentificacion y establecer el user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Prueba",
        id: "123",
      },
    };

    const newState = authReducer({ logged: false }, action);
    expect(newState).toEqual({ logged: true, user: action.payload });
  });

  test("Logout debe de borrar el name del usuario y mostrar el logged en false", () => {
    const state = {
      logged: true,
      payload: {
        logged: true,
        user: { name: "Prueba", id: "123" },
      },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
