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
    it('Bones -> Subchondral Insufficiency Fracture (SIF)', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('.button-next').click();
      cy.get('rr-top-navigation')
        .contains('10')
        .click({ force: true });
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(5);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100203');

      elementShouldBeEnabled('pel_m_100335');
      elementShouldBeEnabled('pel_m_100336');
      elementShouldBeEnabled('pel_m_100337');
      elementShouldBeEnabled('pel_m_100338');
      elementShouldBeEnabled('pel_m_100339');
      elementShouldBeEnabled('pel_m_100342');
      elementShouldBeEnabled('pel_m_1003200');

      elementShouldBeEnabled('pel_m_100471');
      clickElement('pel_m_100339', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100340');

      clickElement('pel_m_100471', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100472');
    });
  });
});
