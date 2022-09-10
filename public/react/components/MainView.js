import React from "react";
import { PagesList } from './PagesList';

export function MainView({ pages , selectPage, handleCreatePage}) {

  return (
    <>
      <h1>WikiVerse</h1>
      <h2>Click on an article to read more:</h2>
      <PagesList pages={pages} selectPage={selectPage} />
      <button onClick={handleCreatePage}>Add New Article</button>
    </>
  );
}
