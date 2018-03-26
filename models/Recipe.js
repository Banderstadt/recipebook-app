// Require mongoose package
const mongoose = require('mongoose');

//Define RecipeSchema
const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  ingredients: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

mongoose.model('Recipe', RecipeSchema);

const Recipe = module.exports = mongoose.model('Recipe');


// Recipe.find() returns all the recipes
module.exports.getAllRecipes = (callback) => {
  Recipe.find(callback);
};

// Recipe.findById() returns one recipe by Id
module.exports.getRecipeById = (id, callback) => {
  Recipe.findById(id, callback);
};

// newRecipe.save is used to insert the document into MongoDB
module.exports.addRecipe = (newRecipe, callback) => {
  newRecipe.save(callback);
};

// Here we need to pass an id parameter to Recipe.remove
module.exports.deleteRecipeById = (id, callback) => {
  let query = { _id: id };
  Recipe.remove(query, callback);
}