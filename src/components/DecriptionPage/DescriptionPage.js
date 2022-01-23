import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import "./StyleDescripPage.css";


function DescriptionPage({ history, MoviData }) {
  const [Details, setDetails] = useState({});
  let id = useParams();
  useEffect(() => setDetails(MoviData.find((movi) => movi.link === id.id)), []);

  return (
    <div className="discription">

      <h1>{Details.name}</h1>
      <div className="trailer">{Details.trailer}</div>
      <h3>{Details.description}</h3>

      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          onClick={() => history.goBack()}
          className="btnD"
        >
          go back
        </Button>
      </label>
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className="btnD">
          telechargement
        </Button>
      </label>
    </div>
  );
}

export default DescriptionPage;
