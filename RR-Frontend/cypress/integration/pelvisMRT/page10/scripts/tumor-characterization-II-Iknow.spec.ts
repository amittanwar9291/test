import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
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
    it('Bones -> Tumor -> Characterization II -> I know', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('.button-next').click();
      cy.get('rr-top-navigation')
        .contains('10')
        .click({ force: true });
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(14);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100240');
      elementShouldBeEnabled('pel_m_100387');
      elementShouldBeEnabled('pel_m_1004118');
      selectElementByRadioRole(3, true);

      cy.byRRID('pel_m_1004118').click();
      elementShouldBeEnabled('pel_m_100257');
      elementShouldBeEnabled('pel_m_100258');
      elementShouldBeEnabled('pel_m_100259');
      elementShouldBeEnabled('pel_m_100262');
      elementShouldBeEnabled('pel_m_100278');

      elementShouldBeEnabled('pel_m_100272');
      elementShouldBeEnabled('pel_m_100272');
      elementShouldBeEnabled('pel_m_100274');
      elementShouldBeEnabled('pel_m_100275');
      elementShouldBeEnabled('pel_m_100276');
      elementShouldBeEnabled('pel_m_100277');

      elementShouldBeEnabled('pel_m_100398');
      elementShouldBeEnabled('pel_m_100399');
      elementShouldBeEnabled('pel_m_1003100');
      elementShouldBeEnabled('pel_m_1003101');
      elementShouldBeEnabled('pel_m_1003102');
      elementShouldBeEnabled('pel_m_1003103');

      elementShouldBeEnabled('pel_m_1003106');
      elementShouldBeEnabled('pel_m_1003107');
      elementShouldBeEnabled('pel_m_1003108');
      elementShouldBeEnabled('pel_m_1003109');

      elementShouldBeEnabled('pel_m_1004143');
      elementShouldBeEnabled('pel_m_1004140');
      elementShouldBeEnabled('pel_m_1004145');
      elementShouldBeEnabled('pel_m_1004146');
      elementShouldBeEnabled('pel_m_100589');

      clickElement('pel_m_1004140', true, 'checkbox');
      elementShouldBeEnabled('pel_m_1004141');

      clickElement('pel_m_100589', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100590');
      elementShouldBeEnabled('pel_m_100591');
    });
  });
});
