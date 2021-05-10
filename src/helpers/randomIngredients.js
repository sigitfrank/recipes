
const defaultIngredients = [
    'olive oil',
    'fish',
    'meat',
    'corn',
    'onion',
    'banana',
    'lemon',
    'water',
    'salt',
    'pepper',
    'potatoes',
    'Chilli',
    'broccoli',
    'mushroom',
    'red pepper',
    'tomato',
    'carrot',
    'lettuce',
    'celery',
    'tuna',
    'catfish',
    'chicken wings',
]
export const getRandomIngredient = () => {
    const randomIngredient = Math.floor(Math.random() * defaultIngredients.length)
    return defaultIngredients[randomIngredient]
}
