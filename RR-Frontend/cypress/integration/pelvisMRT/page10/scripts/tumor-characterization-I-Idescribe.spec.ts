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
    it('Bones -> Tumor -> Characterization I -> I describe', () => {
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
      cy.byRRID('pel_m_100387').click();

      elementShouldBeEnabled('pel_m_100245');
      elementShouldBeEnabled('pel_m_100246');
      elementShouldBeEnabled('pel_m_100247');
      elementShouldBeEnabled('pel_m_100249');
      elementShouldBeEnabled('pel_m_100250');
      elementShouldBeEnabled('pel_m_100251');
      elementShouldBeEnabled('pel_m_100253');
      elementShouldBeEnabled('pel_m_100254');

      elementShouldBeEnabled('pel_m_100389');
      elementShouldBeEnabled('pel_m_100390');
      elementShouldBeEnabled('pel_m_100391');
      elementShouldBeEnabled('pel_m_100392');
      elementShouldBeEnabled('pel_m_100394');
      elementShouldBeEnabled('pel_m_100396');

      elementShouldBeEnabled('pel_m_1004127');
      elementShouldBeEnabled('pel_m_1004131');
      elementShouldBeEnabled('pel_m_1004132');
      elementShouldBeEnabled('pel_m_1004134');
      elementShouldBeEnabled('pel_m_1004135');
      elementShouldBeEnabled('pel_m_1004136');
      elementShouldBeEnabled('pel_m_1004137');
      elementShouldBeEnabled('pel_m_1004138');

      elementShouldBeEnabled('pel_m_100568');
      elementShouldBeEnabled('pel_m_100569');
      elementShouldBeEnabled('pel_m_100570');
      elementShouldBeEnabled('pel_m_100573');
      elementShouldBeEnabled('pel_m_100574');
      elementShouldBeEnabled('pel_m_100575');
      elementShouldBeEnabled('pel_m_100576');
      elementShouldBeEnabled('pel_m_100577');

      clickElement('pel_m_1004127', true, 'radio');
      elementShouldBeEnabled('pel_m_1004128');
      elementShouldBeEnabled('pel_m_1004129');

      clickElement('pel_m_1004131', true, 'radio');
      elementShouldBeEnabled('pel_m_1004128');
      elementShouldBeEnabled('pel_m_1004129');

      clickElement('pel_m_1004129', true, 'radio');
      elementShouldBeEnabled('pel_m_1004130');

      clickElement('pel_m_100570', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100571');
      elementShouldBeEnabled('pel_m_100572');
    });
  });
});
