import RecipeRepository from "../repository/recipeRepository";

class RecipeService{
    get(){
        return RecipeRepository.find({});
    }

    getById(_id){
        return RecipeRepository.findById(_id);
    }

    create(recipe){
        return RecipeRepository.create({...recipe, likes: 0});
    }

    update(_id, recipe){
        return RecipeRepository.findByIdAndUpdate(_id,recipe);
    }

    delete(_id){
        return RecipeRepository.findByIdAndRemove(_id);
    }

    addToFavorites(_id){
        return RecipeRepository.findById(_id)
        .then((recipe)=>{
            const {likes} = recipe;
            return RecipeRepository.findByIdAndUpdate(_id,{likes: likes + 1});
        });
    }

    getByCategory(category){
        category = category.replaceAll("-"," ");
        console.log(category);

        return RecipeRepository.find({category})
        .then(recipes => recipes);
    }

}
export default new RecipeService();