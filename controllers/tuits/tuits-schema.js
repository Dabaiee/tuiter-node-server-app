import mongoose from 'mongoose';
const schema = mongoose.Schema({
    userName: String,
    handle: String,
    image: String,
    time: String,
    replies: Number,
    retuits: Number,
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes:Number,
}, {collection: 'tuits'});
export default schema;