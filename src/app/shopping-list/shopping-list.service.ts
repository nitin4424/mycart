import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients : Ingredient[] = [
  new Ingredient('Apple',50),
  new Ingredient('Orange',40),
  ];

  getIngredients(){
  	 return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
  	this.ingredients.push(ingredient);
  	this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    /*for(let ingredient of ingredients){
      this.addIngredients(ingredient);
    }
*/
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

}