import React from "react";
import { Tags } from './Tags';

export const SinglePageView = ({ page, handleBack, handleDelete, handleEdit }) => {

  // format/shorten some info to display
  //
  const {title, author, content, tags, createdAt} = page;
  const emailLink = <a href={`mailto:${author.email}`}>{author.email}</a>
  const createdDate = (new Date(createdAt)).toDateString();

  return (
    <>
      <h1>{title}</h1>
      <p>by {author.name} {emailLink} {createdDate}</p>
      <p><Tags tags={tags} /></p>
      <article className="single-page-view">
        {content}
      </article>
      <div className="buttons">
        <button onClick={handleBack}>Back to Wiki List</button>
        <button onClick={ () => handleEdit() }>Edit Article</button>
        <button onClick={ () => handleDelete(page) }>Delete Article</button>
      </div>
    </>
  )
};
