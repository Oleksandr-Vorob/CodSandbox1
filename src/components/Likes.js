import { useState } from "react";

export default function Likes() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const liking = () => {
    setLikes(likes + 1);
  };
  const disliking = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <>
      <button className="like" onClick={liking}>
        Like
      </button>
      <button className="dislike" onClick={disliking}>
        Dislike
      </button>
      <span className="numbers">
        <div className="nlike">{likes}</div>
        <div className="ndislike">{dislikes}</div>
      </span>
    </>
  );
}
