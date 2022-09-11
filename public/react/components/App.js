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
  const [editingPage, setEditingPage] = useState(false);

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
  //   loads in more page data and replaces it in the state
  async function selectPage(page) {
    try {
      const response = await fetch(`${apiURL}/wiki/${page.slug}`);
      const pageData = await response.json();
      setPage(pageData);
    } catch (err) {
      console.log("Error in SinglePageView", err);
    }
  }

  // when the back button is clicked in Single Page View
  function handleBack() {
    setPage(null);
  }

  // when the add page button is clicked in main view
  function handleCreatePage() {
    setCreatingPage(true);
  }
  
  // when the edit article button is clicked in single page view
  async function handleEdit() {
    // create the same view we use to create a page, but pre-populate it
    setEditingPage(true);
  }


  // when the new page is submitted
  async function handleCreatePage(event, article) {
    event.preventDefault();
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

    // when the edited page is submitted
    async function handleUpdatePage(event, article) {
      event.preventDefault();
      try {
        const response = await fetch(`${apiURL}/wiki/${page.slug}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( article )
        });
        const data = await response.json();
        await fetchPages();
        setEditingPage(false);
        setPage(data); // why doesn't this work TODO
      } catch (err) {
        console.log("Error in handleSubmitPage: ", err);
      }
    }
  

  // when the delete article button is clicked
  async function handleDelete(page) {
    {
      const response = await fetch(`${apiURL}/wiki/${page.slug}`, {
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
          <CreatePageView handleSubmitPage={handleCreatePage}/>
        ) : editingPage ? (
          <CreatePageView 
            page={page}
            handleSubmitPage={handleUpdatePage}/>
        ) : page ? (
          <SinglePageView 
            page={page} 
            handleBack={handleBack} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit}
          />
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
