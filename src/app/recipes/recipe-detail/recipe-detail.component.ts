import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

   recipe ?: Recipe;
   id?:number;
  
   constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {
}
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }


  onChange(event:any){
    if(event.target.value === 'To Shopping List')
    this.onAddToShoppingList();
    if(event.target.value === 'Edit Recipe')
    this.onEditRecipe();
    if(event.target.value === 'Delete Recipe')
    this.onDeleteRecipe();
  }

  onAddToShoppingList() {

    console.log('outside addtoShoppingList');
    if(this.recipe){
      console.log('inside addtoShoppingList');
      
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){

  }

}
