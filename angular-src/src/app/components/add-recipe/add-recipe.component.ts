import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  private recipes: Recipe[] = [];
  name: string;
  ingredients: string;
  description: string;

  constructor(private recipeService: RecipeService) {
    console.log('RecipeService Initialized...');
  }

  ngOnInit() {
  }

    public addRecipe(event) {
    event.preventDefault();
    const newRecipe = {
      name: this.name,
      ingredients: this.ingredients,
      description: this.description
    };

    this.recipeService.addRecipe(newRecipe)
      .subscribe(recipe => {
        this.recipes.push(recipe);
        this.name = '';
        this.ingredients = '';
        this.description = '';
      });
  }


  }




