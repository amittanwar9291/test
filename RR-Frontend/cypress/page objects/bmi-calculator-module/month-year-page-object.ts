export class MonthYearPageObject {
  private rrId: string;
  constructor(componentRrId: string) {
    this.rrId = componentRrId;
  }

  setDate(monthIndex: number, year: number) {
    cy.byRRID(this.rrId).within(() => {
      cy.byRRID('monthRrId')
        .click()
        .within(() => {
          cy.get('.ui-dropdown-item')
            .eq(monthIndex)
            .click();
        });
      cy.byRRID('yearRrId')
        .click()
        .within(() => {
          cy.get('.ui-dropdown-item')
            .contains(year.toString())
            .click();
        });
    });
  }
}
