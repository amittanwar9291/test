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
  const findingColumn = new FindingColumnPageObject('hea_m_070107', 'hea_m_070106-');

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

  it('Mass Characterization II - I describe', () => {
    // Page 3: Contrast enhanced - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');

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

    // Click on Characterization II tab
    cy.byRRID('hea_m_090423').click();
    elementShouldBeEnabled('hea_m_090254');
    elementShouldBeEnabled('hea_m_090255');
    elementShouldBeEnabled('hea_m_090256');
    elementShouldBeEnabled('hea_m_090257');
    elementShouldBeEnabled('hea_m_090258');
    elementShouldBeEnabled('hea_m_090259');
    elementShouldBeEnabled('hea_m_090260');
    elementShouldBeEnabled('hea_m_090261');
    elementShouldBeEnabled('hea_m_090262');

    elementShouldBeEnabled('hea_m_090349');
    elementShouldBeEnabled('hea_m_090350');
    elementShouldBeEnabled('hea_m_090352');
    elementShouldBeEnabled('hea_m_090354');
    elementShouldBeEnabled('hea_m_090355');

    elementShouldBeEnabled('hea_m_090439');
    elementShouldBeEnabled('hea_m_090440');
    elementShouldBeEnabled('hea_m_090441');

    // Check all checkboxes in Internal architecture
    clickElement('hea_m_090254', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090254');
    clickElement('hea_m_090255', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090255');
    clickElement('hea_m_090256', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090256');
    clickElement('hea_m_090257', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090257');
    clickElement('hea_m_090258', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090258');
    clickElement('hea_m_090259', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090259');
    clickElement('hea_m_090260', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090260');
    clickElement('hea_m_090261', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090261');
    clickElement('hea_m_090262', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090262');

    // Check all checkboxes in Growth pattern
    clickElement('hea_m_090349', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090349');
    clickElement('hea_m_090350', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090350');

    // Check all checkboxes in Associated findings
    clickElement('hea_m_090352', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090352');
    elementShouldBeEnabled('hea_m_090353');
    clickElement('hea_m_090353', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090353');
    clickElement('hea_m_090354', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090354');
    clickElement('hea_m_090355', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090355');

    // No radio button
    clickElement('hea_m_090439', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090439');

    // Low radio button
    clickElement('hea_m_090440', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090440');
    elementShouldBeEnabled('hea_m_090442');
    elementShouldBeEnabled('hea_m_090443');
    elementShouldBeEnabled('hea_m_090538');
    elementShouldBeEnabled('hea_m_090539');
    elementShouldBeEnabled('hea_m_090540');
    elementShouldBeEnabled('hea_m_090541');

    clickElement('hea_m_090442', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090442');
    clickElement('hea_m_090443', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090443');
    clickElement('hea_m_090538', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090538');
    clickElement('hea_m_090539', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090539');
    clickElement('hea_m_090540', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090540');
    clickElement('hea_m_090541', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090541');

    // Strong radio button
    clickElement('hea_m_090441', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090441');
    elementShouldBeEnabled('hea_m_090442');
    elementShouldBeEnabled('hea_m_090443');
    elementShouldBeEnabled('hea_m_090538');
    elementShouldBeEnabled('hea_m_090539');
    elementShouldBeEnabled('hea_m_090540');
    elementShouldBeEnabled('hea_m_090541');

    clickElement('hea_m_090442', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090442');
    clickElement('hea_m_090443', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090443');
    clickElement('hea_m_090538', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090538');
    clickElement('hea_m_090539', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090539');
    clickElement('hea_m_090540', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090540');
    clickElement('hea_m_090541', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090541');
  });
});
