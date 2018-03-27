import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeService } from './services/recipe.service';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    RecipeListComponent,
    ViewRecipeComponent,
  ],
  // Modules go here
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  // All the services go here
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
