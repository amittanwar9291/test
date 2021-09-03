import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOption,
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
    it('Summary -> Recommendation supplemental-diagnostic', () => {
      clickElement('car_m_100304', true, 'checkbox');
      elementShouldBeEnabled('car_m_100305');
      clickElement('car_m_100306', true, 'checkbox');
      elementShouldBeEnabled('car_m_100307');
      clickElement('car_m_100310', true, 'checkbox');
      elementShouldBeEnabled('car_m_100311');
      clickElement('car_m_100401', true, 'checkbox');
      elementShouldBeEnabled('car_m_100402');
      clickElement('car_m_100404', true, 'checkbox');
      elementShouldBeEnabled('car_m_100405');
      elementShouldBeEnabled('car_m_100406');
      elementShouldBeEnabled('car_m_100407');
    });
  });
});
