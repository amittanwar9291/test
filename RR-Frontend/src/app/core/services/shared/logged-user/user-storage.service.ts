import { Injectable } from '@angular/core';
import { LoggedUser, UserForStorage } from '@models/shared/user/logged-user-models';
import { some } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  constructor() {}

  prepareAndSetLastUsersList(currentList: UserForStorage[], loggedUser: LoggedUser) {
    if (some(currentList, ['initial', loggedUser.initial])) {
      return;
    } else {
      currentList.push({ initial: loggedUser.initial, username: loggedUser.username, role: loggedUser.role });
      if (currentList.length > 6) {
        currentList = currentList.slice(1);
      }
      this.setLastUsersList(currentList);
    }
  }

  setDefaultList(): LoggedUser[] {
    return [];
  }

  setLastUsersList(users: UserForStorage[]) {
    localStorage.setItem('defaultLoginUsers', JSON.stringify(users));
  }

  getLastUsersList(): UserForStorage[] {
    const lastUsers = JSON.parse(localStorage.getItem('defaultLoginUsers'));
    return lastUsers ? lastUsers : [];
  }
}
