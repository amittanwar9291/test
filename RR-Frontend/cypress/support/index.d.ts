declare namespace Cypress {
  interface Chainable {
    signIn(username: string, password: string, instituteId: string, url: string): Chainable<Response>;
    byRRID<E extends Node = HTMLElement>(value: string, options?: string): Chainable<JQuery<HTMLElement>>;
    shadowRRIdFind(parentElement, value: string, options?: string): Chainable<JQuery<HTMLElement>>;
  }
  interface Chainable<Subject> {
    shouldBeEnabled(options?: ShadowEventOptios): Chainable<Subject>;
  }
}
