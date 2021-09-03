import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, elementShouldBeValid, getAppConfig } from '../../../../shared/service';
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

  it('Chronic inflammatory chronic disease Char I', () => {
    // Page 1: select gender and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Chronic inflammatory chronic disease
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(3);

    // Char I enabled
    // elementShouldBeEnabled('pel_m_080202');

    // Second column items
    elementShouldBeEnabled('pel_m_080271');
    elementShouldBeEnabled('pel_m_080272');
    elementShouldBeEnabled('pel_m_080273');
    elementShouldBeEnabled('pel_m_080274');

    elementShouldBeEnabled('pel_m_080276');
    elementShouldBeEnabled('pel_m_080277');

    // Third column items
    elementShouldBeEnabled('pel_m_080371');
    elementShouldBeEnabled('pel_m_080377');
    elementShouldBeEnabled('pel_m_080378');

    // Fourth column items
    elementShouldBeEnabled('pel_m_080454');
    elementShouldBeEnabled('pel_m_080455');
    elementShouldBeEnabled('pel_m_080456');
    elementShouldBeEnabled('pel_m_080457');
    elementShouldBeEnabled('pel_m_080458');

    // Fifth column items
    elementShouldBeEnabled('pel_m_080552');
    elementShouldBeEnabled('pel_m_080553');
    elementShouldBeEnabled('pel_m_080554');
    elementShouldBeEnabled('pel_m_080556');
    elementShouldBeEnabled('pel_m_080557');
    elementShouldBeEnabled('pel_m_080558');
    elementShouldBeEnabled('pel_m_080559');

    // Select Thickening
    clickElement('pel_m_080371', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080372');
    elementShouldBeEnabled('pel_m_080375');

    // Enter 1 in the input field
    cy.byRRID('pel_m_080372')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080372');

    // Enter 9999 in the input field
    cy.byRRID('pel_m_080372').type('9999');
    elementShouldBeValid('pel_m_080372');

    // Enter 1 in the input field
    cy.byRRID('pel_m_080375')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080375');

    // Enter 9999 in the input field
    cy.byRRID('pel_m_080375').type('9999');
    elementShouldBeValid('pel_m_080375');
  });
});
