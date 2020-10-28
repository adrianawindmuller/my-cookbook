import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './step/category.model';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { AppEnviroment } from './app-environment';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private API_Category = 'http://localhost:3000/category';
  private API_Recipe = 'http://localhost:3000/recipe';
  private appEnviroment: AppEnviroment;

  constructor(private http: HttpClient) {
    this.appEnviroment = new AppEnviroment();
  }

  getCategory() {
    return this.http.get<Category[]>(this.appEnviroment.categoryApi.category());
  }

  createNewRecipe(recipe: Recipe) {
    return this.http.post<Recipe>(this.API_Recipe, recipe);
  }

  getRecipe() {
    return this.http.get<Recipe[]>(this.API_Recipe);
  }

  getRecipeId(id: number) {
    return this.http.get<Recipe>(`${this.API_Recipe}/${id}`);
  }

  addFavoriteRecipe(recipe: Recipe) {
    return this.http.put(`${this.API_Recipe}/${recipe.id}`, recipe);
  }

  addRating(recipe: Recipe) {
    return this.http.put(`${this.API_Recipe}/${recipe.id}`, recipe);
  }

  deleteRecipe(id: number) {
    return this.http.delete(`${this.API_Recipe}/${id}`);
  }

  updateRecipe(recipe: Recipe) {
    return this.http.put(`${this.API_Recipe}/${recipe.id}`, recipe);
  }
}