export class BMICalculatorComponent {
  BMICalculatorComponent() {}

  setHeight(height) {
    cy.byRRID('uni_01_003').within(() => {
      cy.get('input')
        .invoke('val', height)
        .trigger('input')
        .click({ force: true });
    });
    return this;
  }

  setWeight(weight) {
    cy.byRRID('uni_01_002').within(() => {
      cy.get('input')
        .invoke('val', weight)
        .trigger('input')
        .click({ force: true });
    });
    return this;
  }

  getBMI() {
    return cy.byRRID('uni_01_004', 'label:First');
  }

  getBMIDescription() {
    return cy.byRRID('cy-current-description-p');
  }
}
