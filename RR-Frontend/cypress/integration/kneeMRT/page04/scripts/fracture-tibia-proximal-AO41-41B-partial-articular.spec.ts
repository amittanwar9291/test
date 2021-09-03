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
    it('Fracture – Tibia proximal AO 41 -> 41B:Partial articular', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('kne_m_040107');
      elementShouldBeEnabled('kne_m_040213');
      elementShouldBeEnabled('kne_m_040214');
      elementShouldBeEnabled('kne_m_040215');
      elementShouldBeEnabled('kne_m_040216');
      clickElement('kne_m_040214', true, 'radio');
      elementShouldBeEnabled('kne_m_040325');
      elementShouldBeEnabled('kne_m_040329');
      elementShouldBeEnabled('kne_m_040332');
      clickElement('kne_m_040325', true, 'radio');
      elementShouldBeEnabled('kne_m_040326');
      elementShouldBeEnabled('kne_m_040327');
      elementShouldBeEnabled('kne_m_040328');
      clickElement('kne_m_040328', true, 'radio');
      elementShouldBeEnabled('kne_m_0404104');
      elementShouldBeEnabled('kne_m_0404105');
      elementShouldBeEnabled('kne_m_0404106');
      clickElement('kne_m_040329', true, 'radio');
      elementShouldBeEnabled('kne_m_040330');
      elementShouldBeEnabled('kne_m_040331');
      clickElement('kne_m_040330', true, 'radio');
      elementShouldBeEnabled('kne_m_040494');
      elementShouldBeEnabled('kne_m_040495');
      elementShouldBeEnabled('kne_m_040496');
      elementShouldBeEnabled('kne_m_040497');
      clickElement('kne_m_040331', true, 'radio');
      elementShouldBeEnabled('kne_m_040499');
      elementShouldBeEnabled('kne_m_0404100');
      elementShouldBeEnabled('kne_m_0404101');
      elementShouldBeEnabled('kne_m_0404102');
      clickElement('kne_m_040332', true, 'radio');
      elementShouldBeEnabled('kne_m_040333');
      elementShouldBeEnabled('kne_m_040397');
      elementShouldBeEnabled('kne_m_040398');
      clickElement('kne_m_040333', true, 'radio');
      elementShouldBeEnabled('kne_m_040494');
      elementShouldBeEnabled('kne_m_040495');
      elementShouldBeEnabled('kne_m_040496');
      elementShouldBeEnabled('kne_m_040497');
      clickElement('kne_m_040397', true, 'radio');
      elementShouldBeEnabled('kne_m_040499');
      elementShouldBeEnabled('kne_m_0404100');
      elementShouldBeEnabled('kne_m_0404101');
      elementShouldBeEnabled('kne_m_0404102');
      clickElement('kne_m_040398', true, 'radio');
      elementShouldBeEnabled('kne_m_0404104');
      elementShouldBeEnabled('kne_m_0404105');
      elementShouldBeEnabled('kne_m_0404106');
    });
  });
});
