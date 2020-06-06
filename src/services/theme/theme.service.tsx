import {get, set} from 'idb-keyval';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export class ThemeService {
  private static instance: ThemeService;
  private darkTheme: boolean | undefined = undefined;
  private constructor() {
    // Private constructor, singleton
  }

  static getInstance() {
    if (!ThemeService.instance) {
      ThemeService.instance = new ThemeService();
    }
    return ThemeService.instance;
  }

  isDark(): boolean | undefined {
    return this.darkTheme;
  }

  private async switch(dark: boolean | undefined) {
    this.darkTheme = dark;
    const body: HTMLElement | null = document.querySelector('body');
    if (body) {
      dark ? body.classList.add('dark') : body.classList.remove('dark');
    }

    try {
      await set('dark_mode', dark);
    } catch (err) {
      console.log('err:', err);      
    }
  }

  async switchTheme(): Promise<boolean | undefined> {
    await this.switch(!this.darkTheme);
    return this.darkTheme;
  }

  async initDarkModePreference(): Promise<boolean> {
     try {
      const savedDarkModePreference: boolean = await get('dark_mode');      
      if (savedDarkModePreference !== undefined) {
        this.switch(savedDarkModePreference);
        return savedDarkModePreference;
      }
    } catch (err) {
      this.switch(false);
      return false;
    }

    const darkModePreferenceFromMedia: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    this.switch(darkModePreferenceFromMedia.matches);
    return darkModePreferenceFromMedia.matches;    

  }


}
