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
    it('Bones -> Fracture Pelvis (Ao61)', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('.button-next').click();
      cy.get('rr-top-navigation')
        .contains('10')
        .click({ force: true });
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100203');
      elementShouldBeEnabled('pel_m_100311');
      elementShouldBeEnabled('pel_m_100312');
      elementShouldBeEnabled('pel_m_100313');
      elementShouldBeEnabled('pel_m_100314');

      clickElement('pel_m_100311', true, 'radio');
      elementShouldBeEnabled('pel_m_100419');
      elementShouldBeEnabled('pel_m_100420');
      elementShouldBeEnabled('pel_m_100421');

      clickElement('pel_m_100312', true, 'radio');
      elementShouldBeEnabled('pel_m_100422');
      elementShouldBeEnabled('pel_m_100423');
      elementShouldBeEnabled('pel_m_100424');

      clickElement('pel_m_100313', true, 'radio');
      elementShouldBeEnabled('pel_m_100425');
      elementShouldBeEnabled('pel_m_100426');
      elementShouldBeEnabled('pel_m_100427');

      clickElement('pel_m_100314', true, 'radio');
      elementShouldBeEnabled('pel_m_100411');
      elementShouldBeEnabled('pel_m_100412');
      elementShouldBeEnabled('pel_m_100413');

      clickElement('pel_m_100413', true, 'radio');
      elementShouldBeEnabled('pel_m_100414');
    });
  });
});
