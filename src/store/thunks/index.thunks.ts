import {connect, ConnectedProps} from 'react-redux';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../reducers';

import {initTheme, switchTheme} from './theme.thunks';
import {initLanguage, setLanguage} from './language.thunks';

export type RootThunkDispatch = ThunkDispatch<RootState, undefined, Action>;

const mapState = (state: RootState) => ({
  dark: state.theme.dark,
  lang: state.language.lang,
});

const mapDispatch = (dispatch: RootThunkDispatch) => ({
  // change theme
  initTheme: () => dispatch(initTheme()),
  switchTheme: () => dispatch(switchTheme()),
  
  initLanguage: () => dispatch(initLanguage()),
  setLanguage: (data: any) => dispatch(setLanguage(data)),
});

export const rootConnector = connect(mapState, mapDispatch);
export type RootProps = ConnectedProps<typeof rootConnector>;
