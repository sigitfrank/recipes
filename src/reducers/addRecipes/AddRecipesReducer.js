import addRecipeActionTypes from '../../action-types/addRecipes/AddRecipes'
import { defaultError } from '../../constants/error'
import { getRandomIngredient } from '../../helpers/randomIngredients'
import { getRandomStep } from '../../helpers/randomSteps'
import InvalidFeedback from '../../validations/logic/InvalidFeedback'
const addRecipesReducer = (state = {}, action) => {

    if (action.type === addRecipeActionTypes.SET_RECIPE_TITLE) {
        if (!action.payload) return InvalidFeedback(state, action.payload, 'title', 'Recipe title cannot be empty')
        return {
            ...state, title: {
                value: action.payload,
                error: defaultError
            }
        }
    }

    if (action.type === addRecipeActionTypes.SET_RECIPE_DESCRIPTION) {

        if (!action.payload) return InvalidFeedback(state, action.payload, 'description', 'Recipe description cannot be empty')
        return {
            ...state, description: {
                value: action.payload,
                error: defaultError
            }
        }
    }

    if (action.type === addRecipeActionTypes.SET_RECIPE_MAIN_IMAGE) {
        if (!state.mainImage.added) {
            return {
                ...state, mainImage: {
                    value: action.payload,
                    error: defaultError,
                    added: true
                }
            }
        }
    }
    if (action.type === addRecipeActionTypes.SET_RECIPE_ADDITIONAL_IMAGES) {
        return {
            ...state, additionalImages: [...state.additionalImages, {
                value: action.payload,
                error: defaultError,
                added: true
            }
            ]
        }
    }
    if (action.type === addRecipeActionTypes.SET_RECIPE_CATEGORIES) {
        if (!action.payload) return InvalidFeedback(state, action.payload, 'categories', 'Recipe categories cannot be empty')
        // categories must be array later
        return {
            ...state, categories: {
                value: action.payload,
                error: defaultError
            }
        }
    }
    if (action.type === addRecipeActionTypes.SET_RECIPE_COOK_TIME) {
        if (!action.payload) return InvalidFeedback(state, action.payload, 'cookTime', 'Recipe cook time cannot be empty')
        return {
            ...state, cookTime: {
                value: action.payload,
                error: defaultError
            }
        }
    }
    if (action.type === addRecipeActionTypes.SET_RECIPE_SERVE_PLATE) {
        if (!action.payload) return InvalidFeedback(state, action.payload, 'servePlates', 'Recipe serve plates cannot be empty')
        return {
            ...state, servePlates: {
                value: action.payload,
                error: defaultError
            }
        }
    }
    if (action.type === addRecipeActionTypes.SET_RECIPE_INGREDIENTS) {
        const currentIngredients = state.ingredients.map(ingredient => {
            if (ingredient.id === action.id) {
                if (!action.payload) {
                    return {
                        ...ingredient,
                        value: action.payload,
                        error: {
                            status: true,
                            message: 'Recipe ingredient cannot be empty'
                        }
                    }
                }
                return {
                    ...ingredient,
                    value: action.payload,
                    error: defaultError
                }
            }
            return { ...ingredient }
        })
        return { ...state, ingredients: currentIngredients, ...state.errors }
    }

    if (action.type === addRecipeActionTypes.SET_RECIPE_STEPS) {

    }

    if (action.type === addRecipeActionTypes.ADD_MORE_INGREDIENTS) {
        return {
            ...state, ingredients: [...state.ingredients, {
                id: state.ingredients[state.ingredients.length - 1].id + 1,
                value: '',
                placeholder: getRandomIngredient(),
                error: defaultError
            }]
        }
    }

    if (action.type === addRecipeActionTypes.REMOVE_MORE_INGREDIENTS) {
        if (typeof action.event.target.className.baseVal !== 'undefined') {
            const removedIngredients = state.ingredients.filter(ingredient => ingredient.id !== action.payload)
            return { ...state, ingredients: removedIngredients }
        }
    }

    if (action.type === addRecipeActionTypes.ADD_MORE_STEPS) {
        return {
            ...state, steps: [...state.steps, {
                id: state.steps[state.steps.length - 1].id + 1,
                value: '',
                placeholder: getRandomStep(),
                error: defaultError
            }]
        }
    }

    if (action.type === addRecipeActionTypes.REMOVE_MORE_STEPS) {
        if (typeof action.event.target.className.baseVal !== 'undefined') {
            const removedSteps = state.steps.filter(step => step.id !== action.payload)
            return { ...state, steps: removedSteps }
        }
    }

    return state
}

export default addRecipesReducer