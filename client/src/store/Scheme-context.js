import React, { useState, useEffect } from "react";
import axios from "axios";

const defaultValue = {
  id: "",
  image: "",
  auth: "",
};

const SchemeContext = React.createContext(defaultValue);

export const SchemeProvider = (props) => {
  const [photos, setPhotos] = useState([]);

  const auth = "563492ad6f91700001000001375215ccb4bf48f69ea3b73deeb3ac90";
  const initialURL = "https://api.pexels.com/v1/curated";

  useEffect(() => {
    axios
      .get(initialURL, {
        headers: {
          Accept: "application/json",
          Authorization: auth,
        },
      })
      .then((res) => {
        const data = res.data.photos;
        setPhotos(data);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);

  return (
    <SchemeContext.Provider value={photos}>
      {props.children}
    </SchemeContext.Provider>
  );
};

export default SchemeContext;
