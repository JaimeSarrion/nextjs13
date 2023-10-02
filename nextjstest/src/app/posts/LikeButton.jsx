'use client'
import { useState } from "react";
import styled from './posts.module.css'
export default function LikeButton() {
  const [liked, setLiked] = useState("false");
  const handleClick = () => {
    setLiked(!liked);
  };
  return <button className={styled.likeButton} onClick={handleClick}>{liked ? "💟" : "💓"}</button>;
}
