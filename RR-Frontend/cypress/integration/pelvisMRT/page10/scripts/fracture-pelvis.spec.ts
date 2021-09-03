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
      findingColumn.selectFindingOptionByAppearance(3);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100203');
      elementShouldBeEnabled('pel_m_100315');
      elementShouldBeEnabled('pel_m_100316');
      elementShouldBeEnabled('pel_m_100317');
      elementShouldBeEnabled('pel_m_100318');

      clickElement('pel_m_100315', true, 'radio');
      elementShouldBeEnabled('pel_m_100428');
      elementShouldBeEnabled('pel_m_100429');
      elementShouldBeEnabled('pel_m_100430');

      clickElement('pel_m_100428', true, 'radio');
      elementShouldBeEnabled('pel_m_100538');
      elementShouldBeEnabled('pel_m_100539');
      elementShouldBeEnabled('pel_m_100540');

      clickElement('pel_m_100429', true, 'radio');
      elementShouldBeEnabled('pel_m_100541');
      elementShouldBeEnabled('pel_m_100542');
      elementShouldBeEnabled('pel_m_100541');

      clickElement('pel_m_100430', true, 'radio');
      elementShouldBeEnabled('pel_m_100593');
      elementShouldBeEnabled('pel_m_100594');
      elementShouldBeEnabled('pel_m_100595');

      clickElement('pel_m_100316', true, 'radio');
      elementShouldBeEnabled('pel_m_100431');
      elementShouldBeEnabled('pel_m_100432');
      elementShouldBeEnabled('pel_m_100433');

      clickElement('pel_m_100431', true, 'radio');
      elementShouldBeEnabled('pel_m_100596');
      elementShouldBeEnabled('pel_m_100597');

      clickElement('pel_m_100432', true, 'radio');
      elementShouldBeEnabled('pel_m_100598');
      elementShouldBeEnabled('pel_m_100599');
      elementShouldBeEnabled('pel_m_1005100');

      clickElement('pel_m_100433', true, 'radio');
      elementShouldBeEnabled('pel_m_1005101');
      elementShouldBeEnabled('pel_m_1005102');
      elementShouldBeEnabled('pel_m_1005103');

      clickElement('pel_m_100317', true, 'radio');
      elementShouldBeEnabled('pel_m_100434');
      elementShouldBeEnabled('pel_m_100435');
      elementShouldBeEnabled('pel_m_100436');

      clickElement('pel_m_100434', true, 'radio');
      elementShouldBeEnabled('pel_m_1005104');
      elementShouldBeEnabled('pel_m_1005105');
      elementShouldBeEnabled('pel_m_1005106');

      clickElement('pel_m_100435', true, 'radio');
      elementShouldBeEnabled('pel_m_1005107');
      elementShouldBeEnabled('pel_m_1005108');
      elementShouldBeEnabled('pel_m_1005109');

      clickElement('pel_m_100436', true, 'radio');
      elementShouldBeEnabled('pel_m_1005110');
      elementShouldBeEnabled('pel_m_1005111');
      elementShouldBeEnabled('pel_m_1005112');

      clickElement('pel_m_100318', true, 'radio');
      elementShouldBeEnabled('pel_m_100411');
      elementShouldBeEnabled('pel_m_100412');
      elementShouldBeEnabled('pel_m_100413');

      clickElement('pel_m_100413', true, 'radio');
      elementShouldBeEnabled('pel_m_100414');
    });
  });
});
