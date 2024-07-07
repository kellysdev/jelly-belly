import { useState, useEffect } from "react";

import { getBeans } from "./mock-data.js";
import { SearchBar } from "./components/search-bar/search-bar.js";
import { BeanButton } from "./components/bean-button/bean-button.js";
import "./App.css";

function App() {
  const [beans, setBeans] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setBeans(getBeans);
  }, [])


  return (
    <div className="App">
      <h1 className="app-title">Jelly Beans</h1>

      <SearchBar 
        onSearchTermChange={(searchInput) => {
          setSearchInput(searchInput);
        }}
        searchInput={searchInput}
      />

      <div className="find-bean-wrapper">
          <p>OR</p>
          <button>Find a Random Jelly Bean</button>
      </div>

      <div className="bean-list">
        {
          beans.filter((bean) => {
            if (!searchInput) {
              return true;
            } else {
              return bean.flavorName.toLowerCase().includes(searchInput.toLowerCase());
            }
          }).map((bean) => (
            <BeanButton bean={bean} key={bean.beanId} />
          ))
        }
      </div>
    </div>
  );
}

export default App;