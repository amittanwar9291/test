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
    it('Bones -> Rib Fracture 2 -> Or more Ribs', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('tho_m_070209');
      cy.byRRID('tho_m_070209').click();
      cy.get('.pointer')
        .eq(12)
        .click({ force: true });
      cy.get('.pointer')
        .eq(10)
        .click({ force: true });
      cy.get('.cls-3')
        .eq(1)
        .click({ force: true });
      elementShouldBeEnabled('tho_m_070211');
      elementShouldBeEnabled('tho_m_070212');
    });
  });
});
