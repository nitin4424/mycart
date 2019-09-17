import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
	new Recipe('A Test Recipe','This is simply a Recipe','/assets/recipe.jpg'),
	new Recipe('A Recipe','This is  a Recipe','/assets/recipe.jpg')
	];

  constructor() { }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  //  console.log(this.recipeWasSelected);
  }

  ngOnInit() {
  }

}

