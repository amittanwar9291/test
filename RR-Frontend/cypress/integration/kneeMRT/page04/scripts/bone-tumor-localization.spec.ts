import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectLocalizerMultiple } from '../../../../shared/service';
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

  describe('Bone tumor', () => {
    it('Bone tumor -> Localization', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      findingColumn.selectFindingOptionByAppearance(5);
      elementShouldBeEnabled('kne_m_040107');
      elementShouldBeEnabled('kne_m_040373');
      elementShouldBeEnabled('kne_m_0404110');
      elementShouldBeEnabled('kne_m_040270');
      elementShouldBeEnabled('kne_m_0404112');
      elementShouldBeEnabled('kne_m_0404114');
      elementShouldBeEnabled('kne_m_0404116');
      elementShouldBeEnabled('kne_m_040270');
      selectLocalizerMultiple('kne_m_040270', 'g', 'tspan', 0, 0, true);
      selectLocalizerMultiple('kne_m_040270', 'g', 'tspan', 0, 3, true);
    });
  });
});
