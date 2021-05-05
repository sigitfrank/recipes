import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup.string('Must be string').email('Must be email format').required('Must be filled'),
    password:yup.string('Must be string').required('Must be filled')
});