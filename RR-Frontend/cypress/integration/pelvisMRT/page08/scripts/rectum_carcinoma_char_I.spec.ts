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

  it('Rectum carcinoma Char I', () => {
    // Page 1: select gender and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Rectum carcinoma
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(0);

    // 2nd column options enabled
    elementShouldBeEnabled('pel_m_080206');
    elementShouldBeEnabled('pel_m_080207');
    elementShouldBeEnabled('pel_m_080208');
    elementShouldBeEnabled('pel_m_080209');

    // 4th column elements
    elementShouldBeEnabled('pel_m_080403');
    elementShouldBeEnabled('pel_m_080404');

    // 5th column elements
    elementShouldBeEnabled('pel_m_080503');
    elementShouldBeEnabled('pel_m_080506');
    elementShouldBeEnabled('pel_m_080509');
    elementShouldBeEnabled('pel_m_080510');
    elementShouldBeEnabled('pel_m_080511');

    elementShouldBeEnabled('pel_m_080512');

    // Select 'Upper third'
    clickElement('pel_m_080206', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080216');

    // Select 'Middle third'
    clickElement('pel_m_080207', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080213');

    // Select 'Distance to the pectinate/dentate line'
    clickElement('pel_m_080209', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080210');

    // Enter 1 in the input field  below 'Distance to the pectinate/dentate line'
    cy.byRRID('pel_m_080210')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080210');

    // Enter 9999 in the input field  below 'Distance to the pectinate/dentate line'
    cy.byRRID('pel_m_080210').type('9999');
    elementShouldBeValid('pel_m_080210');

    // Select 'Lower third'
    clickElement('pel_m_080208', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080303');
    elementShouldBeEnabled('pel_m_0803124');

    // Select 'Above'
    clickElement('pel_m_080303', true, 'radio');
    elementShouldBeEnabled('pel_m_080304');

    // Enter 1 in the input field  below 'Above'
    cy.byRRID('pel_m_080304')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080304');

    // Enter 9999 in the input field  below 'Above'
    cy.byRRID('pel_m_080304').type('9999');
    elementShouldBeValid('pel_m_080304');

    // Select 'Below/at same height'
    clickElement('pel_m_0803124', true, 'radio');
    elementShouldBeEnabled('pel_m_0803126');
    elementShouldBeEnabled('pel_m_0803127');
    elementShouldBeEnabled('pel_m_0803128');

    // Select 'Location according to SSL'
    clickElement('pel_m_080404', true, 'radio');
    elementShouldBeEnabled('pel_m_080405');
    selectDropdownOptionOS('pel_m_080405', 2, true, true);

    // Enter 1 in the input field  below 'Maximum tumour diameter'
    cy.byRRID('pel_m_080503')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080503');

    // Enter 9999 in the input field  below 'Maximum tumour diameter'
    cy.byRRID('pel_m_080503').type('9999');
    elementShouldBeValid('pel_m_080503');

    // Enter 1 in the input field  below 'Maximum CC-Expansion'
    cy.byRRID('pel_m_080506')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080506');

    // Enter 9999 in the input field  below 'Maximum CC-Expansion'
    cy.byRRID('pel_m_080506').type('9999');
    elementShouldBeValid('pel_m_080506');
  });
});
