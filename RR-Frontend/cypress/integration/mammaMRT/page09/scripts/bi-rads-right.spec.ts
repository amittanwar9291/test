import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectSliderValueAndCheckIt } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - BI_RADS right', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Rating.url + '/' + pageId);
        });
      });
    });
  });

  describe('BI-RADS Right', () => {
    it('Move the right slide to 4', () => {
      selectSliderValueAndCheckIt('mam_m_090111', 1, 5);
      elementShouldBeEnabled('mam_m_090204');
      elementShouldBeEnabled('mam_m_090205');
      elementShouldBeEnabled('mam_m_090206');
      clickElement('mam_m_090204', true, 'radio');
      clickElement('mam_m_090119', true, 'radio');
      clickElement('mam_m_090122', true, 'radio');
    });
  });
});
