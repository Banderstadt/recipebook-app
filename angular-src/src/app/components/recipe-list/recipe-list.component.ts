import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes property which is an array of recipe type
  private recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {
    console.log('RecipeService Initialized...');
  }

  ngOnInit() {
    // Load all recipes on init
    this.loadRecipes();
  }

  public loadRecipes() {

    // Get all recipes from server and update the recipes property
    this.recipeService.getAllRecipes()
        .subscribe(
          response => this.recipes = response
        );
  }

}
