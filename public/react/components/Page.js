import React from "react";

export const Page = ({page, selectPage}) => {
  return (
    <>
      <h3 className="page-in-list" onClick={ () => selectPage(page)}>
        {page.title}
        </h3>
    </>
  );
};
