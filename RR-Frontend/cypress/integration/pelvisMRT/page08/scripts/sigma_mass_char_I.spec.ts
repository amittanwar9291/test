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

  it('Sigma mass Char I', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Sequences - Individual
    clickElement('uni_x_030109', true);
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Sigma mass
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(2);

    // 2nd column options enabled
    elementShouldBeEnabled('pel_m_080253');
    elementShouldBeEnabled('pel_m_080254');
    elementShouldBeEnabled('pel_m_080255');

    // 3rd column options enabled
    elementShouldBeEnabled('pel_m_080339');
    elementShouldBeEnabled('pel_m_080341');
    elementShouldBeEnabled('pel_m_080344');

    elementShouldBeEnabled('pel_m_080347');
    elementShouldBeEnabled('pel_m_080348');

    // 4th column options enabled
    elementShouldBeEnabled('pel_m_080440');
    elementShouldBeEnabled('pel_m_080441');
    elementShouldBeEnabled('pel_m_080443');
    elementShouldBeEnabled('pel_m_080444');

    elementShouldBeEnabled('pel_m_080446');
    elementShouldBeEnabled('pel_m_080447');
    elementShouldBeEnabled('pel_m_080448');
    elementShouldBeEnabled('pel_m_080449');

    // 5th column options enabled
    elementShouldBeEnabled('pel_m_080534');
    elementShouldBeEnabled('pel_m_080535');
    elementShouldBeEnabled('pel_m_080536');
    elementShouldBeEnabled('pel_m_080539');

    // Enter 1 in the input field 'Size*'
    cy.byRRID('pel_m_080339')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080339');

    // Enter 9999 in the input field 'Size*'
    cy.byRRID('pel_m_080339').type('9999');
    elementShouldBeValid('pel_m_080339');

    // Enter 1 in the input field '2nd plane'
    cy.byRRID('pel_m_080341')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080341');

    // Enter 9999 in the input field '2nd plane'
    cy.byRRID('pel_m_080341').type('9999');
    elementShouldBeValid('pel_m_080341');

    // Enter 1 in the input field '3rd plane'
    cy.byRRID('pel_m_080344')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080344');

    // Enter 9999 in the input field '3rd plane'
    cy.byRRID('pel_m_080344').type('9999');
    elementShouldBeValid('pel_m_080344');

    // Select 'Strong'
    clickElement('pel_m_080534', true, 'radio');
    elementShouldBeEnabled('pel_m_080537');
    elementShouldBeEnabled('pel_m_080538');

    // Select 'Low'
    clickElement('pel_m_080535', true, 'radio');
    elementShouldBeEnabled('pel_m_080537');
    elementShouldBeEnabled('pel_m_080538');
  });
});
