import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test','https://image.shutterstock.com/image-photo/cooking-chefs-hands-preparing-vegetable-600w-1034866882.jpg'),
        new Recipe('A Test Recipe', 'This is simply a test','https://image.shutterstock.com/image-photo/cooking-chefs-hands-preparing-vegetable-600w-1034866882.jpg'),
        new Recipe('A Test Recipe', 'This is simply a test','https://image.shutterstock.com/image-photo/cooking-chefs-hands-preparing-vegetable-600w-1034866882.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      recipeSelected = new EventEmitter<Recipe>();
} 