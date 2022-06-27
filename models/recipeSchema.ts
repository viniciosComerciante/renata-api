import * as mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
    title: {type: String},
    category: {type: String},
    ingredients: {type: String},
    preparation: {type: String},
    author: {type: String},
    img: {type: String},
    publishDate: {type: Date},
    active: {type: Boolean},
    preparationTime: {type: Number},
    likes: {type: Number}
});


export default RecipeSchema;