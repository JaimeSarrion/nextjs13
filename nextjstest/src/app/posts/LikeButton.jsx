'use client'
import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState("false");
  const handleClick = () => {
    setLiked(!liked);
  };
  return <button onClick={handleClick}>{liked ? "💟" : "💓"}</button>;
}
