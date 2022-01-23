import NavBar from "./components/NavBar/NavBar";
import MoviCard from "./components/MoviCard/MoviCard";
import { useState } from "react";
import ModalCard from "./components/Modal/ModalCard";
import MoviData from "./components/MoviData/MoviData";
import "./App.css";
import { Route, Switch } from "react-router";
import DescriptionPage from "./components/DecriptionPage/DescriptionPage";

function App() {
  const [cardList, setcardList] = useState(MoviData);
  const addCard = (Card) => {
    setcardList([Card, ...cardList]);
  };

  const [titleshearch, settitleshearch] = useState("");
  const handleTitle = (input) => {
    settitleshearch(input);
  };

  const [ratingSearch, setratingSearch] = useState(null);
  const handleRating = (input) => {
    setratingSearch(input);
  };

  return (
    <div>
      {/*Methode of rendring*/}
      <Switch>
        {/*Methode of rendring : render method*/}
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <NavBar handleTitle={handleTitle} handleRating={handleRating} />
              <div className="modal">
                <ModalCard addCard={addCard} />
              </div>

              <MoviCard
                cardList={cardList}
                titleshearch={titleshearch}
                ratingSearch={ratingSearch}
                {...props}
              />
            </>
          )}
        />
        <Route
          path="/Description/:id"
          render={(props) => <DescriptionPage MoviData={MoviData} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
