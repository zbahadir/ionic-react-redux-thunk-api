import {combineReducers} from 'redux';

import {themeReducer} from './theme.reducer';
import {languageReducer} from './language.reducer';
import {settingsReducer} from './settings.reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  settings: settingsReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
