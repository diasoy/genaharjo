"use client";
import { updateArticle } from "@/libs/action";
import { Article } from "@prisma/client";
import React from "react";
import { useFormState } from "react-dom";

const EditForm = ({ article }: { article: Article }) => {
  const updateArticleById = updateArticle.bind(null, article.id);
  const [state, formAction] = useFormState(updateArticleById, null);

  return (
    <div>
      <h1 className="text-2xl text-center mb-2">Edit Article</h1>
      <div>
        <form action={formAction}>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Title..."
              defaultValue={article.title}
            />
            <div id="title-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.error?.title}</p>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-900"
            >
              Content
            </label>
            <input
              type="content"
              name="content"
              id="content"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Content..."
              defaultValue={article.content}
            />
            <div id="content-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.error?.content}
              </p>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-900"
            >
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Author..."
              defaultValue={article.author}
            />
            <div id="author-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.error?.author}
              </p>
            </div>
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
