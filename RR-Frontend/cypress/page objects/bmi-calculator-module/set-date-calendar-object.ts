export class SetDateCalendarObject {
  private rrId: string;
  constructor(componentRrId: string) {
    this.rrId = componentRrId;
  }

  setDate(day: number, month: string, year: string) {
    cy.byRRID(this.rrId).within(() => {
      cy.get('.ui-calendar').click({ multiple: true });
      cy.get('.ui-datepicker-month').select(month);
      cy.get('.ui-datepicker-year').select(year);
      cy.get('.ui-datepicker-calendar')
        .find('tbody a')
        .contains(day)
        .click();
    });
  }
}
