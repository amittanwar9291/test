import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectFindingsDropdownOption
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 10 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_Summary.url + '/' + pageId);
        });
      });
    });
  });
  describe('Summary', () => {
    it('Summary -> Diagnosis', () => {
      selectFindingsDropdownOption('car_m_100104', '.ui-dropdown-label', 11, true, true);
      elementShouldBeEnabled('car_m_100104');
      elementShouldBeEnabled('car_m_100105');
      elementShouldBeEnabled('car_m_100109');
      clickElement('car_m_100106', true, 'checkbox');
      elementShouldBeEnabled('car_m_100107');
      elementShouldBeEnabled('car_m_100108');
      clickElement('car_m_100109', true, 'checkbox');
      elementShouldBeEnabled('car_m_100110');
      selectDropdownOptionOS('car_m_100110', 2, true, true);
      elementShouldBeEnabled('car_m_100111');
      clickElement('car_m_100201', true, 'checkbox');
      selectDropdownOptionOS('car_m_100202', 4, true, true);
    });
  });
});
