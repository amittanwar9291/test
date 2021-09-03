import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationDataService {
  private token;
  private content;

  constructor() {}

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
