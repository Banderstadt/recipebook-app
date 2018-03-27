// Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const recipebook = require('../models/Recipe');

// GET HTTP method to /recipebook
router.get('/', (req, res) => {
    recipebook.getAllRecipes((err, recipes) => {
        if (err) {
            res.json({
                success: false,
                message: 'Failed to load all lists ' + err
            });
        } else {
            res.write(JSON.stringify({
                success: true,
                recipes: recipes
            }, null, 2));
            res.end();

        }
    });
});

// GET HTTP method to /recipebook/:id
router.get('/:id', (req, res) => {
    let id = req.params.id;
    recipebook.getRecipeById(id, (err, recipe) => {
        if (err) {
            res.json({
                success: false,
                message: 'Failed to load recipe ' + err
            });
        } else {
            res.write(JSON.stringify({
                success: true,
                recipe: recipe
            }, null, 2));
            res.end();

        }
    });
});


// POST HTTP method to /recipebook
router.post('/', (req, res, next) => {
    let newRecipe = new recipebook({
        name: req.body.name,
        ingredients: req.body.ingredients,
        description: req.body.description
    });
    recipebook.addRecipe(newRecipe, (err, recipe) => {
        if (err) {
            res.json({
                success: false,
                message: 'Failed to create a new recipe ' + err
            });

        } else {
            res.json({
                success: true,
                message: 'Added successfully'
            });
        }
    });
});

// DELETE HTTP method to /recipebook. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    // access the parameter which is the id of the item to be deleted
    let id = req.params.id;
    // Call the model method deleteRecipeById
    recipebook.deleteRecipeById(id, (err, recipe) => {
        if (err) {
            res.json({
                success: false,
                message: 'Failed to delete the recipe. ' + err
            });
        } else if (recipe) {
            res.json({
                success: true,
                message: 'Deleted successfully.'
            });
        } else {
            res.json({
                success: false
            });
        }
    });
});

module.exports = router;