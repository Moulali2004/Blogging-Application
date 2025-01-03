const { mongoose, Schema, model } = require("mongoose");

const commentSchema = new Schema({
    content: {
        type: String,
        required: false,
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

}, { timestamps: true});

const Comment = model("Comment", commentSchema);
module.exports = Comment;