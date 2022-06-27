import RecipeService from "../services/recipeService";
import * as HttpStatus from "http-status";
import Helper from "../infra/helper";

class RecipeController {
  get(req, res) {
    RecipeService.get()
      .then((recipe) => Helper.sendResponse(res, HttpStatus.OK, recipe))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  getById(req, res) {
    const _id = req.params.id;
    RecipeService.getById(_id)
      .then((recipe) => Helper.sendResponse(res, HttpStatus.OK, recipe))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  create(req, res) {
    let recipeBody = req.body;
    RecipeService.create(recipeBody)
      .then((recipe) =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Receita cadastrada com Sucesso!"
        )
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  update(req, res) {
    let recipeBody = req.body;
    const _id = req.params.id;

    RecipeService.update(_id, recipeBody)
      .then((recipe) =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          `${recipe.title} Atualizada com Sucesso!`
        )
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  delete(req, res) {
    const _id = req.params.id;

    RecipeService.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, `Notícia deletada com Sucesso`)
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  addToFavorites(req, res){
    const _id = req.params.id;

    RecipeService.addToFavorites(_id)
    .then((recipe)=>{
      Helper.sendResponse(res, HttpStatus.OK, recipe);
    })
    .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  getByCategory(req, res){
    const category = req.params.category;
    RecipeService.getByCategory(category)
    .then((recipes)=>{
      Helper.sendResponse(res, HttpStatus.OK, recipes);
    })
    .catch((error) => console.error.bind(console, `Error ${error}`))

  }



}

export default new RecipeController();
