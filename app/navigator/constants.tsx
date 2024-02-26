/**
 * App constants
 * @format
 */

/**
 * App routes constants for define
 * screen key in navigator and use
 * them for navigate to that screen
 */
const Routes = {
  onbording: 'Onbording',
  authTab: 'AuthTab',
  otpVerify: 'OtpVerify',
  Home: 'Home',
  bottomTabBar: 'BottomTabBar',
  SETTING: 'SETTING',
  profile: 'Profile',
  analysis:'Analysis',
  securityScreen:'SecurityScreen',
  newRecordScreen:'NewRecordScreen',
  unlockingScreen:'UnlockingScreen'
};

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

export {Routes, AppSection};
