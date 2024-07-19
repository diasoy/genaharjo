import { deleteArticle } from "@/libs/action";
import React from "react";

const DeleteButton = ({ id }: { id: number }) => {
  const deleteArticleById = deleteArticle.bind(null, id);
  return (
    <form action={deleteArticleById}>
      <button className="btn btn-error">Delete</button>
    </form>
  );
};

export default DeleteButton;
