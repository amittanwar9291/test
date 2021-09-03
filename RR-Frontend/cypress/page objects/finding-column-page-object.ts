export class FindingColumnPageObject {
  private currentFinding: string;
  private findingIndex: number;
  private deleteOptionIndex: number;

  constructor(private buttonId: string, private dropdownIdBase: string) {
    this.findingIndex = 1;
    this.setCurrentFindingRrId();
  }

  activateFinding(findingNumber: number) {
    this.findingIndex = findingNumber;
    this.setCurrentFindingRrId();
    cy.byRRID(this.currentFinding).click();
  }

  selectFindingOptionByName(option: string) {
    this.openFindingList();
    this.clickFindingOptionByName(option);
  }

  selectFindingOptionByAppearance(optionIndex: number) {
    this.openFindingList();
    this.clickFindingOptionByAppearance(optionIndex);
  }

  clickFindingOptionByAppearance(optionIndex: number) {
    cy.get('p-dropdownitem')
      .eq(optionIndex)
      .find('li')
      .click();
    cy.wait(100);
  }

  openFindingList() {
    cy.byRRID(this.currentFinding)
      .find('.ui-dropdown')
      .click();
  }

  addFinding() {
    cy.byRRID(this.buttonId)
      .should('be.visible')
      .click();
    this.findingIndex++;
    this.setCurrentFindingRrId();
  }

  deleteFiding() {
    this.openFindingList();
    if (this.deleteOptionIndex) {
      this.clickFindingOptionByAppearance(this.deleteOptionIndex);
      this.findingIndex--;
    } else {
      cy.get('p-dropdownitem').then($el => {
        this.deleteOptionIndex = $el.length - 1;
        this.setCurrentFindingRrId();
        this.clickFindingOptionByAppearance(this.deleteOptionIndex);
        this.findingIndex--;
        this.setCurrentFindingRrId();
      });
    }
  }

  private clickFindingOptionByName(optionName: string) {
    cy.get('p-dropdownitem')
      .contains(optionName)
      .click();
  }

  private setCurrentFindingRrId() {
    this.currentFinding = this.dropdownIdBase + this.findingIndex;
  }
}
