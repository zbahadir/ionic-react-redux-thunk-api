import {RootThunkResult} from './types.thunks';
import {LanguageService} from '../../services/language/language.service';
import {INIT_LANGUAGE, SWITCH_LANGUAGE} from '../types/language.types';

export function initLanguage(): RootThunkResult<Promise<void>> {   
    return async (dispatch, getState) => {
    const Language: any = await LanguageService.getInstance().initLanguagePreference();
      dispatch({type: INIT_LANGUAGE, payload: Language});
    };
  } 

export function setLanguage(lang: any): RootThunkResult<Promise<any>> {  
    return async (dispatch, getState) => {
      const data: any = await LanguageService.getInstance().setLanguage(lang);
        dispatch({type: SWITCH_LANGUAGE, payload: data});
    };
  }

