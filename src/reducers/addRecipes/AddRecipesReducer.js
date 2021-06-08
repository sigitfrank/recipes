import addRecipeActionTypes from '../../action-types/addRecipes/AddRecipes'
import { defaultError } from '../../constants/error'
import { countStringLength } from '../../helpers/countStringLength'
import { getRandomIngredient } from '../../helpers/randomIngredients'
import { getRandomStep } from '../../helpers/randomSteps'
import { toUpperCase } from '../../helpers/toUpperCase'
import InvalidFeedback from '../../validations/logic/InvalidFeedback'
import toast from "react-hot-toast"
import { toastStyling } from "../../helpers/toast"

const addRecipesReducer = (state = {}, action) => {

    if (action.type === addRecipeActionTypes.SET_RECIPE_TITLE) {
        const titleLength = countStringLength(action.payload)
        if (!action.payload) return InvalidFeedback(state, action.payload, 'title', 'Recipe title cannot be empty')
        if (titleLength < 3) return InvalidFeedback(state, action.payload, 'title', 'Recipe title min 3 characters')
        return {
            ...state, title: {
                value: action.payload,
                error: defaultError
            }
        }
    }

    if (action.type === addRecipeActionTypes.SET_RECIPE_DESCRIPTION) {
        const descriptionLength = countStringLength(action.payload)
        if (!action.payload) return InvalidFeedback(state, action.payload, 'description', 'Recipe description min 20 characters')
        if (descriptionLength < 20) return InvalidFeedback(state, action.payload, 'description', `${20 - descriptionLength} characters left`)
        return {
            ...state, description: {
                value: action.payload,
                error: defaultError
            }
        }
    }

    if (action.type === addRecipeActionTypes.SET_RECIPE_MAIN_IMAGE) {
        return {
            ...state, mainImage: {
                value: action.payload,
                error: defaultError,
                added: true
            }
        }
    }

    if (action.type === addRecipeActionTypes.REMOVE_RECIPE_MAIN_IMAGE) {
        return {
            ...state, mainImage: {
                value: '',
                error: {
                    status: true,
                    message: 'Main image must be added'
                },
                added: false
            }
        }
    }

    if (action.type === addRecipeActionTypes.SET_RECIPE_ADDITIONAL_IMAGES) {
        return {
            ...state, additionalImages: [...state.additionalImages, {
                id: action.payload.id,
                value: action.payload.additionalImage,
                error: defaultError,
                added: true
            }]
        }
    }
    if (action.type === addRecipeActionTypes.REMOVE_RECIPE_ADDITIONAL_IMAGES) {
        const id = action.payload
        const removedAdditonalImages = state.additionalImages.filter(additionalImage => additionalImage.id !== id)

        return {
            ...state, additionalImages: removedAdditonalImages
        }
    }
    if (action.type === addRecipeActionTypes.SET_RECIPE_CATEGORIES) {
        const formatValue = toUpperCase(action.payload)
        if (!formatValue) return {
            ...state,
            categories: {
                ...state.categories,
                error: defaultError
            }
        }
        if (state.categories.category.length > 9) {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    error: {
                        status: true,
                        message: 'You can only add 10 categories'
                    }
                }
            }
        }
        let id = 1;
        if (state.categories.category.length > 0) {
            id = state.categories.category[state.categories.category.length - 1].id + 1
        }

        return {
            ...state, categories: {
                category: [...state.categories.category, {
                    id: id,
                    value: formatValue
                }],
                error: defaultError
            }
        }
    }

    if (action.type === addRecipeActionTypes.REMOVE_RECIPE_CATEGORIES) {
        if (typeof action.event.target.className.baseVal !== 'undefined') {
            const removedCategories = state.categories.category.filter(category => category.id !== action.payload)

            if (removedCategories.length < 1) return {
                ...state, categories: {
                    category: removedCategories,
                    error: {
                        status: true,
                        message: 'At least one category must be added'
                    }
                }
            }

            return {
                ...state, categories: {
                    category: removedCategories,
                    error: defaultError
                }
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
        const currentSteps = state.steps.map(step => {
            if (step.id === action.id) {
                if (!action.payload) {
                    return {
                        ...step,
                        value: action.payload,
                        error: {
                            status: true,
                            message: 'Recipe step cannot be empty'
                        }
                    }
                }
                return {
                    ...step,
                    value: action.payload,
                    error: defaultError
                }
            }
            return { ...step }
        })
        return { ...state, steps: currentSteps, ...state.errors }
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

    if (action.type === addRecipeActionTypes.TOGGLE_EMOJI_INPUT_DESCRIPTION) {
        return {
            ...state, description: {
                ...state.description,
                emoji: !state.description.emoji
            }
        }
    }

    if (action.type === addRecipeActionTypes.SET_EMOJI_DESCRIPTION) {
        const currentDescriptionValue = state.description.value
        return {
            ...state,
            description: {
                ...state.description,
                value: `${currentDescriptionValue} ${action.payload.emoji}`
            }
        }
    }


    if (action.type === addRecipeActionTypes.CHECK_POST_RECIPES) {
        const { title, description, categories, cookTime, servePlates, ingredients, steps, mainImage } = action.payload
        if (!mainImage.value) {
            toast.error('Please fix all the required fields', toastStyling)
            return InvalidFeedback(state, mainImage.value, 'mainImage', 'Main image must be added')
        }
        if (!title.value) {
            toast.error('Please fix all the required fields', toastStyling)
            return InvalidFeedback(state, title.value, 'title', 'Recipe title cannot be empty')
        }
        if (countStringLength(title.value) < 3) {
            toast.error('Please fix all the required fields', toastStyling)
            return InvalidFeedback(state, title.value, 'title', 'Recipe title min 3 characters')
        }
        if (!description.value) {
            toast.error('Please fix all the required fields', toastStyling)
            return InvalidFeedback(state, description.value, 'description', 'Recipe description min 20 characters')
        }
        if (countStringLength(description.value) < 20) {
            toast.error('Please fix all the required fields', toastStyling)
            return InvalidFeedback(state, description.value, 'description', `${20 - countStringLength(description.value)} characters left`)
        }
        if (categories.category.length < 1) {
            toast.error('Please fix all the required fields', toastStyling)
            return {
                ...state, categories: {
                    category: [...state.categories.category],
                    error: {
                        status: true,
                        message: 'At least one category must be added'
                    }
                }
            }
        }
        if (!cookTime.value) {
            toast.error('Please fix all the required fields', toastStyling)
            return InvalidFeedback(state, cookTime.value, 'cookTime', 'Cook time cannot be empty')
        }
        if (!servePlates.value) {
            toast.error('Please fix all the required fields', toastStyling)
            return InvalidFeedback(state, servePlates.value, 'servePlates', 'Serve Plate cannot be empty')
        }
        let checkIngredientsState = true
        const currentIngredients = ingredients.map(ingredient => {
            if (!ingredient.value) {
                checkIngredientsState = false
                return {
                    ...ingredient,
                    value: ingredient.value,
                    error: {
                        status: true,
                        message: 'Recipe ingredient cannot be empty'
                    }
                }

            }
            return {
                ...ingredient,
                value: ingredient.value,
                error: defaultError
            }
        })
        if (!checkIngredientsState) {
            toast.error('Please fix all the required fields', toastStyling)
            return { ...state, ingredients: currentIngredients, ...state.errors }
        }
        let checkStepsState = true
        const currentSteps = steps.map(step => {
            if (!step.value) {
                checkStepsState = false
                return {
                    ...step,
                    value: step.value,
                    error: {
                        status: true,
                        message: 'Recipe step cannot be empty'
                    }
                }

            }
            return {
                ...step,
                value: step.value,
                error: defaultError
            }
        })
        if (!checkStepsState) {
            toast.error('Please fix all the required fields', toastStyling)
            return { ...state, steps: currentSteps, ...state.errors }
        }

        return { ...state, isStateValid: true }

    }


    return state
}

export default addRecipesReducer