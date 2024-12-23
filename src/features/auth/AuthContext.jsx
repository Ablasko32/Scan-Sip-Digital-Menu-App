import { createContext, useContext, useEffect, useReducer } from "react";

const authContext = createContext();

const startState = {
  userID: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "auth/login":
      return {
        ...state,
        userID: action.payload,
        isAuthenticated: true,
      };
    case "auth/logout":
      return {
        ...state,
        userID: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown auth action type");
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, startState);

  const { userID, isAuthenticated } = state;

  return (
    <authContext.Provider value={{ userID, isAuthenticated, dispatch }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(authContext);
  return context;
}

export default AuthProvider;
