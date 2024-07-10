import { useState, useEffect } from "react";

import { getBeans } from "./mock-data.js";
import { SearchBar } from "./components/search-bar/search-bar.js";
import { BeanButton } from "./components/bean-button/bean-button.js";
import { Modal } from "./components/modal/modal.js";
import "./App.css";

function App() {
  const [beans, setBeans] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [singleBean, setSingleBean] = useState({});

  // load list of jelly bean flavors when the app renders
  useEffect(() => {
    setBeans(getBeans);
  }, [])

  // modal handling
  const openModal = () => {;
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // handler for clicking random bean button
  const getRandomBean = () => {
    // get length of list of beans
    let numOfBeans = beans.length;

    // get random number between 1 and numOfBeans
    // let randomNum = Math.floor(Math.random() * (numOfBeans )) + 1;

    // get random number between 0 and numOfBeans for use with mock data:
    let randomNum = Math.floor(Math.random() * (numOfBeans ));

    //from mock data for now:
    let singleBean  = beans[randomNum]
    setSingleBean(singleBean);
    openModal();
  };

  return (
    <div className="App">
      <h1 className="lobster">Jelly Beans</h1>

      <SearchBar 
        onSearchTermChange={(searchInput) => {
          setSearchInput(searchInput);
        }}
        searchInput={searchInput}
      />

      <div className="find-bean-wrapper">
          <h2 className="lobster">or</h2>

          <button 
            className="randomButton"
            onClick={getRandomBean}
          >
            Find a Random Jelly Bean
          </button>
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
            <BeanButton 
              bean={bean} key={bean.beanId} 
              setSingleBean={setSingleBean} openModal={openModal}
              singleBean={singleBean}
            />
          ))
        }
      </div>

      <footer className="disclaimer">
        <p>
          All data in this application and its API are sourced from the official Jelly Belly website. None of the content here is claimed as original; it's all credited to and derived from Jelly Belly's official resources.
        </p>
      </footer>

      <Modal 
        showModal={showModal} closeModal={closeModal} 
        singleBean={singleBean}
      />
      
    </div>
  );
}

export default App;