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

  describe('Bone marrow edema', () => {
    it('Bone marrow edema', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      findingColumn.selectFindingOptionByAppearance(4);
      elementShouldBeEnabled('kne_m_040107');
      elementShouldBeEnabled('kne_m_040227');
      elementShouldBeEnabled('kne_m_040341');
      elementShouldBeEnabled('kne_m_040342');
      elementShouldBeEnabled('kne_m_040343');
      elementShouldBeEnabled('kne_m_0403113');
      elementShouldBeEnabled('kne_m_0403114');
      elementShouldBeEnabled('kne_m_040345');
      elementShouldBeEnabled('kne_m_040347');
      cy.byRRID('kne_m_040227').click();
      selectLocalizerMultiple('kne_m_040227', 'g', 'tspan', 0, 0, true);
      selectLocalizerMultiple('kne_m_040227', 'g', 'tspan', 0, 1, true);
      selectLocalizerMultiple('kne_m_040227', 'g', 'tspan', 0, 2, true);
      selectLocalizerMultiple('kne_m_040227', 'g', 'tspan', 0, 3, true);
      selectLocalizerMultiple('kne_m_040227', 'g', 'tspan', 0, 4, true);
      selectLocalizerMultiple('kne_m_040227', 'g', 'tspan', 0, 5, true);
      selectLocalizerMultiple('kne_m_040227', 'g', 'tspan', 0, 6, true);
      selectLocalizerMultiple('kne_m_040227', 'g', 'tspan', 0, 7, true);
      selectLocalizerMultiple('kne_m_040227', 'g', 'tspan', 0, 8, true);
    });
  });
});
