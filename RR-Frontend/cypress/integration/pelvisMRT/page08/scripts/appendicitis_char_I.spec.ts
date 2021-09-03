import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, elementShouldBeValid, elementShouldHaveGivenState, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 08 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080108', 'pel_m_080107-');

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

  it('Appendicitis Char I', () => {
    // Page 1: select gender and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    clickElement('pel_m_030510', true, 'checkbox');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Appendicitis
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(4);

    // 3rd column options
    elementShouldBeEnabled('pel_m_080392');
    elementShouldBeEnabled('pel_m_080393');
    elementShouldBeEnabled('pel_m_080394');
    elementShouldBeEnabled('pel_m_080397');
    elementShouldBeEnabled('pel_m_080398');

    // 4th column options enabled
    elementShouldBeEnabled('pel_m_080468');
    elementShouldBeEnabled('pel_m_080469');
    elementShouldBeEnabled('pel_m_080473');

    // 5th column options enabled
    elementShouldBeEnabled('pel_m_080561');
    elementShouldBeEnabled('pel_m_080562');
    elementShouldBeEnabled('pel_m_080566');
    elementShouldBeEnabled('pel_m_080569');
    elementShouldBeEnabled('pel_m_080570');

    // Enter 1 in the input field
    cy.byRRID('pel_m_080291')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080291');

    // Enter 9999 in the input field
    cy.byRRID('pel_m_080291').type('9999');
    elementShouldBeValid('pel_m_080291');

    // Input field enabled
    elementShouldBeEnabled('pel_m_080294');

    // Enter 1 in the input field
    cy.byRRID('pel_m_080294')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080294');

    // Enter 9999 in the input field
    cy.byRRID('pel_m_080294').type('9999');
    elementShouldBeValid('pel_m_080294');

    // Enter 1 in the input field
    cy.byRRID('pel_m_080297')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080297');

    // Enter 9999 in the input field
    cy.byRRID('pel_m_080297').type('9999');
    elementShouldBeValid('pel_m_080297');

    // Cecal wall thickening
    clickElement('pel_m_080394', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080395');
    elementShouldBeEnabled('pel_m_080396');

    // Perityphlitic abscess
    clickElement('pel_m_080562', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080564');

    // Enter 1 in the input field
    cy.byRRID('pel_m_080564')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080564');

    // Enter 9999 in the input field
    cy.byRRID('pel_m_080564').type('9999');
    elementShouldBeValid('pel_m_080564');

    // Peritoneal involvement
    clickElement('pel_m_080566', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080567');
    elementShouldBeEnabled('pel_m_080568');
  });
});
