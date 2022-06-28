import * as express from "express";
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import Database from "./infra/db";

import RecipeController from "./controller/recipeController";

class StartUp{
    public app: express.Application;
    private _db:Database;
    
    constructor() {
        this.app = express();
        this._db = new Database();
        this._db.createConnection();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}))
    }

    routes(){
        this.app.route('/').get((req, res)=>{
            res.send({versao: '0.0.1'})
        })
        this.app.route('/api/v1/recipe').get(RecipeController.get);
        this.app.route('/api/v1/recipe/:id').get(RecipeController.getById);
        this.app.route('/api/v1/recipe').post(RecipeController.create);
        this.app.route('/api/v1/recipe/:id').put(RecipeController.update);
        this.app.route('/api/v1/recipe/:id').delete(RecipeController.delete);
        this.app.route('/api/v1/recipe/add-to-favorites/:id').post(RecipeController.addToFavorites);
        this.app.route('/api/v1/recipe/category/:category').get(RecipeController.getByCategory)
    }
}


export default new StartUp();