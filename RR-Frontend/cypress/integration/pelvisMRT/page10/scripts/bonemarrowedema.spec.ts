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
    it('Bones -> Bone Marrow Edema (BME)', () => {
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(6);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100205');

      elementShouldBeEnabled('pel_m_100208');
      elementShouldBeEnabled('pel_m_100344');
      elementShouldBeEnabled('pel_m_100345');
      elementShouldBeEnabled('pel_m_100346');
      elementShouldBeEnabled('pel_m_100348');
      elementShouldBeEnabled('pel_m_100471');

      clickElement('pel_m_100208', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100280');
      elementShouldBeEnabled('pel_m_100281');

      clickElement('pel_m_100471', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100472');
    });
  });
});
