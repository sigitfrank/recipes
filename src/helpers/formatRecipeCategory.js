export default function formatRecipeCategory(categories, category, index) {
    const categoriesLength = categories.length
    if (categoriesLength - 1 == index) return `${category.value}.`
    return `${category.value}, `
}