import RecipeRepository from "../repository/recipeRepository";

class RecipeService{
    get(){
        return RecipeRepository.find({});
    }

    getById(_id){
        return RecipeRepository.findById(_id);
    }

    create(recipe){
        return RecipeRepository.create(recipe);
    }

    update(_id, recipe){
        return RecipeRepository.findByIdAndUpdate(_id,recipe);
    }

    delete(_id){
        return RecipeRepository.findByIdAndRemove(_id);
    }

}
export default new RecipeService();