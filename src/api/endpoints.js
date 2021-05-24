export const BASE_URL = 'http://localhost:5000'

const AUTH_URL = 'auth'
export const REGISTER_ACCOUNT_URL = `${BASE_URL}/api/${AUTH_URL}/register`
export const ACTIVATE_ACCOUNT_URL = `${BASE_URL}/api/${AUTH_URL}/activate`
export const RESEND_EMAIL_ACTIVATION_URL = `${BASE_URL}/api/${AUTH_URL}/reActivate`

export const LOGIN = `${BASE_URL}/api/${AUTH_URL}/login`
export const GET_LOGIN = `${BASE_URL}/api/${AUTH_URL}/login`

export const LOGIN_WITH_GOOGLE = `${BASE_URL}/api/${AUTH_URL}/loginWithGoogle`
export const LOGIN_WITH_FACEBOOK = `${BASE_URL}/api/${AUTH_URL}/loginWithFacebook`

export const LOGOUT = `${BASE_URL}/api/${AUTH_URL}/logout`

const USER_URL = 'user'
export const GET_USERS = `${BASE_URL}/api/${USER_URL}`
export const DELETE_USER = `${BASE_URL}/api/${USER_URL}/:id`
