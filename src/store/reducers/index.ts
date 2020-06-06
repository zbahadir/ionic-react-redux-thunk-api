import {combineReducers} from 'redux';

import {themeReducer} from './theme.reducer';
import {languageReducer} from './language.reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer
});

export type RootState = ReturnType<typeof rootReducer>;
