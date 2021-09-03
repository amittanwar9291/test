import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 08 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Summary.url + '/' + pageId);
        });
      });
    });
  });

  describe('Summary', () => {
    it('Summary -> Procedure', () => {
      clickElement('tho_m_080403', true, 'radio');

      // TODO: FE attribute is "rrid" instead of "rr-id" (bug 22721)
      elementShouldBeEnabled('tho_m_080406');
      elementShouldBeEnabled('tho_m_080408');

      clickElement('tho_m_080404', true, 'radio');

      // TODO: FE attribute is "rrid" instead of "rr-id" (bug 22721)
      elementShouldBeEnabled('tho_m_080406');
      elementShouldBeEnabled('tho_m_080408');
    });
  });
});
