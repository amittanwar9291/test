import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import {
  elementShouldBeEnabled,
  elementShouldBeValid,
  elementShouldHaveGivenState,
  getAppConfig,
  selectDropdownOptionOS
} from '../../../../shared/service';
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

  it('Chronic inflammatory chronic disease Char II', () => {
    // Page 1: select gender and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Chronic inflammatory chronic disease
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(3);

    // Char I enabled
    // elementShouldBeEnabled('pel_m_080202');

    // Char II selected
    clickElement('pel_m_080323', true);

    // Second column items
    elementShouldBeEnabled('pel_m_080280');
    elementShouldBeEnabled('pel_m_080281');
    elementShouldBeEnabled('pel_m_080282');
    elementShouldBeEnabled('pel_m_080284');

    elementShouldBeEnabled('pel_m_080285');
    elementShouldBeEnabled('pel_m_080288');

    // Third column items
    elementShouldBeEnabled('pel_m_080379');
    elementShouldBeEnabled('pel_m_080380');
    elementShouldBeEnabled('pel_m_080381');
    elementShouldBeEnabled('pel_m_080382');
    elementShouldBeEnabled('pel_m_080383');

    elementShouldBeEnabled('pel_m_080387');
    elementShouldBeEnabled('pel_m_080388');

    elementShouldBeEnabled('pel_m_080390');
    elementShouldBeEnabled('pel_m_080391');

    // Fourth column items
    elementShouldBeEnabled('pel_m_080462');

    // Select Mucosa
    clickElement('pel_m_080285', true, 'radio');
    elementShouldBeEnabled('pel_m_080286');
    elementShouldBeEnabled('pel_m_080287');

    // Select Abscess
    clickElement('pel_m_080383', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080385');

    // Enter 1 in the input field
    cy.byRRID('pel_m_080385')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080385');

    // Enter 9999 in the input field
    cy.byRRID('pel_m_080385').type('9999');
    elementShouldBeValid('pel_m_080385');

    // DD 1
    selectDropdownOptionOS('pel_m_080462', 4, true, true);
    elementShouldBeEnabled('pel_m_080463');
    elementShouldBeEnabled('pel_m_080465');
    cy.wait(1000);

    // DD reset
    selectDropdownOptionOS('pel_m_080462', 2, false, true);
    cy.wait(1000);

    // DD 2
    selectDropdownOptionOS('pel_m_080465', 4, false, true);
    elementShouldBeEnabled('pel_m_080466');
  });
});
