import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 12 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080108', 'pel_m_080107-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Rectum.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Summary -> TN Staging Rectal Cancer', () => {
      clickElement('pel_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      clickElement('pel_m_080207', true, 'checkbox');
      clickElement('pel_m_080403', true, 'radio');
      cy.get('rr-top-navigation')
        .contains('12')
        .click({ force: true });
      elementShouldBeEnabled('pel_m_120404');

      clickElement('pel_m_120404', true, 'radio');
      elementShouldBeEnabled('pel_m_120522');
      elementShouldBeEnabled('pel_m_120523');
      elementShouldBeEnabled('pel_m_120524');
      elementShouldBeEnabled('pel_m_120525');
      elementShouldBeEnabled('pel_m_120526');
      elementShouldBeEnabled('pel_m_120527');

      elementShouldBeEnabled('pel_m_120528');
      elementShouldBeEnabled('pel_m_120529');
      elementShouldBeEnabled('pel_m_120530');
      elementShouldBeEnabled('pel_m_120531');
      elementShouldBeEnabled('pel_m_120532');
    });
  });
});
