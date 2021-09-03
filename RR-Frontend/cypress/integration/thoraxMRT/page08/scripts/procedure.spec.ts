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
      elementShouldBeEnabled('tho_m_080104');
      elementShouldBeEnabled('tho_m_080110');
      elementShouldBeEnabled('tho_m_080115');
      elementShouldBeEnabled('tho_m_080201');

      elementShouldBeEnabled('tho_m_080303');
      elementShouldBeEnabled('tho_m_080304');
      elementShouldBeEnabled('tho_m_080305');
      elementShouldBeEnabled('tho_m_080306');

      elementShouldBeEnabled('tho_m_080403');
      elementShouldBeEnabled('tho_m_080404');

      clickElement('tho_m_080104', true, 'checkbox');
      elementShouldBeEnabled('tho_m_080105');
      elementShouldBeEnabled('tho_m_080106');
      elementShouldBeEnabled('tho_m_080107');
      elementShouldBeEnabled('tho_m_080108');
      elementShouldBeEnabled('tho_m_080109');

      clickElement('tho_m_080110', true, 'checkbox');
      elementShouldBeEnabled('tho_m_080111');
      elementShouldBeEnabled('tho_m_080112');
      elementShouldBeEnabled('tho_m_080113');
      elementShouldBeEnabled('tho_m_080114');

      clickElement('tho_m_080115', true, 'checkbox');
      elementShouldBeEnabled('tho_m_080116');
      elementShouldBeEnabled('tho_m_080117');

      clickElement('tho_m_080201', true, 'checkbox');
      elementShouldBeEnabled('tho_m_080203');
      elementShouldBeEnabled('tho_m_080204');
      elementShouldBeEnabled('tho_m_080205');
      elementShouldBeEnabled('tho_m_080206');
      elementShouldBeEnabled('tho_m_080207');
      elementShouldBeEnabled('tho_m_080208');
      elementShouldBeEnabled('tho_m_080209');
      elementShouldBeEnabled('tho_m_080210');
      elementShouldBeEnabled('tho_m_080211');
      elementShouldBeEnabled('tho_m_080212');
      elementShouldBeEnabled('tho_m_080213');
      elementShouldBeEnabled('tho_m_080214');
      elementShouldBeEnabled('tho_m_080215');

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
