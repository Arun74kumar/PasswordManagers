/**
 * App constants
 * @format
 */

/**
 * App routes constants for define
 * screen key in navigator and use
 * them for navigate to that screen
 */
const Routes = {};

/**
 * App section constants for
 * switch between app section
 * like: (Auth, Main)
 */
const AppSection = {
  AuthSection: 'AuthSection',
  MainSection: 'MainSection',
};

// Make object not changeable
Object.freeze(Routes);
Object.freeze(AppSection);

export { Routes, AppSection };
