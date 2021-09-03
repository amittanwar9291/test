import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import {
  elementShouldBeEnabled,
  elementShouldBeValid,
  getAppConfig,
  selectDropdownOptionOS,
  selectElementByRadioRole,
  selectSliderValueAndCheckIt
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 09 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080107', 'pel_m_090106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Soft tissue Characterization I - I know', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Soft tissue
    clickElement('pel_m_090105', true, 'radio');
    elementShouldBeEnabled('pel_m_090106-1');
    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('pel_m_090107');

    // Select I know
    selectElementByRadioRole(3);

    // 2nd column options
    elementShouldBeEnabled('pel_m_0902165');
    elementShouldBeEnabled('pel_m_0902167');
    elementShouldBeEnabled('pel_m_0902169');
    elementShouldBeEnabled('pel_m_0902171');
    elementShouldBeEnabled('pel_m_0902174');

    // 3rd column options
    elementShouldBeEnabled('pel_m_0903112');
    elementShouldBeEnabled('pel_m_0903113');
    elementShouldBeEnabled('pel_m_0903115');
    elementShouldBeEnabled('pel_m_0903116');

    // 4th column options
    elementShouldBeEnabled('pel_m_0904123');
    elementShouldBeEnabled('pel_m_0904125');

    // 5th column options
    elementShouldBeEnabled('pel_m_090520');
    elementShouldBeEnabled('pel_m_090521');
    elementShouldBeEnabled('pel_m_090522');
    elementShouldBeEnabled('pel_m_090523');
    elementShouldBeEnabled('pel_m_090524');
    elementShouldBeEnabled('pel_m_090525');
    elementShouldBeEnabled('pel_m_090526');
    elementShouldBeEnabled('pel_m_090527');
    elementShouldBeEnabled('pel_m_090528');

    // Select in Localization
    selectDropdownOptionOS('pel_m_0902165', 3, false, true);

    // Input fields Expansion
    // Enter 1 in the input field 'Max. expansion in mm*'
    cy.byRRID('pel_m_0902167')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0902167');

    // Enter 9999 in the input field 'Max. expansion in mm*'
    cy.byRRID('pel_m_0902167').type('9999');
    elementShouldBeValid('pel_m_0902167');

    // Enter 1 in the input field '2nd plane in mm'
    cy.byRRID('pel_m_0902169')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0902169');

    // Enter 9999 in the input field '2nd plane in mm'
    cy.byRRID('pel_m_0902169').type('9999');
    elementShouldBeValid('pel_m_0902169');

    // Enter 1 in the input field '3rd plane in mm'
    cy.byRRID('pel_m_0902171')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0902171');

    // Enter 9999 in the input field '3rd plane in mm'
    cy.byRRID('pel_m_0902171').type('9999');
    elementShouldBeValid('pel_m_0902171');

    // Select from DD1*
    // TODO: change ID when the bug is fixed (bug 21991)
    // selectDropdownOptionOS('pel_m_0902174', 5, true, true); // cannot be selected
    cy.get('.ui-helper-hidden-accessible > .ng-tns-c58-7')
      .click({ force: true })
      .shadowFind('[aria-label="Lipoma"]')
      .click({ force: true });

    // Select Morphology options
    clickElement('pel_m_0903112', true, 'radio');
    clickElement('pel_m_0903113', true, 'radio');
    clickElement('pel_m_0903115', true, 'radio');
    clickElement('pel_m_0903116', true, 'radio');

    // Move slider T1w
    selectSliderValueAndCheckIt('pel_m_0904123', 0, 3);

    // Move slider T2w
    selectSliderValueAndCheckIt('pel_m_0904125', 0, 3);

    // Altered internal structure options
    clickElement('pel_m_090520', true, 'checkbox');
    clickElement('pel_m_090521', true, 'checkbox');
    clickElement('pel_m_090522', true, 'checkbox');
    clickElement('pel_m_090523', true, 'checkbox');
    clickElement('pel_m_090524', true, 'checkbox');
    clickElement('pel_m_090525', true, 'checkbox');
    clickElement('pel_m_090526', true, 'checkbox');
    clickElement('pel_m_090527', true, 'checkbox');
    clickElement('pel_m_090528', true, 'checkbox');
  });
});
