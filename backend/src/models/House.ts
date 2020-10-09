import { Schema, model } from 'mongoose';

const HouseSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true
    }
});

const thumb = Math.random();

HouseSchema.virtual('thumbnail_url').get(function(this: {thumbnail: string}) {
    return `http://localhost:3333/files/${this.thumbnail}`
})

export default model('House', HouseSchema);