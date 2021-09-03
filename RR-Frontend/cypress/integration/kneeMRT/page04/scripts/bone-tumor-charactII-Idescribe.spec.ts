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
          cy.visit(kneeMRTRoutes.KneeMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bone tumor', () => {
    it('Characterization II -> I describe', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('.nav-item')
        .eq(3)
        .first()
        .click();
      clickElement('kne_m_040105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      cy.byRRID('kne_m_0404110').click();
      elementShouldBeEnabled('kne_m_040257');
      elementShouldBeEnabled('kne_m_040278');
      elementShouldBeEnabled('kne_m_040258');
      elementShouldBeEnabled('kne_m_040259');
      elementShouldBeEnabled('kne_m_040262');
      elementShouldBeEnabled('kne_m_040272');
      elementShouldBeEnabled('kne_m_040273');
      elementShouldBeEnabled('kne_m_040274');
      elementShouldBeEnabled('kne_m_040275');
      elementShouldBeEnabled('kne_m_040276');
      elementShouldBeEnabled('kne_m_040277');
      elementShouldBeEnabled('kne_m_040382');
      elementShouldBeEnabled('kne_m_040383');
      elementShouldBeEnabled('kne_m_040384');
      elementShouldBeEnabled('kne_m_040385');
      elementShouldBeEnabled('kne_m_040387');
      elementShouldBeEnabled('kne_m_0403118');
      elementShouldBeEnabled('kne_m_0403119');
      elementShouldBeEnabled('kne_m_040389');
      elementShouldBeEnabled('kne_m_040390');
      elementShouldBeEnabled('kne_m_0403120');
      elementShouldBeEnabled('kne_m_0403121');
      elementShouldBeEnabled('kne_m_040488');
      elementShouldBeEnabled('kne_m_0404900');
      elementShouldBeEnabled('kne_m_040492');
      elementShouldBeEnabled('kne_m_040493');
      elementShouldBeEnabled('kne_m_0404124');
      elementShouldBeEnabled('kne_m_040531');
      clickElement('kne_m_040488', true, 'checkbox');
      elementShouldBeEnabled('kne_m_0404890');
      clickElement('kne_m_0404124', true, 'checkbox');
      elementShouldBeEnabled('kne_m_0404125');
      elementShouldBeEnabled('kne_m_0404126');
    });
  });
});
