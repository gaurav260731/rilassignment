import { Login } from './model/login.model';
import { Action } from '@ngrx/store';


export const ADD_USER = 'ADD_USER';

export function addUserReducer(state: Login[] = [], action) {
  switch (action.type) {
    case ADD_USER:
        return [...state, action.payload];
    default:
        return state;
    }
}
