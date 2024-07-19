"use server";

import { prisma } from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const ArticleSchema = z.object({
    title: z.string().min(5),
    content: z.string().min(10),
    author: z.string().max(50),
})

export const getDataArticles = async () => {
    try {
        const articles = await prisma.article.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                author: true,
            }
        })
        return articles
    } catch (error) {
        console.error(error)
    }
}

export const saveArticle = async (prevState:any, formData: FormData) => {
    const validatedFields = ArticleSchema.safeParse(
        Object.fromEntries(formData.entries())
    );
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {
        await prisma.article.create({
            data: {
                title: validatedFields.data.title,
                content: validatedFields.data.content,
                author: validatedFields.data.author,
            }
        })
    } catch (error) {
        return { message: "Failed to create new Article" }
    }

    revalidatePath("/articles")
    redirect("/articles")
}

export const getArticleById = async (id: string) => {
    try {
        const article = await prisma.article.findUnique({
            where: { id: parseInt(id, 10) },
        });
        return article;
    } catch (error) {
        console.error(error);
    }
}


export const updateArticle = async(
    id: number,
    prevState: any,
    formData: FormData
) => {
    const validatedFields = ArticleSchema.safeParse(
        Object.fromEntries(formData.entries())
    );
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {
        await prisma.article.update({
            data: {
                title: validatedFields.data.title,
                content: validatedFields.data.content,
                author: validatedFields.data.author,
            },
            where: { id },
        })
    } catch (error) {
        return { message: "Failed to update Article" }
    }
    
    revalidatePath("/articles")
    redirect("/articles")
}

export const deleteArticle = async (id: number) => {
    try {
        await prisma.article.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error)
    }
    
    revalidatePath("/articles")
}