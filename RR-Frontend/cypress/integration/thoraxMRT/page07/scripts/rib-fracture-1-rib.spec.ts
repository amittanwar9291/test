import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_070107', 'tho_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Rib Fracture 1 -> Rib', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('tho_m_070209');
      cy.byRRID('tho_m_070209').click();
      cy.get('.pointer')
        .eq(12)
        .click({ force: true });
      cy.get('.cls-3')
        .eq(1)
        .click({ force: true });
      elementShouldBeEnabled('tho_m_070326');
      elementShouldBeEnabled('tho_m_070417');
      elementShouldBeEnabled('tho_m_070422');
      elementShouldBeEnabled('tho_m_070514');

      clickElement('tho_m_070326', true, 'radio');
      elementShouldBeEnabled('tho_m_070328');
      elementShouldBeEnabled('tho_m_070329');
      elementShouldBeEnabled('tho_m_070330');

      clickElement('tho_m_070417', true, 'radio');
      elementShouldBeEnabled('tho_m_070419');
      elementShouldBeEnabled('tho_m_070420');
      elementShouldBeEnabled('tho_m_070421');

      clickElement('tho_m_070422', true, 'radio');
      elementShouldBeEnabled('tho_m_070424');
      elementShouldBeEnabled('tho_m_070425');
      elementShouldBeEnabled('tho_m_070426');

      clickElement('tho_m_070514', true, 'radio');
      elementShouldBeEnabled('tho_m_070515');
      elementShouldBeEnabled('tho_m_070516');
    });
  });
});
