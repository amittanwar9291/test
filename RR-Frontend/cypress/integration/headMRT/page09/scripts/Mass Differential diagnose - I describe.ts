import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  elementShouldBeValid,
  elementShouldHaveGivenState,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValue
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { headMRTRoutes } from '@environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 09 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_CerebrospinalFluidSpace.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Differential diagnosis - I describe', () => {
    // Go to Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Mass from the dropdown menu
    clickElement('hea_m_090105', true, 'radio');
    elementShouldBeEnabled('hea_m_090106-1');
    selectDropdownOptionOS('hea_m_090106-1', 2, true, true);
    elementShouldBeEnabled('hea_m_090107');
    /* elementShouldBeEnabled('hea_m_090111');
    elementShouldBeEnabled('hea_m_090112'); */

    // Click I describe radio button
    // clickElement('hea_m_090111', true, 'radio');

    // Click on Differential diagnosis tab
    cy.byRRID('hea_m_090536').click();
    elementShouldBeEnabled('hea_m_090265');
    elementShouldBeEnabled('hea_m_090272');

    selectDropdownOptionOS('hea_m_090265', 4, true, true);
    elementShouldBeEnabled('hea_m_090266');
    elementShouldBeEnabled('hea_m_090268');
    clickElement('hea_m_090266', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090266');

    selectDropdownOptionOS('hea_m_090268', 2, true, true);
    elementShouldBeEnabled('hea_m_090269');
    elementShouldBeEnabled('hea_m_090271');

    clickElement('hea_m_090269', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090269');

    selectDropdownOptionOS('hea_m_090271', 1, true, true);

    clickElement('hea_m_090272', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090272');
  });
});
