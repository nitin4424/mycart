import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
	new Recipe('A Test Recipe','This is simply a Recipe','/assets/recipe.jpg'),
	new Recipe('A Recipe','This is  a Recipe','/assets/recipe.jpg')
	];

	getRecipe(){
		return this.recipes.slice();
	}

}