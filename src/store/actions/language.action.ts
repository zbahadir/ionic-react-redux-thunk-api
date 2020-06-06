import {INIT_LANGUAGE, SWITCH_LANGUAGE, LanguageActionTypes} from '../types/language.types';

export function setLanguage(lang: any): LanguageActionTypes { 
  return {
    type: SWITCH_LANGUAGE,
    payload: lang,
  };
}

export function initLanguage(lang: any): LanguageActionTypes {
    return {
      type: INIT_LANGUAGE,
      payload: lang,
    };
  }
  

