export const getCurrentUser = state => state.login.currentUser;

export const isUserAuthenticating = state => state.login.isUserAuthenticating;

export const isUserAuthenticated = state => !!state.login.currentUser;
