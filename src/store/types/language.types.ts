// import { Language } from "../../models/language";

export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
export const INIT_LANGUAGE = 'INIT_LANGUAGE';

export interface LanguageActionTypes {
  type: typeof SWITCH_LANGUAGE | typeof INIT_LANGUAGE;
  payload: any;
}
