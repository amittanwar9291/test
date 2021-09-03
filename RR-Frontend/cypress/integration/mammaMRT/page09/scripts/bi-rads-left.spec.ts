import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectSliderValueAndCheckIt } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - BI_RADS left', () => {
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

  describe('BI-RADS Left', () => {
    it('Move the left slide to 4', () => {
      selectSliderValueAndCheckIt('mam_m_090109', 1, 5);
      elementShouldBeEnabled('mam_m_090201');
      elementShouldBeEnabled('mam_m_090202');
      elementShouldBeEnabled('mam_m_090203');
      cy.byRRID('mam_m_090201').should('not.be.disabled');
      clickElement('mam_m_090202', true, 'radio');
      clickElement('mam_m_090115', true, 'radio');
      clickElement('mam_m_090117', true, 'radio');
    });
  });
});
