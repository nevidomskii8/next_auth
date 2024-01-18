/**
 * an Array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {String[]}
 * */

export const publicRoutes = [
  "/",
]

/**
 * an Array of routes that are used for authentication
 * These routes will redirect to logged in user to /settings
 * @type {String[]}
 * */

export const authRoutes = [
  "/auth/login",
 "/auth/register",
]



/**
 * the prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication process
 * @type {String}
 * */

export const apiAuthPrefix = "/api/auth"


/**
 * The default redirect path after login
 * @type {String}
 * */

export const DEFAULT_LOGIN_REDIRECT = "/settings"
