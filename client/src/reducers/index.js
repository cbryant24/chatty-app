import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import user from './users_reducers';
import chat from './chat_reducers';

export default combineReducers({ form, user, chat });