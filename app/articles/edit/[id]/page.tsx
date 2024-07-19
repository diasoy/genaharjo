import EditForm from "@/components/articles/edit-form";
import { getArticleById } from "@/libs/action";
import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const article = await getArticleById(id);

    if (!article) {
        notFound();
    }

    return (
        <div>
            <EditForm article={article} />
        </div>
    );
};

export default Page;
