"use client";

import { useFormState } from "react-dom";
import { saveArticle } from "@/libs/action";

const CreateArticlePage = () => {
  const [state, formAction] = useFormState(saveArticle, null);
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New Article</h1>
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

export default CreateArticlePage;
