import connectMongoDB from "@/libs/mongodb";
import Article from "@/models/ArticleModels";

export async function POST({req}: { req: any }){
    const {title, content, category, author} = await req.json();
    await connectMongoDB();
}