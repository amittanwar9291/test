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

context('Page 08 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_070107', 'hea_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_BrainstemCranialNerves.url + '/' + pageId);
        });
      });
    });
  });

  it('Cranial nerves Characterization II - I know', () => {
    // Page 3: Contrast enhanced - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Cranial nerves from the dropdown menu
    clickElement('hea_m_080106', true, 'radio');
    elementShouldBeEnabled('hea_m_080107-1');
    selectDropdownOptionOS('hea_m_080107-1', 1, true, true);
    elementShouldBeEnabled('hea_m_080108');
    /* elementShouldBeEnabled('hea_m_080112');
    elementShouldBeEnabled('hea_m_080113'); */

    // Click I know radio button
    // clickElement('hea_m_080113', true, 'radio');
    cy.get(':nth-child(2) > .relative-container > .ng-untouched > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon').click();

    // Click on Characterization II tab
    cy.byRRID('hea_m_080401').click();
    elementShouldBeEnabled('hea_m_080222');
    elementShouldBeEnabled('hea_m_080223');
    elementShouldBeEnabled('hea_m_080224');
    elementShouldBeEnabled('hea_m_080225');
    elementShouldBeEnabled('hea_m_080226');
    elementShouldBeEnabled('hea_m_080227');
    elementShouldBeEnabled('hea_m_080228');
    elementShouldBeEnabled('hea_m_080229');
    elementShouldBeEnabled('hea_m_080230');
    elementShouldBeEnabled('hea_m_080231');
    elementShouldBeEnabled('hea_m_080333');
    elementShouldBeEnabled('hea_m_080334');
    elementShouldBeEnabled('hea_m_080335');
    elementShouldBeEnabled('hea_m_080336');
    elementShouldBeEnabled('hea_m_080431');
    elementShouldBeEnabled('hea_m_080432');
    elementShouldBeEnabled('hea_m_080434');
    elementShouldBeEnabled('hea_m_080435');
    elementShouldBeEnabled('hea_m_080436');
    elementShouldBeEnabled('hea_m_080519');
    elementShouldBeEnabled('hea_m_080520');
    elementShouldBeEnabled('hea_m_080521');

    // Check all checkboxes in Changes in internal architecture
    clickElement('hea_m_080222', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080222');
    clickElement('hea_m_080223', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080223');
    clickElement('hea_m_080224', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080224');
    clickElement('hea_m_080225', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080225');
    clickElement('hea_m_080226', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080226');
    clickElement('hea_m_080227', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080227');
    clickElement('hea_m_080228', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080228');
    clickElement('hea_m_080229', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080229');
    clickElement('hea_m_080230', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080230');
    clickElement('hea_m_080231', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080231');

    // Check all checkboxes in Growth pattern
    clickElement('hea_m_080333', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080333');
    clickElement('hea_m_080334', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080334');
    clickElement('hea_m_080335', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080335');
    clickElement('hea_m_080336', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080336');

    // Associated findings
    clickElement('hea_m_080431', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080431');
    clickElement('hea_m_080432', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080432');
    clickElement('hea_m_080433', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080433');
    clickElement('hea_m_080434', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080434');
    clickElement('hea_m_080435', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080435');
    clickElement('hea_m_080436', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080436');

    // No radio button
    clickElement('hea_m_080519', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080519');

    // Low radio button
    clickElement('hea_m_080520', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080520');
    elementShouldBeEnabled('hea_m_080522');
    elementShouldBeEnabled('hea_m_080523');
    elementShouldBeEnabled('hea_m_080525');
    elementShouldBeEnabled('hea_m_080526');
    elementShouldBeEnabled('hea_m_080527');
    elementShouldBeEnabled('hea_m_080528');
    elementShouldBeEnabled('hea_m_080529');

    clickElement('hea_m_080522', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080522');
    clickElement('hea_m_080523', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080523');
    clickElement('hea_m_080525', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080525');
    clickElement('hea_m_080526', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080526');
    clickElement('hea_m_080527', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080527');
    clickElement('hea_m_080528', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080528');
    clickElement('hea_m_080529', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080529');

    // Strong radio button
    clickElement('hea_m_080521', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080521');
    elementShouldBeEnabled('hea_m_080522');
    elementShouldBeEnabled('hea_m_080523');
    elementShouldBeEnabled('hea_m_080525');
    elementShouldBeEnabled('hea_m_080526');
    elementShouldBeEnabled('hea_m_080527');
    elementShouldBeEnabled('hea_m_080528');
    elementShouldBeEnabled('hea_m_080529');

    clickElement('hea_m_080522', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080522');
    clickElement('hea_m_080523', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080523');
    clickElement('hea_m_080525', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080525');
    clickElement('hea_m_080526', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080526');
    clickElement('hea_m_080527', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080527');
    clickElement('hea_m_080528', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080528');
    clickElement('hea_m_080529', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080529');
  });
});
