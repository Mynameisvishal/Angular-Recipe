import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe ?: Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onChange(event:any){
    if(event.target.value === 'To Shopping List')
    this.onAddToShoppingList();
  }

  onAddToShoppingList() {

    console.log('outside addtoShoppingList');
    if(this.recipe){
      console.log('inside addtoShoppingList');
      
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
  }


}
