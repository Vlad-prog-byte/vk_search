import "./styles.css";
import { useContext, useState } from "react";
import React from "react";
import { ContextType, SearchContext } from "../SearchResults/SearchContext";
import { search_name } from "../../fetches/fetchSearch";

export function SearchForm() {
  const [search, setSearch] = useState<string>('');
  const context = useContext<ContextType>(SearchContext);
  const [hasError, setHasError] = useState<boolean>(false);



  const find = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await search_name(search);
      context.setUsers(data);
    } catch (e) {
      setHasError(true);
      context.setUsers([]);
    }
  }

  const onChange = (e: React.FormEvent<HTMLInputElement>) => setSearch(e.currentTarget.value);

  if (hasError) return <h1>Ошибка</h1>;

  return (
    <div className="searchForm">
      <form onSubmit={ find }>
        <input type="text" value={search} onChange={onChange}/>
      </form>
    </div>
  );
}
