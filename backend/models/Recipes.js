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
    cookTime:{
        type:String,
        required:true
    },
    servePlates:{
        type:String,
        required:true
    },
    categories: [
        {
            type: String,
            required: true
        }
    ],
    ingredients: [
        {
            type: String,
            required: true
        }
    ],
    steps: [
        {
            type: String,
            required: true
        }
    ],
    mainImage: {
        type: String,
    },
    additionalImages: [
        {
            type: String,
        }
    ],
}, {
    timestamps: true
})

const RECIPES = mongoose.model('recipes', RecipesSchema)

export default RECIPES