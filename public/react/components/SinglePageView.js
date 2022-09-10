import React, { useEffect, useState } from "react";
import apiURL from "../api";
import { Tags } from './Tags';

export const SinglePageView = ({ page, handleBack }) => {
  const [fullPage, setFullPage] = useState(null);

  useEffect(async () => {
    try {
      const response = await fetch(`${apiURL}/wiki/${page.slug}`);
      const pageData = await response.json();
      setFullPage(pageData);
    } catch (err) {
      console.log("Error in SinglePageView", err);
    }
  }, []);


  // format/shorten some info to display
  //
  let title, author, content, tags, emailLink, createdAt, createdDate;
  if (fullPage) {
    title = fullPage.title;
    author = fullPage.author;
    content = fullPage.content;
    tags = fullPage.tags;
    createdAt = fullPage.createdAt;
    emailLink = <a href={`mailto:${author.email}`}>{author.email}</a>
    const date = new Date(createdAt); 
    createdDate = date.toDateString();
  }

  return fullPage ? (
    <>
      <h1>{title}</h1>
      <p>by {author.name} {emailLink} {createdDate}</p>
      <p><Tags tags={tags} /></p>
      <article className="single-page-view">
        {content}
      </article>
      <button onClick={handleBack}>Back to Wiki List</button>
    </>
  ) : (
    <h1>{page.title}</h1>
  );
};
