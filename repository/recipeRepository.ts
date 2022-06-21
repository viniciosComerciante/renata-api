import * as mongoose from 'mongoose';
import RecipeSchema from '../models/recipeSchema';

export default mongoose.model('recipe', RecipeSchema);