export class NavigationPageObject {
  public static visitPageNumber(page: number): void {
    cy.get('rr-top-navigation a')
      .eq(page - 1)
      .click({ force: true });
  }

  private static getNavigationComponent(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('rr-top-navigation');
  }
}
