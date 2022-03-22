import React, { useEffect } from "react";
import Post from "./Post";

//import { useGetPostsQuery } from "../../../api/postsApi";
function Timeline(props) {
  useEffect(() => {
    console.count("timeline tab render");
  });
  return (
    <div>
      {props.isLoading ? (
        <h1>Loading posts!</h1>
      ) : (
        props.posts.map((post, index) => {
          return (
            <Post
              /* {/*author={post.author} */
              createdAt={post.createdAt}
              text={post.text}
              attachements={post.postAttachements}
              teacherFullName={props.teacherFullName}
            />
          );
        })
      )}
    </div>
  );
}

export default Timeline;
