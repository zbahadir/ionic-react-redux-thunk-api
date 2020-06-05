import {connect, ConnectedProps} from 'react-redux';

import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../reducers';
import {initTheme, switchTheme} from './theme.thunks';

export type RootThunkDispatch = ThunkDispatch<RootState, undefined, Action>;

const mapState = (state: RootState) => ({
  dark: state.theme.dark,
});

const mapDispatch = (dispatch: RootThunkDispatch) => ({
  initTheme: () => dispatch(initTheme()),
  switchTheme: () => dispatch(switchTheme()),
});

export const rootConnector = connect(mapState, mapDispatch);
export type RootProps = ConnectedProps<typeof rootConnector>;
