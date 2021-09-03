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

  describe('Osteomyelitis', () => {
    it('Osteomyelitis', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      findingColumn.selectFindingOptionByAppearance(6);
      elementShouldBeEnabled('kne_m_040230');
      elementShouldBeEnabled('kne_m_040352');
      elementShouldBeEnabled('kne_m_040358');
      elementShouldBeEnabled('kne_m_040359');
      elementShouldBeEnabled('kne_m_040360');
      elementShouldBeEnabled('kne_m_040454');
      elementShouldBeEnabled('kne_m_040456');
      elementShouldBeEnabled('kne_m_040458');
      elementShouldBeEnabled('kne_m_040459');
      elementShouldBeEnabled('kne_m_040463');
      elementShouldBeEnabled('kne_m_040464');
      elementShouldBeEnabled('kne_m_040465');
      elementShouldBeEnabled('kne_m_040508');
      elementShouldBeEnabled('kne_m_040509');
      elementShouldBeEnabled('kne_m_040511');
      elementShouldBeEnabled('kne_m_040512');
      cy.byRRID('kne_m_040230').click();
      selectLocalizerMultiple('kne_m_040230', 'g', 'tspan', 0, 0, true);
      selectLocalizerMultiple('kne_m_040230', 'g', 'tspan', 0, 1, true);
      selectLocalizerMultiple('kne_m_040230', 'g', 'tspan', 0, 2, true);
      selectLocalizerMultiple('kne_m_040230', 'g', 'tspan', 0, 3, true);
      selectLocalizerMultiple('kne_m_040230', 'g', 'circle', 0, 0, true);
      clickElement('kne_m_040352', true, 'checkbox');
      elementShouldBeEnabled('kne_m_040354');
      elementShouldBeEnabled('kne_m_040356');
      clickElement('kne_m_040360', true, 'checkbox');
      elementShouldBeEnabled('kne_m_040362');
      elementShouldBeEnabled('kne_m_040364');
      clickElement('kne_m_040512', true, 'radio');
      elementShouldBeEnabled('kne_m_040513');
    });
  });
});
