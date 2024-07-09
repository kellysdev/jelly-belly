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

  const getRandomBean = () => {
    // get length of list of beans
    let numOfBeans = beans.length;

    // get random number between 1 and numOfBeans
    // let randomNum = Math.floor(Math.random() * (numOfBeans )) + 1;

    // get random number between 0 and numOfBeans for use with mock data:
    let randomNum = Math.floor(Math.random() * (numOfBeans ));

    //from mock data for now:
    let singleBean  = beans[randomNum]
    console.log(singleBean);
  };

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
          <button onClick={getRandomBean}>Find a Random Jelly Bean</button>
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