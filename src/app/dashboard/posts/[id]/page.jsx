"use client";
import React, { useEffect, useState } from "react";
import styles from './[id].module.css'

function SinglePost({ params }) {
  const [singlePost, setSinglePost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setSinglePost(res);
        setTitle(res.title);
        setDesc(res.body);
        setUserId(res.userId);
        setPostId(res.id);
      });
  }, []);

  const handleEdit = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: singlePost.id,
          title,
          body: desc,
          userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const data = await res.json();
    setSinglePost(data);
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        {
          method: "DELETE",
        }
      );
      setSinglePost({});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.omaigod}>
      <h3 className={styles.h3}>{singlePost.title}</h3>
      <br />
      <p className={styles.p1}>{singlePost.body}</p>
      <br />
      <p className={styles.user}>
        user id: {singlePost.userId} / post id: {singlePost.id}
      </p>
      <br />
      <input
        type="text"
        placeholder={singlePost.title}
        style={{ height: "50px", width: "500px" }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder={singlePost.body}
        style={{ height: "50px", width: "500px" }}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder={singlePost.userId}
        style={{ height: "30px" }}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br /> <br />
      <div className={styles.last}>
        <button className={styles.bt} onClick={handleEdit}>
          edit
        </button>
        <br /> <br />
        <button className={styles.bt} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default SinglePost;
