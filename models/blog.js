const { mongoose, Schema, model } = require("mongoose");

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    coverImageURL: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true});

const Blog = model("Blog", BlogSchema);

module.exports = Blog;