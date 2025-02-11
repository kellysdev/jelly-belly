import { useState, useEffect } from "react";
import { SearchBar } from "./components/search-bar/search-bar.js";
import { BeanButton } from "./components/bean-button/bean-button.js";
import { Modal } from "./components/modal/modal.js";
import PulseLoader from "react-spinners/PulseLoader.js";
import "./App.css";

function App() {
  const [beans, setBeans] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [singleBean, setSingleBean] = useState({});
  const [loading, setLoading] = useState(true);

  const override = {
    margin: "100px auto"
  }

  // load list of jelly bean flavors when the app renders
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/beans`)
    .then(response => response.json())
    .then((data) =>{
      setLoading(false);
      setBeans(data.items);
    })
    .catch((error) => console.log("Error fetching beans:", error));
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
    if (beans.length === 0) {
      return console.log("There are no beans.");
    }
    // get a random number, id
    const numOfBeans = beans.length;
    const id = Math.floor(Math.random() * (numOfBeans));

    // pass random number to fetch call
    fetch(`${process.env.REACT_APP_API_URL}/api/beans/${id}`)
    .then((singleBean) => {
      setSingleBean(singleBean);
    });

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
            className="randomButton box-shadow"
            onClick={getRandomBean}
          >
            Find a Random Jelly Bean
          </button>
      </div>

      <PulseLoader
       loading={loading} size={18} margin={10} color="#000" 
       aria-label="Loading Spinner"
       cssOverride={override}
      />

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

      <footer className="disclaimer box-shadow">
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