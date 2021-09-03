import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { feetMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 07 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_Summary.url + '/' + pageId);
        });
      });
    });
  });

  describe('Summary', () => {
    it('Summary ', () => {
      elementShouldBeEnabled('anc_m_070104');
      elementShouldBeEnabled('anc_m_070105');
      elementShouldBeEnabled('anc_m_070106');

      elementShouldBeEnabled('anc_m_070203');
      elementShouldBeEnabled('anc_m_070204');
      elementShouldBeEnabled('anc_m_070205');
      elementShouldBeEnabled('anc_m_070212');

      clickElement('anc_m_070205', true, 'checkbox');
      elementShouldBeEnabled('anc_m_070207');
      elementShouldBeEnabled('anc_m_070208');
      elementShouldBeEnabled('anc_m_070209');
      elementShouldBeEnabled('anc_m_070210');
      elementShouldBeEnabled('anc_m_070211');
    });
  });
});
