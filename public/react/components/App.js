import React, { useState, useEffect } from "react";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { SinglePageView } from "./SinglePageView";
import { MainView } from "./MainView";
import { CreatePageView } from "./CreatePageView";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(null);
  const [creatingPage, setCreatingPage] = useState(false);

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
    setPage(page);
  }

  // when the back button is clicked in Single Page View
  function handleBack() {
    setPage(null);
  }

  // when the add page button is clicked in main view
  function handleCreatePage() {
    setCreatingPage(true);
  }

  // when the new page is submitted
  async function handleSubmitPage(event, article) {
    event.preventDefault();
    console.log("TODO the create article posting");
    try {
      const response = await fetch(`${apiURL}/wiki`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( article )
      });
      const data = await response.json();
      await fetchPages();
      setCreatingPage(false);
    } catch (err) {
      console.log("Error in handleSubmitPage: ", err);
    }
  }

  // when the delete article button is clicked
  async function handleDelete(slug) {
    {
      const response = await fetch(`${apiURL}/wiki/${slug}`, {
        method: "DELETE"
      });
      const data = await response.json();
      await fetchPages();
      setPage(null);
    }

  }

  return (
    <>
      <main>
        {creatingPage ? (
          <CreatePageView handleSubmitPage={handleSubmitPage}/>
        ) : page ? (
          <SinglePageView page={page} handleBack={handleBack} handleDelete={handleDelete}/>
        ) : (
          <MainView
            pages={pages}
            selectPage={selectPage}
            handleCreatePage={handleCreatePage}
          />
        )}
      </main>
      <footer>© Wikiverse 2022.</footer>
    </>
  );
};
