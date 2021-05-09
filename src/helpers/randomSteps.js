const defaultSteps = [
    'Cook 4 cups of white rice',
    'Prepare the vegetables',
    'Pour 2 tbsp. of vegetable oil into a large pan',
    'Cook the vegetables in the pan for 3 minutes',
    'Throw 1/2 lb. of cooked chicken into the pan',
    'Put up to 2 tablespoon (29.6 ml). of sesame oil into the frying pan',
    'Add three eggs to the pan',
    'Test the pasta by tasting it',
    'Salt the water with at least a tablespoon—more is fine. The salty water adds flavor to the pasta',
    'Boil water in a large pot.',
    'Roll the dough',
    'Gather the Noodle Ingredients',
    'Prepare onion, salt, meat, fish, and lemon',
    'Mix all the seasoning',
    'Wait for 15 minutes',
    'Wait for 30 minutes',
    'Wait for an hour',
    'Knead the Dough',
    'Enjoy your food',
]
export const getRandomStep = () => {
    const randomStep = Math.floor(Math.random() * defaultSteps.length)
    return defaultSteps[randomStep]
}
