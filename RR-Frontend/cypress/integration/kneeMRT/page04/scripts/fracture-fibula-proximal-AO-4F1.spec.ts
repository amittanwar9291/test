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

  describe('Fracture – Fibula proximal-AO 4F1', () => {
    it('Fracture – Fibula proximal-AO 4F1', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('kne_m_040107');
      elementShouldBeEnabled('kne_m_040264');
      elementShouldBeEnabled('kne_m_040265');
      elementShouldBeEnabled('kne_m_040268');
      elementShouldBeEnabled('kne_m_040279');
      clickElement('kne_m_040264', true, 'radio');
      elementShouldBeEnabled('kne_m_040266');
      elementShouldBeEnabled('kne_m_040267');
      clickElement('kne_m_040265', true, 'radio');
      elementShouldBeEnabled('kne_m_040266');
      elementShouldBeEnabled('kne_m_040267');
    });
  });
});
