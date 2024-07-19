import { deleteArticle, getDataArticles } from "@/libs/action";
import Link from "next/link";
import DeleteButton from "./delete";

export default async function TableArticle() {
  const deleteArticleById = deleteArticle;
  const articles = await getDataArticles();
  return (
    <div className="overflow-x-auto mx-20">
      <h1 className="text-3xl font-bold text-center">List Article</h1>
      <Link href="/articles/create" className="btn btn-primary">
        Tambah
      </Link>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Judul</th>
            <th>Content</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {articles?.map((article) => (
            <tr key={article.id}>
              <td className="border px-4 py-2">{article.title}</td>
              <td className="border px-4 py-2">{article.content}</td>
              <td className="border px-4 py-2">{article.author}</td>
              <td>
                <Link href={`articles/edit/${article.id}`}>Edit</Link>
                <DeleteButton id={article.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
