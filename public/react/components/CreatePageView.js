import React, { useEffect, useState } from "react";

// Can also use to update page if a page is provided
export const CreatePageView = ({ page, handleSubmitPage }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tags, setTags] = useState('');

  const titleChange = (event) => setTitle(event.target.value);
  const tagsChange = (event) => setTags(event.target.value);
  const contentChange = (event) => setContent(event.target.value);
  const nameChange = (event) => setName(event.target.value);
  const emailChange = (event) => setEmail(event.target.value);

  useEffect( () => {
    // if a page is provided for us to update, then
    // initialize fields from the provided page
    if (page) {
      setTitle(page.title);
      setContent(page.content);
      setName(page.author.name);
      setEmail(page.author.email);
      // setTags(page.tags); TODO
    }
  } , []);


  return (
    <>
      <h1>{page ? 'Edit' : 'Add'} Article</h1>
      <br />
      <form onSubmit={(e) => 
        handleSubmitPage(e, {title, content, name, email, tags})}>

        <label >Title:
          <input type="text" value={title} size="50" onChange={titleChange} required/>
        </label><br/>

        <label>Tags (optional):
          <input type="text" value={tags} onChange={tagsChange} size="50"/>
        </label><br /><br/>

        <label>Paste article here:</label><br/>
        <textarea rows="10" cols="60" value={content} onChange={contentChange} required/>
        <br /><br />

        <hr /><br/>
        written by<br/>
        <label>Name:
          <input type="text" value={name} size="50" onChange={nameChange} required/>
        </label>

        <label>E-mail:
          <input type="text" value={email} size="50" onChange={emailChange} required/>
        </label><br /><br/>

        <button type="submit">Submit Article</button>
      </form>
    </>
  );
};
