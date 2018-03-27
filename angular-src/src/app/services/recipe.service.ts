import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Recipe } from '../models/recipe.model';

import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  constructor(
    private http: Http
  ) { }

  private serverApi = 'http://localhost:3000';

  // API: GET /recipebook
  public getAllRecipes(): Observable<Recipe[]> {

    const URI = `${this.serverApi}/recipebook/`;
    return this.http.get(URI)
        .map(res => res.json())
        .map(res => <Recipe[]>res.recipes);
}

// API: GET /recipebook
public getOneRecipe(id): Observable<Recipe[]> {

  const URI = `${this.serverApi}/recipebook/` + id;
  return this.http.get(URI)
      .map(res => res.json())
      .map(res => <Recipe[]>res.recipe);
}


// API: POST /recipebook
public addRecipe(recipe: Recipe) {
  const URI = `${this.serverApi}/recipebook/`;
  const headers = new Headers;
  const body = JSON.stringify({name: recipe.name, ingredients: recipe.ingredients, description: recipe.description});
  console.log(body);
  headers.append('Content-Type', 'application/json');
  return this.http.post(URI, body , {headers: headers})
    .map(res => res.json());
}


}

