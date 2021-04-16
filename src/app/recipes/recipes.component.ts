import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://unsplash.com/photos/iNwCO9ycBlc')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
