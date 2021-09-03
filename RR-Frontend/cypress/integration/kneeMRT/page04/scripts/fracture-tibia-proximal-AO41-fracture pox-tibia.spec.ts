import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { signIn } from '../../../../shared/requests';
import { Guid } from '@models/shared/guid/guid';
import { IAppConfig } from '@interfaces/configs';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_040107', 'kne_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Fracture – Tibia proximal AO 41', () => {
    it('Fracture – Tibia proximal AO 41 -> Fracture prox. tibia', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('kne_m_040107');
      elementShouldBeEnabled('kne_m_040213');
      elementShouldBeEnabled('kne_m_040214');
      elementShouldBeEnabled('kne_m_040215');
      elementShouldBeEnabled('kne_m_040216');
      clickElement('kne_m_040216', true, 'radio');
      elementShouldBeEnabled('kne_m_040217');
      elementShouldBeEnabled('kne_m_040218');
    });
  });
});
