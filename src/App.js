import { useState } from "react";

import "./App.css";

function App() {
  const [beans, setBeans] = useState([]);
  const [searchInput, setSearchInput] = useState("");


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
            <BeanButton bean={bean} />
          ))
        }
      </div>
    </div>
  );
}

export default App;