// import { Component, OnInit } from '@angular/core';
// import { Ingredient } from '../shared/ingredient.model';

// @Component({
//   selector: 'app-shopping-list',
//   templateUrl: './shopping-list.component.html',
//   styleUrls: ['./shopping-list.component.css']
// })

// export class ShoppingListComponent implements OnInit {

//   ingredient: Ingredient[]= [
//     new Ingredient('Apple',20),
//     new Ingredient('Banana',50)
//   ];

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple',20),
    new Ingredient('Banana',50)
    ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
