import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 10 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_100107', 'pel_m_100106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Joint effusion in the hip joint', () => {
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(12);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100209');
      // TODO: this checkbox has wrong rr-id in FE (bug 22689)
      // elementShouldBeEnabled('pel_m_1002010');

      elementShouldBeEnabled('pel_m_1003111');
      elementShouldBeEnabled('pel_m_1003112');
      elementShouldBeEnabled('pel_m_1003113');

      elementShouldBeEnabled('pel_m_1003115');
      clickElement('pel_m_1003115', true, 'checkbox');
      elementShouldBeEnabled('pel_m_1003116');
    });
  });
});
