import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { IUser } from "./fetches/fetchSearch";
export default function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <SearchContext.Provider value={
      {
        users: users,
        setUsers: setUsers
      }
    }>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
