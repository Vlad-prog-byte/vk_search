import { createContext } from "react";
import { IUser } from "../../fetches/fetchSearch";
 



export type ContextType = {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
};

const initialState = {
    users: [],
    setUsers: () => {}
}
export const SearchContext = createContext<ContextType>(initialState);
