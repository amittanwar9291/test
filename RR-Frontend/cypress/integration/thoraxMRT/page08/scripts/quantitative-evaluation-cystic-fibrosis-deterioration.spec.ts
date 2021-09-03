import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_050107', 'tho_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_LungParenchyma.url + '/' + pageId);
        });
      });
    });
  });

  describe('Summary', () => {
    it('Summary -> Quantitative Evaluation Cystic Fibrosis deterioration', () => {
      clickElement('tho_m_050105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      clickElement('tho_m_050205', true, 'radio');
      cy.byRRID('tho_m_050306').click();
      cy.byRRID('tho_m_0502120').click();
      cy.byRRID('tho_m_0502120')
        .get('.lungs-element')
        .eq(2)
        .click();
      cy.byRRID('tho_m_0502120')
        .get('.lungs-element')
        .eq(4)
        .click();
      cy.byRRID('tho_m_050306')
        .get('.close-circle')
        .eq(0)
        .click({ force: true });
      cy.get('rr-top-navigation')
        .contains('8')
        .click();

      clickElement('tho_m_080403', true, 'radio');

      // TODO: FE attribute is "rrid" instead of "rr-id" (bug 22721)
      elementShouldBeEnabled('tho_m_080406');
      elementShouldBeEnabled('tho_m_080408');

      clickElement('tho_m_080404', true, 'radio');

      // TODO: FE attribute is "rrid" instead of "rr-id" (bug 22721)
      elementShouldBeEnabled('tho_m_080406');
      elementShouldBeEnabled('tho_m_080408');

      clickElement('tho_m_080501', true, 'checkbox');
      cy.byRRID('tho_m_080504')
        .type('1')
        .click();
    });
  });
});
