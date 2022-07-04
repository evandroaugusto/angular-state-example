import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

type UserState = {
  fullName: string;
  accessToken: string;
  refreshToken: string;
};

const INITIAL_STATE: UserState = {
  fullName: '',
  accessToken: '',
  refreshToken: ''
}

const AUTH_KEY: string = '@STORE/AUTH';

@Injectable()
export class UserService {
  private _userStore$: BehaviorSubject<UserState>;
  private userStore$: Observable<UserState>;

  constructor() { 
    const initialState = this.getStorage() || INITIAL_STATE;

    this._userStore$ = new BehaviorSubject<UserState>(initialState);
    this.userStore$ = this._userStore$.asObservable();
  }

  get fullName(): string {
    return this.state.fullName;
  }

  get $isLogged() {
    return this.userStore$.pipe(
      map(store => !!store.accessToken && !!store.refreshToken)
    )
  }

  setFullName(fullName:string) {
    this.setState({...this.state, fullName: fullName})
  }

  resetState() {
    this.setState({...INITIAL_STATE});
  }

  // ACTIONS
  get state() {
    return this._userStore$.getValue();
  }
    
  private setState(newState: UserState) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(newState));
    this._userStore$.next(newState);
  }

  private getStorage() {
    return JSON.parse(localStorage.getItem(AUTH_KEY) || 'null') ;
  }
}
