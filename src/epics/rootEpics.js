import 'rxjs';
import { combineEpics } from 'redux-observable';

import searchContactEpic from './searchContactEpic';

export default combineEpics(searchContactEpic);
