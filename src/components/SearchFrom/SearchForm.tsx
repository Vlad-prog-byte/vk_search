import "./styles.css";
import { useState } from "react";
import React from "react";
export function SearchForm() {
  const [search, setSearch] = useState<string>('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => setSearch(e.currentTarget.value);
  return (
    <div className="searchForm">
      <form>
        <input type="text" value={search} onChange={onChange}/>
      </form>
    </div>
  );
}
