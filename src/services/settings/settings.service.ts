import {get, set} from 'idb-keyval';

import {Settings} from '../../models/settings';

export class SettingsService {
  private static instance: SettingsService;
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

  settings = {
      theme: 'default',
      language: 'en',
  };

  init(): Promise<Settings> {
    return new Promise<any>(async (resolve) => {
      try {        
        let testset = await get('settings');
        if(!testset) {
          resolve(this.settings);
        } else {
          this.settings = await get('settings');
        }
      } catch (err) {
        console.log('M2');
        resolve(this.settings);
      }          
    });    
  }   
  
  async toupdate(key: any, value: any) {        
    try {
      var NEWSET: any = this.settings;
        NEWSET[key]= value
        await set("settings", NEWSET);
    } catch (err) {
      console.log('err:', err); 
      await set("settings", this.settings);
    } 
  }   
  
  async update(data: any): Promise<any> {
    var set = data.split(":");
    await this.toupdate(set[0], set[1]);
    await this.init();  
    return this.settings;
  }

}
