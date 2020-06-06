import {get, set} from 'idb-keyval';
// import {Language, LanguageData} from '../../models/language';
// import { Plugins } from '@capacitor/core';
// const { Storage } = Plugins;

export class LanguageService {
  private static instance: LanguageService;
  private language: string | undefined = undefined;

  static getInstance() {
    if (!LanguageService.instance) {
        LanguageService.instance = new LanguageService();
    }
    return LanguageService.instance;
  }
  
  // Lang Add/Update - Store Language Data
  private async switch(lang: any | undefined) {
    this.language = lang;
    try {
      await set('language', lang);
    } catch (err) {
      console.log('err:', err);      
    } 
  }

  async setLanguage(lang: any): Promise<any | undefined> {
    await this.switch(lang);   
    return this.language;
  }
  
  async initLanguagePreference(): Promise<any> {
    try {
     const savedLanguagePreference: string = await get('language');    
     if (savedLanguagePreference !== undefined) {
      this.switch(savedLanguagePreference);
       return savedLanguagePreference;
     }
   } catch (err) {
     return false;
   }
 }


}
