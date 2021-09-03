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

  it('Fistula Perianal', () => {
    // Page 1: select gender and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Fistula
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(7);

    // Select Perianal
    selectDropdownOptionOS('pel_m_0802117', 1, true, true);

    // 3rd column options enabled
    elementShouldBeEnabled('pel_m_0803142');
    elementShouldBeEnabled('pel_m_0803145');

    // 4th column elements
    elementShouldBeEnabled('pel_m_080477');
    elementShouldBeEnabled('pel_m_080478');
    elementShouldBeEnabled('pel_m_080484');
    elementShouldBeEnabled('pel_m_080485');

    elementShouldBeEnabled('pel_m_080486');
    elementShouldBeEnabled('pel_m_080487');
    elementShouldBeEnabled('pel_m_080488');
    elementShouldBeEnabled('pel_m_080489');

    // 5th column elements
    elementShouldBeEnabled('pel_m_080572');
    elementShouldBeEnabled('pel_m_080575');
    elementShouldBeEnabled('pel_m_080576');
    elementShouldBeEnabled('pel_m_080577');
    elementShouldBeEnabled('pel_m_080579');

    // Select option in 'Localization of mucosal sinus/fistula opening'
    selectDropdownOptionOS('pel_m_0803142', 1, true, true);

    // Localizer selection
    clickElement('pel_m_0803145');

    cy.get('.ng-valid.ng-star-inserted')
      .shadowFind('tspan')
      .eq(3)
      .click({ force: true });

    cy.get('.ng-valid.ng-star-inserted')
      .shadowFind('.circle')
      .click({ force: true });

    // Select Fistula
    clickElement('pel_m_080478', true, 'radio');
    elementShouldBeEnabled('pel_m_080479');

    // Select 'Additional smaller fistula branches'
    clickElement('pel_m_080479', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080480');

    // Select 'II: Intersphincteric with abscess'
    clickElement('pel_m_080485');
    elementShouldBeEnabled('pel_m_080492');

    // Select 'IV: Transsphincteric with abscess'
    clickElement('pel_m_080487');
    elementShouldBeEnabled('pel_m_080492');

    // Select 'VI: Extrasphincteric'
    clickElement('pel_m_080489');
    elementShouldBeEnabled('pel_m_080492');

    // Enter 1 in the input field 'Maximum diameter of abscess'
    cy.byRRID('pel_m_080492')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080492');

    // Enter 9999 in the input field 'Maximum diameter of abscess'
    cy.byRRID('pel_m_080492').type('9999');
    elementShouldBeValid('pel_m_080492');

    // Enter 1 in the input field 'Length of fistula'
    cy.byRRID('pel_m_080572')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080572');

    // Enter 9999 in the input field 'Length of fistula'
    cy.byRRID('pel_m_080572').type('9999');
    elementShouldBeValid('pel_m_080572');
  });
});
