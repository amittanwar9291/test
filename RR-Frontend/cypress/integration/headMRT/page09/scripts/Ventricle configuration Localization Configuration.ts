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

  it('Ventricle configuration Localization Configuration', () => {
    // Go to Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Ventricle configuration from the dropdown menu
    clickElement('hea_m_090105', true, 'radio');
    elementShouldBeEnabled('hea_m_090106-1');
    selectDropdownOptionOS('hea_m_090106-1', 1, true, true);
    elementShouldBeEnabled('hea_m_090107');

    elementShouldBeEnabled('hea_m_090209'); // TODO wrong ID was used in FE for this checkbox (BUG 22443)
    elementShouldBeEnabled('hea_m_090302');
    elementShouldBeEnabled('hea_m_090305');
    elementShouldBeEnabled('hea_m_090306');
    elementShouldBeEnabled('hea_m_090307');
    elementShouldBeEnabled('hea_m_090308');

    elementShouldBeEnabled('hea_m_090402');
    elementShouldBeEnabled('hea_m_090403');

    elementShouldBeEnabled('hea_m_090552');
    elementShouldBeEnabled('hea_m_090556');
    elementShouldBeEnabled('hea_m_090556');

    elementShouldBeEnabled('hea_m_090560');
    elementShouldBeEnabled('hea_m_090561');
    elementShouldBeEnabled('hea_m_090562');

    // Localization
    clickElement('hea_m_090209', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090209');
    elementShouldBeEnabled('hea_m_090211');
    elementShouldBeEnabled('hea_m_090212');
    elementShouldBeEnabled('hea_m_090213');
    elementShouldBeEnabled('hea_m_090214');
    elementShouldBeEnabled('hea_m_090215');
    elementShouldBeEnabled('hea_m_090217');
    elementShouldBeEnabled('hea_m_090218');
    elementShouldBeEnabled('hea_m_090219');
    elementShouldBeEnabled('hea_m_090220');
    elementShouldBeEnabled('hea_m_090221');

    clickElement('hea_m_090211', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090211');
    clickElement('hea_m_090212', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090212');
    clickElement('hea_m_090213', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090213');
    clickElement('hea_m_090214', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090214');
    clickElement('hea_m_090215', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090215');
    clickElement('hea_m_090217', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090217');
    clickElement('hea_m_090218', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090218');
    clickElement('hea_m_090219', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090219');
    clickElement('hea_m_090220', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090220');
    clickElement('hea_m_090221', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090221');

    clickElement('hea_m_090302', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090302');
    elementShouldBeEnabled('hea_m_090303');
    elementShouldBeEnabled('hea_m_090304');
    clickElement('hea_m_090303', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090303');
    clickElement('hea_m_090304', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090304');

    clickElement('hea_m_090305', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090305');
    clickElement('hea_m_090306', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090306');
    clickElement('hea_m_090307', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090307');
    clickElement('hea_m_090308', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090308');
    elementShouldBeEnabled('hea_m_090309');
    elementShouldBeEnabled('hea_m_090372');
    clickElement('hea_m_090309', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090309');
    clickElement('hea_m_090372', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090372');

    clickElement('hea_m_090402', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090402');
    clickElement('hea_m_090403', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090403');
    elementShouldBeEnabled('hea_m_090404');
    elementShouldBeEnabled('hea_m_090405');
    elementShouldBeEnabled('hea_m_090406');
    elementShouldBeEnabled('hea_m_090407');
    elementShouldBeEnabled('hea_m_090408');
    elementShouldBeEnabled('hea_m_090409');
    elementShouldBeEnabled('hea_m_090410');
    elementShouldBeEnabled('hea_m_090411');
    elementShouldBeEnabled('hea_m_090412');
    elementShouldBeEnabled('hea_m_090413');

    clickElement('hea_m_090404', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090404');
    clickElement('hea_m_090405', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090405');
    clickElement('hea_m_090406', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090406');
    clickElement('hea_m_090407', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090407');
    clickElement('hea_m_090408', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090408');
    clickElement('hea_m_090409', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090409');
    clickElement('hea_m_090410', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090410');
    clickElement('hea_m_090411', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090411');
    clickElement('hea_m_090412', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090412');
    clickElement('hea_m_090413', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090413');

    // Configuration
    clickElement('hea_m_090552', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090552');
    clickElement('hea_m_090553', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090553');
    elementShouldBeEnabled('hea_m_090554');
    elementShouldBeEnabled('hea_m_090555');
    clickElement('hea_m_090554', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090554');
    clickElement('hea_m_090555', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090555');
    clickElement('hea_m_090556', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090556');
    elementShouldBeEnabled('hea_m_090557');
    elementShouldBeEnabled('hea_m_090558');
    clickElement('hea_m_090557', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090557');
    clickElement('hea_m_090558', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090558');

    clickElement('hea_m_090560', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090560');
    clickElement('hea_m_090561', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090561');
    clickElement('hea_m_090562', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090562');
  });
});
