import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { handMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Evaluation.url + '/' + pageId);
        });
      });
    });
  });

  describe('Summary', () => {
    it('Summary ', () => {
      elementShouldBeEnabled('han_m_090104');
      elementShouldBeEnabled('han_m_090105');
      elementShouldBeEnabled('han_m_090106');

      elementShouldBeEnabled('han_m_090202');
      elementShouldBeEnabled('han_m_090203');
      elementShouldBeEnabled('han_m_090204');
      elementShouldBeEnabled('han_m_090205');
      elementShouldBeEnabled('han_m_090206');
      elementShouldBeEnabled('han_m_090214');
      elementShouldBeEnabled('han_m_090207');
      elementShouldBeEnabled('han_m_090215');

      elementShouldBeEnabled('han_m_090303');
      elementShouldBeEnabled('han_m_090304');
      elementShouldBeEnabled('han_m_090305');

      clickElement('han_m_090104', true, 'radio');
      elementShouldBeEnabled('han_m_090107');

      clickElement('han_m_090207', true, 'checkbox');
      elementShouldBeEnabled('han_m_090209');
      elementShouldBeEnabled('han_m_090210');
      elementShouldBeEnabled('han_m_090211');
      elementShouldBeEnabled('han_m_090212');
      elementShouldBeEnabled('han_m_090213');
    });
  });
});
