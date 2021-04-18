import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://image.shutterstock.com/image-photo/cooking-chefs-hands-preparing-vegetable-600w-1034866882.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test','https://image.shutterstock.com/image-photo/cooking-chefs-hands-preparing-vegetable-600w-1034866882.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test','https://image.shutterstock.com/image-photo/cooking-chefs-hands-preparing-vegetable-600w-1034866882.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
