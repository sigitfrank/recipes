import { defaultError } from '../../constants/error'
export const initialAddRecipesState = {
    title: {
        value:'',
        error:defaultError
    },
    description: {
        value:'',
        error:defaultError
    },
    mainImage: {
        value:'',
        error:defaultError,
        added:false
    },
    additionalImages: [],
    categories: {
        value:'',
        error:defaultError
    },
    cookTime:  {
        value:0,
        error:defaultError
    },
    servePlates:  {
        value:0,
        error:defaultError
    },
    ingredients: [
        {
            id: 1,
            value: '',
            placeholder: 'olive oil',
            error: {
                status: false,
                message: '',
            }
        },
        {
            id: 2,
            value: '',
            placeholder: 'fresh meat',
            error: {
                status: false,
                message: '',
            }
        },
        {
            id: 3,
            value: '',
            placeholder: 'onion',
            error: {
                status: false,
                message: '',
            }
        },
    ],
    steps: [
        {
            id: 1,
            value: '',
            placeholder: 'Prepare all materials',
            error: {
                status: false,
                message: '',
            }
        },
        {
            id: 2,
            value: '',
            placeholder: 'Cut potatoes into small pieces',
            error: {
                status: false,
                message: '',
            }
        },
        {
            id: 3,
            value: '',
            placeholder: 'Heat water for 5 minutes',
            error: {
                status: false,
                message: '',
            }
        },
    ],
}
