import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Patella', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_070107', 'kne_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Patella.url + '/' + pageId);
        });
      });
    });
  });

  it('Anatomical variants - Insall Salvati Index', () => {
    clickElement('kne_m_070105');
    findingColumn.selectFindingOptionByAppearance(0);
    clickElement('kne_m_070205');
    clickElement('kne_m_070210');

    cy.byRRID('kne_m_070211').type('6');
    cy.byRRID('kne_m_070212').type('4');
    cy.byRRID('kne_m_070213').should('have.value', 1.5);
    elementShouldBeEnabled('kne_m_070216');

    cy.byRRID('kne_m_070211')
      .clear()
      .type('5');
    cy.byRRID('kne_m_070212')
      .clear()
      .type('5');
    cy.byRRID('kne_m_070213').should('have.value', 1);
    elementShouldBeEnabled('kne_m_070215');

    cy.byRRID('kne_m_070211')
      .clear()
      .type('2');
    cy.byRRID('kne_m_070212')
      .clear()
      .type('7');
    cy.byRRID('kne_m_070213').should('have.value', 0.3);
    elementShouldBeEnabled('kne_m_070214');
  });
});
