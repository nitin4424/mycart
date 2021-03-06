import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

	private recipes: Recipe[] = [
	new Recipe('A Test Recipe','This is simply a Recipe','/assets/recipe.jpg',[
		 new Ingredient('Meal',1),
         new Ingredient('drink',2)
		]),

	new Recipe('A Recipe','This is  a Recipe','/assets/recipe.jpg',[
         new Ingredient('Biscuit',4),
         new Ingredient('Chocolate',5)
		])
	];
   
	constructor(private slService: ShoppingListService){ }
	
	getRecipes(){
		return this.recipes.slice();
	}

	getRecipe(index: number){
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
         this.slService.addIngredients(ingredients);
	}

}