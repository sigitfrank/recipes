import mongoose from "mongoose";
const Schema = mongoose.Schema

const RecipesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref:'users',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cookTime: {
        type: String,
        required: true
    },
    servePlates: {
        type: String,
        required: true
    },
    categories: [
        {
            type: Object,
            required: true
        }
    ],
    ingredients: [
        {
            type: Object,
            required: true
        }
    ],
    steps: [
        {
            type: Object,
            required: true
        }
    ],
    mainImage: {
        type: String,
        required: true
    },
    additionalImages:[
        {
            type: Object,
            required: true
        }
    ],
    numOfLikes: {
        type: Number,
        required: true
    },
    numOfComments: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

const RECIPES = mongoose.model('recipes', RecipesSchema)

export default RECIPES