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
    it('Fracture – Tibia proximal AO 41 -> 41A:Extraarticular', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('kne_m_040107');
      elementShouldBeEnabled('kne_m_040213');
      elementShouldBeEnabled('kne_m_040214');
      elementShouldBeEnabled('kne_m_040215');
      elementShouldBeEnabled('kne_m_040216');
      clickElement('kne_m_040213', true, 'radio');
      elementShouldBeEnabled('kne_m_040319');
      elementShouldBeEnabled('kne_m_040323');
      elementShouldBeEnabled('kne_m_040324');
      clickElement('kne_m_040319', true, 'radio');
      elementShouldBeEnabled('kne_m_040320');
      elementShouldBeEnabled('kne_m_040321');
      elementShouldBeEnabled('kne_m_040322');
      clickElement('kne_m_040320', true, 'radio');
      elementShouldBeEnabled('kne_m_0404880');
      elementShouldBeEnabled('kne_m_0404890');
      clickElement('kne_m_040322', true, 'radio');
      elementShouldBeEnabled('kne_m_0404900');
      elementShouldBeEnabled('kne_m_0404910');
      clickElement('kne_m_040323', true, 'radio');
      elementShouldBeEnabled('kne_m_040391');
      elementShouldBeEnabled('kne_m_040392');
      elementShouldBeEnabled('kne_m_040393');
      clickElement('kne_m_040324', true, 'radio');
      elementShouldBeEnabled('kne_m_040394');
      elementShouldBeEnabled('kne_m_040395');
      elementShouldBeEnabled('kne_m_040396');
      clickElement('kne_m_040394', true, 'radio');
      elementShouldBeEnabled('kne_m_0404128');
      elementShouldBeEnabled('kne_m_0404129');
      clickElement('kne_m_040395', true, 'radio');
      elementShouldBeEnabled('kne_m_0404128');
      elementShouldBeEnabled('kne_m_0404129');
    });
  });
});
