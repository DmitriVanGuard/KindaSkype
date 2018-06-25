import 'rxjs';
import { combineEpics } from 'redux-observable';

import searchContactEpic from './searchContactEpic';
import receiveMessageEpic from './receiveMessageEpic';

export default combineEpics(searchContactEpic, receiveMessageEpic);
