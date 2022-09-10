import React, { useState, useEffect } from "react";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { SinglePageView } from "./SinglePageView";
import { MainView } from "./MainView";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(null);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  //
  // UI Callbacks
  //

  // when a page is clicked in the list
  function selectPage(page) {
    console.log("selected page", page);
    setPage(page);
  }

  // when the back button is clicked in Single Page View
  function handleBack() {
    console.log("clicked back button");
    setPage(null);
  }

  return (
    <>
      {
        <>
          <main>
            {page ? (
              <SinglePageView page={page} handleBack={handleBack} />
            ) : (
              // <h1>Hello World</h1>
              <MainView pages={pages} selectPage={selectPage} />
            )}
          </main>
          <footer>© Wikiverse 2022.</footer>
        </>
      }
    </>
  );
};
