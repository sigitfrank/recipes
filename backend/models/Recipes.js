import mongoose from "mongoose";
const Schema = mongoose.Schema

const RecipesSchema = new Schema({
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
    // mainImage: {
    //     type: String,
    // },
    // additionalImages: [
    //     {
    //         type: String,
    //     }
    // ],
}, {
    timestamps: true
})

const RECIPES = mongoose.model('recipes', RecipesSchema)

export default RECIPES