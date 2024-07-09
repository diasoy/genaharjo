import mongoose, { Schema } from "mongoose";

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: Text,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ArticleModel = mongoose.models.Article || mongoose.model("Articles", ArticleSchema);
export default ArticleModel;