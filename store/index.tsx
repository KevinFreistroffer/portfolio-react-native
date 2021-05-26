import { createStore, combineReducers, applyMiddleware } from 'redux';
import { LoadingState, loadingReducer } from './reducers/loading';
import { UsersState, usersReducer } from './reducers/users'; 
import { LocaleState, localeReducer } from './reducers/locale'; 
import { DrawerState, drawerReducer } from './reducers/drawer'; 
import thunk from 'redux-thunk';

export interface DefaultRootState {
  users: UsersState;
  loading: LoadingState; 
  locale: LocaleState; 
  drawer: DrawerState; 
}

const reducers = combineReducers<DefaultRootState>({
  users: usersReducer,
  loading: loadingReducer,
  locale: localeReducer,
  drawer: drawerReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
