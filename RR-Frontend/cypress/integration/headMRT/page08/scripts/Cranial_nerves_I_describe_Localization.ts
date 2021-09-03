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

  it('Cranial nerves Localization - I describe', () => {
    // Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Cranial nerves from the dropdown menu
    clickElement('hea_m_080106', true, 'radio');
    elementShouldBeEnabled('hea_m_080107-1');
    selectDropdownOptionOS('hea_m_080107-1', 1, true, true);
    elementShouldBeEnabled('hea_m_080108');
    /* elementShouldBeEnabled('hea_m_080112');
    elementShouldBeEnabled('hea_m_080113'); */

    // Click on localization tab
    cy.byRRID('hea_m_080202').click();
    elementShouldBeEnabled('hea_m_080349');
    elementShouldBeEnabled('hea_m_080350');
    elementShouldBeEnabled('hea_m_080443');
    elementShouldBeEnabled('hea_m_080444');
    elementShouldBeEnabled('hea_m_080445');
    elementShouldBeEnabled('hea_m_080446');
    elementShouldBeEnabled('hea_m_080447');
    elementShouldBeEnabled('hea_m_080448');
    elementShouldBeEnabled('hea_m_080449');
    elementShouldBeEnabled('hea_m_080450');
    elementShouldBeEnabled('hea_m_080451');
    elementShouldBeEnabled('hea_m_080452');
    elementShouldBeEnabled('hea_m_080453');
    elementShouldBeEnabled('hea_m_080454');

    // Check Cranial nerve radio buttons
    clickElement('hea_m_080349', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080349');
    clickElement('hea_m_080350', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080350');

    clickElement('hea_m_080443', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080443');
    clickElement('hea_m_080444', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080444');
    clickElement('hea_m_080445', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080445');
    clickElement('hea_m_080446', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080446');

    clickElement('hea_m_080447', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080447');
    elementShouldBeEnabled('hea_m_080534');
    clickElement('hea_m_080534', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080534');

    clickElement('hea_m_080449', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080449');
    elementShouldBeEnabled('hea_m_080536');
    elementShouldBeEnabled('hea_m_080537');
    elementShouldBeEnabled('hea_m_080538');
    elementShouldBeEnabled('hea_m_080539');
    clickElement('hea_m_080536', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080536');
    clickElement('hea_m_080537', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080537');
    clickElement('hea_m_080538', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080538');
    clickElement('hea_m_080539', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080539');

    clickElement('hea_m_080450', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080450');
    elementShouldBeEnabled('hea_m_080540');
    elementShouldBeEnabled('hea_m_080541');
    clickElement('hea_m_080540', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080540');
    clickElement('hea_m_080541', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080541');

    clickElement('hea_m_080451', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080451');
    elementShouldBeEnabled('hea_m_080542');
    elementShouldBeEnabled('hea_m_080543');
    elementShouldBeEnabled('hea_m_080544');
    clickElement('hea_m_080542', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080542');
    clickElement('hea_m_080543', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080543');
    clickElement('hea_m_080544', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080544');

    clickElement('hea_m_080452', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080452');
    elementShouldBeEnabled('hea_m_080545');
    elementShouldBeEnabled('hea_m_080546');
    clickElement('hea_m_080545', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080545');
    clickElement('hea_m_080546', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080546');

    clickElement('hea_m_080453', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080453');

    clickElement('hea_m_080454', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080454');
    elementShouldBeEnabled('hea_m_080547');
    clickElement('hea_m_080547', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080547');
  });
});
