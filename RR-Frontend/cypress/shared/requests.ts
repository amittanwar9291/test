import { HTTPMethods } from './enums';
import { AuthResponse } from '@models/shared/login/auth-response';
import { IAppConfig } from '@interfaces/configs';

export function awaitPutMethod(url: string): Cypress.Chainable<Cypress.WaitXHR> {
  baseRequest(HTTPMethods.PUT, url).as('pagePut');
  return cy.wait('@pagePut');
}

export function awaitPostMethod(url: string): Cypress.Chainable<Cypress.WaitXHR> {
  baseRequest(HTTPMethods.POST, url).as('pagePost');
  return cy.wait('@pagePost');
}

export function awaitGetMethod(url: string): Cypress.Chainable<Cypress.WaitXHR> {
  baseRequest(HTTPMethods.GET, url).as('pageGet');
  return cy.wait('@pageGet');
}

export function getTokenFromSessionStorage(): AuthResponse {
  return JSON.parse(window.sessionStorage.getItem('token'));
}

function baseRequest(method: HTTPMethods, url: string): Cypress.Chainable<Cypress.WaitXHR> {
  const token = getTokenFromSessionStorage();
  return cy.route({
    method,
    url,
    headers: {
      Authorization: 'Bearer ' + token.accessToken
    }
  });
}

export function signIn(config: IAppConfig): Cypress.Chainable<Cypress.Response> {
  return cy.signIn(Cypress.env('username'), Cypress.env('password'), config.baseUrl + config.auth.signIn, config.instituteId);
}
