import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContext = createContext();
export const NewsContextProvider = (props) => {
  const apiKey = "c83000efbe8c48258946721ed8660079";
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=sports&from=2022-10-31&to=2022-11-1&pageSize=18&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data));
    //   .catch((error) => console.log(error));
  }, []);
  //   console.log(data);
  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};