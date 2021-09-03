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

  it('Brainstem Localization - I describe', () => {
    // Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Cranial nerves from the dropdown menu
    clickElement('hea_m_080106', true, 'radio');
    elementShouldBeEnabled('hea_m_080107-1');
    selectDropdownOptionOS('hea_m_080107-1', 0, true, true);
    elementShouldBeEnabled('hea_m_080108');
    /* elementShouldBeEnabled('hea_m_080112');
    elementShouldBeEnabled('hea_m_080113'); */

    // Select I describe radio button
    // clickElement('hea_m_080112', true, 'radio');

    // Click on localization tab
    cy.byRRID('hea_m_080202').click();
    elementShouldBeEnabled('hea_m_080338');
    elementShouldBeEnabled('hea_m_080437');
    elementShouldBeEnabled('hea_m_080530');

    // Check Mesencephalon checkbox
    clickElement('hea_m_080338', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080338');
    elementShouldBeEnabled('hea_m_080339');
    elementShouldBeEnabled('hea_m_080343');
    elementShouldBeEnabled('hea_m_080346');

    clickElement('hea_m_080339', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080339');
    elementShouldBeEnabled('hea_m_080341');
    elementShouldBeEnabled('hea_m_080342');
    clickElement('hea_m_080341', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080341');
    clickElement('hea_m_080342', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080342');

    clickElement('hea_m_080343', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080343');
    elementShouldBeEnabled('hea_m_080344');
    elementShouldBeEnabled('hea_m_080345');
    clickElement('hea_m_080344', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080344');
    clickElement('hea_m_080345', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080345');

    clickElement('hea_m_080346', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080346');

    // Click on Pons checkbox

    clickElement('hea_m_080437', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080437');
    elementShouldBeEnabled('hea_m_080438');
    elementShouldBeEnabled('hea_m_080439');
    elementShouldBeEnabled('hea_m_080440');
    elementShouldBeEnabled('hea_m_080441');

    clickElement('hea_m_080438', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080438');
    clickElement('hea_m_080439', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080439');
    clickElement('hea_m_080440', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080440');
    clickElement('hea_m_080441', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080441');

    // Click on Medulla oblongata checkbox

    clickElement('hea_m_080530', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080530');
    elementShouldBeEnabled('hea_m_080531');
    elementShouldBeEnabled('hea_m_080532');
    elementShouldBeEnabled('hea_m_080533');

    clickElement('hea_m_080531', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080531');
    clickElement('hea_m_080532', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080532');
    clickElement('hea_m_080533', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080533');
  });
});
