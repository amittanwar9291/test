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
    it('Bones -> Bursitis without CM', () => {
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(13);

      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100212');
      elementShouldBeEnabled('pel_m_100213');

      elementShouldBeEnabled('pel_m_100214');
      elementShouldBeEnabled('pel_m_100215');
      elementShouldBeEnabled('pel_m_100216');
      elementShouldBeEnabled('pel_m_100217');
      elementShouldBeEnabled('pel_m_100218');
      elementShouldBeEnabled('pel_m_100219');

      elementShouldBeEnabled('pel_m_1003118');
      elementShouldBeEnabled('pel_m_1003119');
      elementShouldBeEnabled('pel_m_1003120');

      elementShouldBeEnabled('pel_m_1003122');
      elementShouldBeEnabled('pel_m_1003125');
      elementShouldBeEnabled('pel_m_1003126');
    });
  });
});
