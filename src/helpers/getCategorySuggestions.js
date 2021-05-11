const defaultSuggestions = [
    'Dinner',
    'Lunch',
    'Breakfast',
    'Fast Food',
    'Healthy',
    'Protein',
    'Dairy',
    'Grains',
    'Vegetables',
]
export const getCategorySuggestions = (param=null) => {
    if(param) {
        const filteredSuggestion = defaultSuggestions.filter(suggestion => suggestion.includes(param))
        return filteredSuggestion
    }
    return defaultSuggestions
}
