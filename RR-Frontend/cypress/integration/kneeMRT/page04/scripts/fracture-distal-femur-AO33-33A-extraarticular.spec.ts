import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
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

  describe('Fracture – Distal Femur AO33', () => {
    it('Fracture – Distal Femur AO33 -> 33A: Extraarticular', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      findingColumn.selectFindingOptionByAppearance(0);
      clickElement('kne_m_040205', true, 'radio');
      elementShouldBeEnabled('kne_m_040302');
      elementShouldBeEnabled('kne_m_040306');
      elementShouldBeEnabled('kne_m_040309');
      clickElement('kne_m_040302', true, 'radio');
      elementShouldBeEnabled('kne_m_040303');
      elementShouldBeEnabled('kne_m_040304');
      elementShouldBeEnabled('kne_m_040305');
      clickElement('kne_m_040306', true, 'radio');
      elementShouldBeEnabled('kne_m_040307');
      elementShouldBeEnabled('kne_m_040308');
    });
  });
});
