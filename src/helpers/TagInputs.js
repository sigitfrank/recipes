import React, { useState, useRef } from 'react'
import addRecipeActionTypes from '../action-types/addRecipes/AddRecipes'
import { MdRemoveCircle } from 'react-icons/md'
import '../css/helpers/tagInput.css'
import { getCategorySuggestions } from '../helpers/getCategorySuggestions'
function TagInputs({ data, dispatchInput }) {
    const [inputTitle, setInputTitle] = useState('')
    const [suggestionDisplay, setSuggestionDisplay] = useState('none')
    const inputCategory = useRef(null);

    const stylingSuggestion = {
        display: suggestionDisplay,
    }
    const handleOnChange = (event) => {
        const value = event.target.value
        if (!value)
            setSuggestionDisplay('none')
        if (value) {
            const suggestions = getCategorySuggestions(value)
            if (suggestions.length > 0)
                setSuggestionDisplay('block')
        }
        return setInputTitle(value)
    }

    const removeInput = (event, id) => {
        dispatchInput({ type: addRecipeActionTypes.REMOVE_RECIPE_CATEGORIES, event, payload: id })
    }

    const hiddenSuggestion = () => {
        setTimeout(() => {
            setSuggestionDisplay('none')
        }, 2000);
    }
    const submitInput = (event, suggestion = false) => {
        if (suggestion) {
            dispatchInput({ type: addRecipeActionTypes.SET_RECIPE_CATEGORIES, payload: event.target.textContent })
            inputCategory.current.value = ''
            setSuggestionDisplay('none')
            return setInputTitle('')
        }
        if (event.keyCode === 13) {
            if (!inputTitle) return false
            dispatchInput({ type: addRecipeActionTypes.SET_RECIPE_CATEGORIES, payload: inputTitle })
            event.target.value = ''
            return setInputTitle('')
        }

        // if space
        if (event.keyCode === 32) {
            const cleanInputTitle = inputTitle.replace(/\s+/g, ' ').trim()
            if (!cleanInputTitle) return false
            dispatchInput({ type: addRecipeActionTypes.SET_RECIPE_CATEGORIES, payload: inputTitle })
            event.target.value = ""
            return setInputTitle('')
        }

        // if tab
        if (event.keyCode === 9) {
            if (!inputTitle) return false
            dispatchInput({ type: addRecipeActionTypes.SET_RECIPE_CATEGORIES, payload: inputTitle })
            event.target.value = ''
            setInputTitle('')
            return event.preventDefault()
        }

        // if comma 
        if (event.keyCode === 188) {
            return event.preventDefault()
        }
    }

    const handleSubmit = (event) => {
        submitInput(event)
    }

    const handleSubmitSuggestion = (event) => {
        submitInput(event, true)
    }
    return (<>
        <div className="tag__input_container">
            {
                data.map(inputName => (
                    <div className="tag__input" key={inputName.id}>
                        <span className="tag__input_title">{inputName.value}</span>
                        <span className="tag__input_remove_icon" onClick={(event) => removeInput(event, inputName.id)}><MdRemoveCircle /></span>
                    </div>
                ))
            }
            <div>
                <div className="form-group mx-2">
                    <input
                        type="text"
                        ref={inputCategory}
                        className="form-control"
                        onBlur={() => hiddenSuggestion()}
                        onKeyDown={(event) => handleSubmit(event)}
                        onChange={(event) => handleOnChange(event)}
                        placeholder="ex: Breakfast" />
                    <div className="tag__input_suggestion" style={stylingSuggestion}>
                        {
                            getCategorySuggestions(inputTitle).map((suggestion, i) => (
                                <div
                                    onClick={(event) => handleSubmitSuggestion(event)}
                                    className="tag__input_suggestion_value"
                                    key={i}
                                >{suggestion}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default TagInputs
