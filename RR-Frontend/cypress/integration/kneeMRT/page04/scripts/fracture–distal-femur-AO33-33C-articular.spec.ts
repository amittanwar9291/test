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
    it('Fracture – Distal Femur AO33 -> 33C: Complete articular', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      findingColumn.selectFindingOptionByAppearance(0);
      clickElement('kne_m_040207', true, 'radio');
      elementShouldBeEnabled('kne_m_040314');
      elementShouldBeEnabled('kne_m_040315');
      elementShouldBeEnabled('kne_m_040409');
      clickElement('kne_m_040315', true, 'radio');
      elementShouldBeEnabled('kne_m_040316');
      elementShouldBeEnabled('kne_m_040317');
      elementShouldBeEnabled('kne_m_040318');
      clickElement('kne_m_040409', true, 'radio');
      elementShouldBeEnabled('kne_m_040410');
      elementShouldBeEnabled('kne_m_040411');
      elementShouldBeEnabled('kne_m_040412');
    });
  });
});
