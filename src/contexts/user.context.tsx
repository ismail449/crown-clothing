import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { User } from "firebase/auth";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase/firebase.utils";

type UserContextType = {
  currentUser: User | null;
};
type UserProviderProps = {
  children: ReactNode;
};
const INITIAL_STATE = { currentUser: null };
export const UserContext = createContext<UserContextType>(INITIAL_STATE);

type UserActions = "SET_CURRENT_USER";

const userReducer = (
  state: UserContextType,
  action: { type: UserActions; payload: User | null }
) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  const setCurrentUSer = (user: User | null) => {
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  };
  const value = {
    currentUser,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user !== null) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUSer(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
