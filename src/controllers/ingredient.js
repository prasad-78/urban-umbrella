import Ingredient from "../models/ingredient.js";
import {
  errorResponse,
  successResponseWithData,
  validationErrorWithData,
  createResponse,
  noContentResponse,
} from "../helpers/response.js";
export default class IngredientData {}

export function ingredientList(req, res) {
  Ingredient.find({})
    .then((allIngredients) => {
      return successResponseWithData(res, allIngredients);
    })
    .catch((err) => {
      return errorResponse(res, err);
    });
}

export function ingredientDetail(req, res) {
  Ingredient.findById(req.params.id)
    .then((ingredient) => {
      return successResponseWithData(res, ingredient);
    })
    .catch((err) => {
      return errorResponse(res, err);
    });
}

export function ingredientCreate(req, res) {
  var ingredient = new Ingredient({
    title: req.body.title,
    description: req.body.description,
    unitOfMeasure: req.body.unitOfMeasure,
    fat: req.body.fat,
    energyPerUnit: req.body.energyPerUnit,
    ofWhichSaturates: req.body.ofWhichSaturates,
    carbohydrate: req.body.carbohydrate,
    ofWhichSugars: req.body.ofWhichSugars,
    dietaryFibre: req.body.dietaryFibre,
    protein: req.body.protein,
    cholesterol: req.body.cholesterol,
    sodium: req.body.sodium,
  });

  ingredient
    .save()
    .then((savedIngredient) => {
      return createResponse(res, savedIngredient);
    })
    .catch((err) => {
      return validationErrorWithData(res, err);
    });
}

export function ingredientUpdate(req, res) {
  let body = req.body;
  Ingredient.findByIdAndUpdate(req.params.id, body, {
    new: true,
    upsert: false,
  })
    .then((updatedIngredient) => {
      successResponseWithData(res, updatedIngredient);
    })
    .catch((err) => {
      errorResponse(res, err);
    });
}

export function ingredientDelete(req, res) {
  Ingredient.findById(req.params.id)
    .then((ingredient) => {
      if (ingredient === null) {
        return noContentResponse(res);
      }
      Ingredient.findByIdAndDelete(req.params.id)
        .then(() => {
          return noContentResponse(res);
        })
        .catch((err) => {
          return errorResponse(res, err);
        });
    })
    .catch((err) => {
      return errorResponse(res, err);
    });
}
