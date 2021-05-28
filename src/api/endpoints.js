export const BASE_URL = 'http://localhost:5000'

const AUTH_URL = 'auth'
export const REGISTER_ACCOUNT_URL = `${BASE_URL}/api/${AUTH_URL}/register`
export const ACTIVATE_ACCOUNT_URL = `${BASE_URL}/api/${AUTH_URL}/activate`
export const RESEND_EMAIL_ACTIVATION_URL = `${BASE_URL}/api/${AUTH_URL}/reActivate`

export const LOGIN_URL = `${BASE_URL}/api/${AUTH_URL}/login`
export const GET_LOGIN_URL = `${BASE_URL}/api/${AUTH_URL}/loginData`

export const LOGIN_WITH_GOOGLE_URL = `${BASE_URL}/api/${AUTH_URL}/loginWithGoogle`
export const LOGIN_WITH_FACEBOOK_URL = `${BASE_URL}/api/${AUTH_URL}/loginWithFacebook`

export const LOGOUT_URL = `${BASE_URL}/api/${AUTH_URL}/logout`
export const TOKEN_URL = `${BASE_URL}/api/${AUTH_URL}/token`

const USER_URL = 'user'
export const GET_USERS_URL = `${BASE_URL}/api/${USER_URL}`
export const UPDATE_USER_URL = `${BASE_URL}/api/${USER_URL}`
export const DELETE_USER_URL = `${BASE_URL}/api/${USER_URL}/:id`
