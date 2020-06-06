import {INIT_LANGUAGE, SWITCH_LANGUAGE, LanguageActionTypes} from '../types/language.types';

export interface LanguageState {
  lang: any;
}


const initialState: LanguageState = {
  lang: undefined,
};

export function languageReducer(state = initialState, action: LanguageActionTypes): LanguageState {
  switch (action.type) {
    case INIT_LANGUAGE:
    case SWITCH_LANGUAGE:
      return {
        lang: action.payload,
      };
    default:
      return state;
  }
}