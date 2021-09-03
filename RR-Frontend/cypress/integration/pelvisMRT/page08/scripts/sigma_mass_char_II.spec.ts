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

  it('Sigma mass Char II', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Sigma mass
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(2);

    // Char II - 2nd column
    clickElement('pel_m_080323', true);
    elementShouldBeEnabled('pel_m_080257');
    elementShouldBeEnabled('pel_m_080258');
    elementShouldBeEnabled('pel_m_080259');

    elementShouldBeEnabled('pel_m_080261');
    elementShouldBeEnabled('pel_m_080262');

    // 3rd column
    elementShouldBeEnabled('pel_m_080350');
    elementShouldBeEnabled('pel_m_080354');
    elementShouldBeEnabled('pel_m_080358');
    elementShouldBeEnabled('pel_m_080359');

    // 'Free perforation'
    clickElement('pel_m_080262', true, 'radio');
    elementShouldBeEnabled('pel_m_080263');

    // 'Invagination'
    clickElement('pel_m_080350', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080351');
    elementShouldBeEnabled('pel_m_080352');
    elementShouldBeEnabled('pel_m_080353');
    elementShouldBeEnabled('pel_m_080354');
    elementShouldBeEnabled('pel_m_080353');
    elementShouldBeEnabled('pel_m_080354');

    // Stenosis
    clickElement('pel_m_080354', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080355');
    elementShouldBeEnabled('pel_m_080356');
    elementShouldBeEnabled('pel_m_080357');

    // Abscess
    clickElement('pel_m_080359', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080361');

    // Enter 1 in the input field 'Diameter'
    cy.byRRID('pel_m_080361')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080361');

    // Enter 9999 in the input field 'Diameter'
    cy.byRRID('pel_m_080361').type('9999');
    elementShouldBeValid('pel_m_080361');
  });
});
