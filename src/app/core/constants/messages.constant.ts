export const MESSAGES = {
  REGISTRATION_SUCCESS: 'Hooray! You have successfully registered.',
  WELCOME_BACK: (username: string) => `Welcome back, ${username}!`,
  LOGOUT_SUCCESS: 'You have been logged out successfully.',
} as const;
