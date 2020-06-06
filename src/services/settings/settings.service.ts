import {get, set} from 'idb-keyval';

import {Settings} from '../../models/settings';

export class SettingsService {
  private static instance: SettingsService;
  private key: string | undefined = undefined;
  private value: string | undefined = undefined;
  private data: any;

  private settings = {
    theme: 'default',
    language: 'en'
  };


  private constructor() {
    // Private constructor, singleton
  }

  static getInstance() {
    if (!SettingsService.instance) {
      SettingsService.instance = new SettingsService();
    }
    return SettingsService.instance;
  }

  getDefaultSettings(): Settings {
    return {
      theme: 'default',
      language: 'en',
    };
  }

  init(): Promise<Settings> {
    return new Promise<any>(async (resolve) => {
      try {        
        this.settings.language = await get('language');
        this.settings.theme = await get('theme');
        resolve(this.settings);
      } catch (err) {
        resolve(this.getDefaultSettings());
      }      
    });
    
  }
   
  
  async toupdate(key: any, value: any) {
    await set(key, value);
    try {
    } catch (err) {
      console.log('err:', err);      
    } 
  }
   
  
  async update(data: any): Promise<any> {
    var set = data.split(":");
    await this.toupdate(set[0], set[1]);
    await this.init();  
    return this.settings;
  }

}
