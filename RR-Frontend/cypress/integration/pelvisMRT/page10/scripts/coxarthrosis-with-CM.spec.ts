import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 10 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_100107', 'pel_m_100106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Coxarthrosis with CM', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('rr-top-navigation a')
        .contains(10)
        .click({ force: true });
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(9);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100203');
      elementShouldBeEnabled('pel_m_100354');

      elementShouldBeEnabled('pel_m_100493');
      elementShouldBeEnabled('pel_m_100494');
      elementShouldBeEnabled('pel_m_100495');
      elementShouldBeEnabled('pel_m_100496');
      elementShouldBeEnabled('pel_m_100497');
      elementShouldBeEnabled('pel_m_100498');
      elementShouldBeEnabled('pel_m_100499');
      elementShouldBeEnabled('pel_m_1004100');
      elementShouldBeEnabled('pel_m_1004101');
      elementShouldBeEnabled('pel_m_1004103');
      elementShouldBeEnabled('pel_m_1004104');
      elementShouldBeEnabled('pel_m_1004105');

      elementShouldBeEnabled('pel_m_100559');
      elementShouldBeEnabled('pel_m_100560');
      elementShouldBeEnabled('pel_m_100561');

      clickElement('pel_m_100354', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100356');
      elementShouldBeEnabled('pel_m_100357');
      elementShouldBeEnabled('pel_m_100359');
      elementShouldBeEnabled('pel_m_100360');

      clickElement('pel_m_1004101', true, 'checkbox');
      elementShouldBeEnabled('pel_m_1004102');
    });
  });
});
