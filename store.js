import { createStore } from 'redux';
import reducer from './redux/reducer';

export function initializeStore () {
  return createStore(
    reducer,
  )
}
