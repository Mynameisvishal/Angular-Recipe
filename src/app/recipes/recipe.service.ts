import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe(
            'Vegetable Salad',
             'This is a healthy vegeterian meal',
             'https://image.shutterstock.com/image-photo/cooking-chefs-hands-preparing-vegetable-600w-1034866882.jpg',
             [
                 new Ingredient('cucmber',2),
                 new Ingredient('carret',5),
                 new Ingredient('califlower',1),
                 new Ingredient('tomato',1),
                 new Ingredient('capsicum',1),
                 new Ingredient('olives',2),
                 new Ingredient('letumes',2)
             ]),
        new Recipe('Chicken Burger',
        'Tasty Chicken burger with two layer of cheese',
        'https://image.shutterstock.com/image-photo/fresh-tasty-burger-isolated-on-600w-1481083205.jpg',
        [
            new Ingredient('Bun',1),
            new Ingredient('chicken',1),
            new Ingredient('cheese',2)
        ])
      ];

      constructor(private slService: ShoppingListService) {}


      recipeSelected = new EventEmitter<Recipe>();

      getRecipes(){
          return this.recipes.slice();
      }

      
    getRecipe(index: number) {
        return this.recipes[index];
    }


      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
} 