import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

export function resetState(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state:any, action:any) : any {
    switch (action.type) {
      default: 
        return reducer(state, action)
    }
  }
}

export const metaReducers: MetaReducer<State>[] = [resetState] ;
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
