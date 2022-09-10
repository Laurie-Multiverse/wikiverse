import React, { useState } from "react";

export const CreatePageView = ({ handleSubmitPage }) => {
  console.log("CreatePageView");

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

  return (
    <>
      <h1>Add an Article</h1>
      <br />
      <form onSubmit={(e) => 
        handleSubmitPage(e, {title, content, name, email, tags})}>

        <label >Title:
          <input type="text" value={title} size="100" onChange={titleChange} required/>
        </label><br/>

        <label>Tags (optional):
          <input type="text" value={tags} onChange={tagsChange} size="100"/>
        </label><br /><br/>

        <label>Paste article here:</label><br/>
        <textarea rows="10" cols="120" value={content} onChange={contentChange} required/>
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
