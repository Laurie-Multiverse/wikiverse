import React from "react";
import { Page } from "./Page";

export const PagesList = ({ pages, selectPage }) => {
  return (
    <>
      {pages.map((page, idx) => {
        return <Page page={page} selectPage={selectPage} key={idx} />;
      })}
    </>
  );
};
