import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 05 - Glandular Body', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_AnatomyEnhancement.url + '/' + pageId);
        });
      });
    });
  });

  describe('SELECT radio beneath "Glandular body"', () => {
    it('THEN verify index on page 09', () => {
      clickElement('mam_m_050107');
      cy.byRRID('mam_m_050104').within(() => {
        cy.get('input[type="radio"]').click({ force: true });
      });
      clickElement('mam_m_050112');
      cy.get('.ng-star-inserted')
        .contains(9)
        .click({ force: true });
      cy.byRRID('mam_m_090105').contains(1);
      cy.get('.ng-star-inserted')
        .contains(5)
        .click({ force: true });
      clickElement('mam_m_050108');
      cy.get('.ng-star-inserted')
        .contains(9)
        .click({ force: true });
      cy.byRRID('mam_m_090105').contains(2);
      cy.get('.ng-star-inserted')
        .contains(5)
        .click({ force: true });
      clickElement('mam_m_050109');
      cy.get('.ng-star-inserted')
        .contains(9)
        .click({ force: true });
      cy.byRRID('mam_m_090105').contains(3);
      cy.get('.ng-star-inserted')
        .contains(5)
        .click({ force: true });
      clickElement('mam_m_050110');
      cy.get('.ng-star-inserted')
        .contains(9)
        .click({ force: true });
      cy.byRRID('mam_m_090105').contains(4);
      cy.get('.ng-star-inserted')
        .contains(5)
        .click({ force: true });
    });
  });
});
