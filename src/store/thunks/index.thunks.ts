import {connect, ConnectedProps} from 'react-redux';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../reducers';

import {initTheme, switchTheme} from './theme.thunks';
import {initLanguage, setLanguage} from './language.thunks';

// Settings
import {Settings} from '../../models/settings';
import {initSettings, updateSettings} from './settings.thunks';

export type RootThunkDispatch = ThunkDispatch<RootState, undefined, Action>;

const mapState = (state: RootState) => ({
  dark: state.theme.dark,
  lang: state.language.lang,
  settings: state.settings.settings, 
});

const mapDispatch = (dispatch: RootThunkDispatch) => ({
  // change theme
  initTheme: () => dispatch(initTheme()),
  switchTheme: () => dispatch(switchTheme()),
  
  // Language
  initLanguage: () => dispatch(initLanguage()),
  setLanguage: (data: any) => dispatch(setLanguage(data)),

  // Settings
  initSettings: () => dispatch(initSettings()),
  updateSettings: (settings: Settings) => dispatch(updateSettings(settings)),

});

export const rootConnector = connect(mapState, mapDispatch);
export type RootProps = ConnectedProps<typeof rootConnector>;
