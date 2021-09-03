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

  describe('Fracture – Patella AO 34', () => {
    it('Fracture – Patella AO 34', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      findingColumn.selectFindingOptionByAppearance(3);
      elementShouldBeEnabled('kne_m_040220');
      elementShouldBeEnabled('kne_m_040221');
      elementShouldBeEnabled('kne_m_040222');
      elementShouldBeEnabled('kne_m_040223');
      clickElement('kne_m_040220', true, 'radio');
      elementShouldBeEnabled('kne_m_040337');
      clickElement('kne_m_040337', true, 'checkbox');
      elementShouldBeEnabled('kne_m_0403109');
      elementShouldBeEnabled('kne_m_0403110');
      elementShouldBeEnabled('kne_m_0403111');
      elementShouldBeEnabled('kne_m_0403112');
      clickElement('kne_m_040221', true, 'radio');
      elementShouldBeEnabled('kne_m_040419');
      elementShouldBeEnabled('kne_m_040422');
      clickElement('kne_m_040419', true, 'radio');
      elementShouldBeEnabled('kne_m_040420');
      elementShouldBeEnabled('kne_m_040421');
      clickElement('kne_m_040422', true, 'radio');
      elementShouldBeEnabled('kne_m_040423');
      elementShouldBeEnabled('kne_m_040424');
      clickElement('kne_m_040222', true, 'radio');
      elementShouldBeEnabled('kne_m_040537');
      elementShouldBeEnabled('kne_m_040541');
      elementShouldBeEnabled('kne_m_040542');
      clickElement('kne_m_040223', true, 'radio');
      elementShouldBeEnabled('kne_m_040224');
      elementShouldBeEnabled('kne_m_040225');
    });
  });
});
