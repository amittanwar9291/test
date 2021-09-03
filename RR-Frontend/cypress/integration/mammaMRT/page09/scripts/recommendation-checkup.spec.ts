import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - Recommendation checkup', () => {
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

  describe('Recommendation Checkup', () => {
    it('Checkup', () => {
      clickElement('mam_m_090305', true, 'radio');
      elementShouldBeEnabled('mam_m_090418');
      elementShouldBeEnabled('mam_m_090501');
      elementShouldBeEnabled('mam_m_090508');
      clickElement('mam_m_090418', true, 'checkbox');
      elementShouldBeEnabled('mam_m_090410');
      elementShouldBeEnabled('mam_m_090411');
      elementShouldBeEnabled('mam_m_090412');
      elementShouldBeEnabled('mam_m_090413');
      elementShouldBeEnabled('mam_m_090414');
      elementShouldBeEnabled('mam_m_090415');
      elementShouldBeEnabled('mam_m_090416');
      elementShouldBeEnabled('mam_m_090417');
      clickElement('mam_m_090501', true, 'checkbox');
      elementShouldBeEnabled('mam_m_090502');
      elementShouldBeEnabled('mam_m_090503');
      elementShouldBeEnabled('mam_m_090504');
      elementShouldBeEnabled('mam_m_090505');
      elementShouldBeEnabled('mam_m_090506');
      elementShouldBeEnabled('mam_m_090507');
      clickElement('mam_m_090508', true, 'checkbox');
      elementShouldBeEnabled('mam_m_090509');
      elementShouldBeEnabled('mam_m_090510');
      elementShouldBeEnabled('mam_m_090511');
      clickElement('mam_m_090411', true, 'radio');
      clickElement('mam_m_090414', true, 'radio');
      clickElement('mam_m_090502', true, 'radio');
      clickElement('mam_m_090505', true, 'radio');
      clickElement('mam_m_090510', true, 'radio');
    });
  });
});
