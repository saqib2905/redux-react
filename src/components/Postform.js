import React, { useEffect, useState } from 'react';

export const Postform = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmitHandler = evt => {
    evt.preventDefault();
    const dataPost = {
      title: title,
      body: body,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPost),
    })
      .then(res => res.json())
      .then(data => console.log('post form dataaaaaa', data));
  };
  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={e => onSubmitHandler(e)}>
        <div>
          <label>Title: </label> <br />
          <input
            type="text"
            name="title"
            placeholder="type the title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>body: </label> <br />
          <textarea
            type="text"
            name="body"
            placeholder="add details"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
